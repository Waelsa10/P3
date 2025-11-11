// components/ChatScreen/components/ChatInput.jsx
import React from "react";
import styled from "styled-components";
import { IconButton, CircularProgress } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import StopIcon from "@mui/icons-material/Stop";

function ChatInput({
  input,
  setInput,
  inputRef,
  isRecording,
  recordingTime,
  onSubmit,
  onEmojiClick,
  onStartRecording,
  onStopRecording,
  darkMode,
}) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <InputContainer darkMode={darkMode}>
      <Form onSubmit={onSubmit}>
        <EmojiButton onClick={onEmojiClick} darkMode={darkMode}>
          <InsertEmoticonIcon />
        </EmojiButton>

        <Input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          disabled={isRecording}
          darkMode={darkMode}
        />

        {isRecording ? (
          <RecordingContainer darkMode={darkMode}>
            <RecordingIndicator>
              <RecordingDot />
              <RecordingTime>{formatTime(recordingTime)}</RecordingTime>
            </RecordingIndicator>
            <StopButton onClick={onStopRecording} darkMode={darkMode}>
              <StopIcon />
            </StopButton>
          </RecordingContainer>
        ) : (
          <ButtonsContainer>
            {input.trim() ? (
              <SendButton type="submit" darkMode={darkMode}>
                <SendIcon />
              </SendButton>
            ) : (
              <MicButton onClick={onStartRecording} darkMode={darkMode}>
                <MicIcon />
              </MicButton>
            )}
          </ButtonsContainer>
        )}
      </Form>
    </InputContainer>
  );
}

export default ChatInput;

// Styled Components
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "white")};
  border-top: 1px solid ${(props) => (props.darkMode ? "#333" : "whitesmoke")};
  z-index: 100;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const EmojiButton = styled(IconButton)`
  && {
    color: ${(props) => (props.darkMode ? "#b0b0b0" : "#919191")};
    padding: 8px;
    
    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${(props) =>
        props.darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"};
    }
  }
`;

const Input = styled.input`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 25px;
  background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "whitesmoke")};
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "black")};
  padding: 12px 20px;
  font-size: 15px;
  min-width: 0; /* Allow input to shrink below content size */

  &::placeholder {
    color: ${(props) => (props.darkMode ? "#888" : "#999")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const SendButton = styled(IconButton)`
  && {
    color: ${(props) => (props.darkMode ? "#25D366" : "#128C7E")};
    padding: 8px;

    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${(props) =>
        props.darkMode ? "rgba(37, 211, 102, 0.1)" : "rgba(18, 140, 126, 0.1)"};
    }
  }
`;

const MicButton = styled(IconButton)`
  && {
    color: ${(props) => (props.darkMode ? "#b0b0b0" : "#919191")};
    padding: 8px;

    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${(props) =>
        props.darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"};
    }
  }
`;

const RecordingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "#f0f0f0")};
  border-radius: 25px;
  padding: 8px 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 8px;
    padding: 6px 10px;
  }
`;

const RecordingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const RecordingDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #f44336;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8);
    }
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

const RecordingTime = styled.span`
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "#333")};
  font-size: 14px;
  font-weight: 500;
  min-width: 40px;

  @media (max-width: 768px) {
    font-size: 13px;
    min-width: 35px;
  }
`;

const StopButton = styled(IconButton)`
  && {
    color: #f44336;
    padding: 6px;

    @media (max-width: 768px) {
      padding: 4px;
    }

    &:hover {
      background-color: rgba(244, 67, 54, 0.1);
    }
  }
`;