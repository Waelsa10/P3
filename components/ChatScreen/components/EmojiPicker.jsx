// components/ChatScreen/components/EmojiPicker.jsx
import React from "react";
import { Popover, IconButton, Tab } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { EMOJI_CATEGORIES } from "../constants";
import {
  EmojiPickerContainer,
  EmojiPickerHeader,
  EmojiSearchContainer,
  EmojiSearchInput,
  EmojiCategoryTabs,
  EmojiGrid,
  EmojiButton,
  NoEmojisMessage,
} from "../ChatScreen.styles";

const EmojiPicker = ({
  open,
  anchorEl,
  onClose,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  emojis,
  onEmojiSelect,
  darkMode,
}) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      PaperProps={{
        style: {
          backgroundColor: darkMode ? '#2a2a2a' : 'white',
          color: darkMode ? '#e0e0e0' : 'black',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        },
      }}
    >
      <EmojiPickerContainer darkMode={darkMode}>
        <EmojiPickerHeader darkMode={darkMode}>
          <h3>Emojis</h3>
          <IconButton onClick={onClose} size="small">
            <CloseIcon style={{ color: darkMode ? '#e0e0e0' : 'inherit' }} />
          </IconButton>
        </EmojiPickerHeader>

        <EmojiSearchContainer darkMode={darkMode}>
          <SearchIcon style={{ color: darkMode ? '#888' : '#666' }} />
          <EmojiSearchInput
            darkMode={darkMode}
            placeholder="Search emoji..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </EmojiSearchContainer>

        <EmojiCategoryTabs
          value={selectedCategory}
          onChange={(e, newValue) => onCategoryChange(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          darkMode={darkMode}
          TabIndicatorProps={{
            style: {
              backgroundColor: darkMode ? '#d32f2f' : '#f44336',
            },
          }}
        >
          {Object.entries(EMOJI_CATEGORIES).map(([key, { name, icon }]) => (
            <Tab
              key={key}
              value={key}
              label={icon}
              title={name}
              style={{
                color: darkMode ? '#e0e0e0' : 'black',
                minWidth: 50,
              }}
            />
          ))}
        </EmojiCategoryTabs>

        <EmojiGrid darkMode={darkMode}>
          {emojis.length > 0 ? (
            emojis.map((emoji, index) => (
              <EmojiButton
                key={`${emoji}-${index}`}
                onClick={() => onEmojiSelect(emoji)}
                darkMode={darkMode}
              >
                {emoji}
              </EmojiButton>
            ))
          ) : (
            <NoEmojisMessage darkMode={darkMode}>
              {selectedCategory === "recent"
                ? "No recent emojis. Start using emojis!"
                : "No emojis found"}
            </NoEmojisMessage>
          )}
        </EmojiGrid>
      </EmojiPickerContainer>
    </Popover>
  );
};

export default EmojiPicker;