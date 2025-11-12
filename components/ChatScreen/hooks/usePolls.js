// components/ChatScreen/hooks/usePolls.js
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { MESSAGE_STATUS } from "../constants";
import { checkIfBlocked } from "../utils";

export const usePolls = (chatId, user, recipientEmail) => {
  const [showPollDialog, setShowPollDialog] = useState(false);
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState(["", ""]);
  const [allowMultipleAnswers, setAllowMultipleAnswers] = useState(false);
  const [isSendingPoll, setIsSendingPoll] = useState(false);

  const openPollDialog = () => {
    setShowPollDialog(true);
    setPollQuestion("");
    setPollOptions(["", ""]);
    setAllowMultipleAnswers(false);
  };

  const closePollDialog = () => {
    setShowPollDialog(false);
    setPollQuestion("");
    setPollOptions(["", ""]);
    setAllowMultipleAnswers(false);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);

    // Add new blank option if last two options are filled
    if (index === pollOptions.length - 1 && index >= 1) {
      const lastTwoFilled = newOptions[index] && newOptions[index - 1];
      if (lastTwoFilled && pollOptions.length < 10) {
        setPollOptions([...newOptions, ""]);
      }
    }
  };

  const removeOption = (index) => {
    if (pollOptions.length > 2) {
      const newOptions = pollOptions.filter((_, i) => i !== index);
      setPollOptions(newOptions);
    }
  };

  const sendPoll = async (
    replyingTo,
    setSendingError,
    setReplyingTo,
    scrollToBottom,
    isSelfChat
  ) => {
    if (!chatId || !user || !recipientEmail) {
      console.error("Missing required data for sending poll");
      return;
    }

    if (!pollQuestion.trim()) {
      setSendingError("Please enter a question for the poll");
      return;
    }

    const validOptions = pollOptions.filter((opt) => opt.trim());
    if (validOptions.length < 2) {
      setSendingError("Please provide at least 2 options");
      return;
    }

    try {
      setIsSendingPoll(true);

      if (!isSelfChat) {
        const isBlocked = await checkIfBlocked(user.email, recipientEmail);
        if (isBlocked) {
          setSendingError("You cannot send messages to this user.");
          return;
        }
      }

      const pollData = {
        timestamp: serverTimestamp(),
        user: user.email,
        photoURL: user.photoURL,
        status: MESSAGE_STATUS.SENT,
        poll: {
          question: pollQuestion.trim(),
          options: validOptions.map((opt) => ({
            text: opt,
            votes: [],
          })),
          allowMultipleAnswers,
          createdBy: user.email,
        },
      };

      if (replyingTo) {
        pollData.replyTo = {
          id: replyingTo.id,
          user: replyingTo.user,
          message: replyingTo.message,
          timestamp: replyingTo.timestamp,
        };
      }

      await addDoc(collection(db, "chats", chatId, "messages"), pollData);

      closePollDialog();
      if (setReplyingTo) setReplyingTo(null);
      scrollToBottom();
    } catch (error) {
      console.error("Error sending poll:", error);
      setSendingError("Failed to send poll. Please try again.");
    } finally {
      setIsSendingPoll(false);
    }
  };

  return {
    showPollDialog,
    pollQuestion,
    setPollQuestion,
    pollOptions,
    allowMultipleAnswers,
    setAllowMultipleAnswers,
    isSendingPoll,
    openPollDialog,
    closePollDialog,
    handleOptionChange,
    removeOption,
    sendPoll,
  };
};