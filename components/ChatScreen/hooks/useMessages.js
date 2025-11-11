// components/ChatScreen/hooks/useMessages.js
import { useMemo } from "react";
import { collection, query, orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase";

export const useMessages = (chatId) => {
  const messagesRef = useMemo(() => {
    if (!chatId) return null;
    return collection(db, "chats", chatId, "messages");
  }, [chatId]);

  const messagesQuery = useMemo(() => {
    if (!messagesRef) return null;
    return query(messagesRef, orderBy("timestamp", "asc"));
  }, [messagesRef]);

  const [messagesSnapshot] = useCollection(messagesQuery || null);

  return {
    messagesSnapshot,
  };
};