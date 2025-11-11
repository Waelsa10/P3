// components/ChatScreen/hooks/useEmojiPicker.js
import { useState, useEffect } from "react";
import { EMOJIS } from "../constants";

export const useEmojiPicker = () => {
  const [emojiAnchorEl, setEmojiAnchorEl] = useState(null);
  const [selectedEmojiCategory, setSelectedEmojiCategory] = useState("recent");
  const [recentEmojis, setRecentEmojis] = useState([]);
  const [emojiSearchTerm, setEmojiSearchTerm] = useState("");

  // Load recent emojis from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("recentEmojis");
    if (stored) {
      setRecentEmojis(JSON.parse(stored));
    }
  }, []);

  const saveRecentEmoji = (emoji) => {
    const updated = [emoji, ...recentEmojis.filter((e) => e !== emoji)].slice(0, 30);
    setRecentEmojis(updated);
    localStorage.setItem("recentEmojis", JSON.stringify(updated));
  };

  const handleEmojiPickerOpen = (event) => {
    setEmojiAnchorEl(event.currentTarget);
  };

  const handleEmojiPickerClose = () => {
    setEmojiAnchorEl(null);
    setEmojiSearchTerm("");
  };

  const getFilteredEmojis = () => {
    if (selectedEmojiCategory === "recent") {
      return recentEmojis;
    }

    const categoryEmojis = EMOJIS[selectedEmojiCategory] || [];
    return categoryEmojis;
  };

  return {
    emojiAnchorEl,
    selectedEmojiCategory,
    setSelectedEmojiCategory,
    emojiSearchTerm,
    setEmojiSearchTerm,
    recentEmojis,
    handleEmojiPickerOpen,
    handleEmojiPickerClose,
    saveRecentEmoji,
    getFilteredEmojis,
    openEmojiPicker: Boolean(emojiAnchorEl),
  };
};