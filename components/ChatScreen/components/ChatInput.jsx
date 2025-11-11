// components/ChatScreen/components/ChatInput.jsx
import React from "react";
import { IconButton } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import { 
  InputContainer, 
  Input, 
  SendButton, 
  RecordingIndicator, 
  RecordingDot 
} from "../ChatScreen.styles";
import { formatTime } from "../utils";

const ChatInput = ({ 
  input,
  setInput,
  inputRef,
  isRecording,
  recordingTime,
  onSubmit,
  onEmojiClick,
  onStartRecording,
  onStopRecording,
  darkMode 
}) => {
  return (
    <InputContainer onSubmit={onSubmit} darkMode={darkMode}>
      <IconButton onClick={onEmojiClick}>
        <InsertEmoticonIcon style={{ color: darkMode ? '#e0e0e0' : 'inherit' }} />
      </IconButton>
      
      {isRecording ? (
        <RecordingIndicator darkMode={darkMode}>
          <RecordingDot />
          <span>Recording... {formatTime(recordingTime)}</span>
          <IconButton onClick={onStopRecording} style={{ color: darkMode ? '#e0e0e0' : '#f44336' }}>
            <StopIcon />
          </IconButton>
        </RecordingIndicator>
      ) : (
        <Input
          ref={inputRef}
          darkMode={darkMode}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          type="text"
        />
      )}
      
      {!isRecording && (
        <SendButton
          type="submit"
          disabled={!input?.trim()}
          darkMode={darkMode}
        >
          Send
        </SendButton>
      )}
      
      <IconButton onClick={isRecording ? onStopRecording : onStartRecording}>
        <MicIcon style={{ color: isRecording ? '#f44336' : (darkMode ? '#e0e0e0' : 'inherit') }} />
      </IconButton>
    </InputContainer>
  );
};

export default ChatInput;