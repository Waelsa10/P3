// components/ChatScreen/ChatScreen.styles.js
import styled from "styled-components";
import { Tabs } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => props.darkMode ? '#1e1e1e' : 'white'};
`;

export const Header = styled.div`
  position: sticky;
  background-color: ${props => props.darkMode ? '#2a2a2a' : 'white'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid ${props => props.darkMode ? '#333' : 'whitesmoke'};
  flex-shrink: 0;
`;

export const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};

  > h3 {
    margin-bottom: 3px;
    color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  }
  > p {
    font-size: 14px;
    color: ${props => props.darkMode ? '#aaa' : 'gray'};
  }
`;

export const HeaderIcons = styled.div``;

export const MessageContainer = styled.div`
  padding: 30px;
  background-color: ${props => props.darkMode ? '#0d1117' : '#e5ded8'};
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.darkMode ? '#2a2a2a' : 'white'};
  gap: 10px;
  flex-shrink: 0;
  border-top: 1px solid ${props => props.darkMode ? '#333' : 'whitesmoke'};
`;

export const Input = styled.input`
  flex: 1;
  flex-shrink: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.darkMode ? '#1e1e1e' : 'whitesmoke'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  padding: 15px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;

  ::placeholder {
    color: ${props => props.darkMode ? '#888' : '#999'};
  }
`;

export const EndOfMessage = styled.div`
  margin-bottom: 50px;
`;

export const OfflineMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: ${props => props.darkMode ? '#f8d7da' : '#721c24'};
  background-color: ${props => props.darkMode ? '#5a1f1f' : '#f8d7da'};
  border: 1px solid ${props => props.darkMode ? '#721c24' : '#f5c6cb'};
  border-radius: 4px;
  margin: 20px;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: ${props => props.darkMode ? '#ffeeba' : '#856404'};
  background-color: ${props => props.darkMode ? '#664d03' : '#fff3cd'};
  border: 1px solid ${props => props.darkMode ? '#856404' : '#ffeeba'};
  border-radius: 4px;
  margin: 20px;
`;

export const ErrorAlert = styled.div`
  color: ${props => props.darkMode ? '#f8d7da' : '#721c24'};
  background-color: ${props => props.darkMode ? '#5a1f1f' : '#f8d7da'};
  border: 1px solid ${props => props.darkMode ? '#721c24' : '#f5c6cb'};
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  text-align: center;
`;

export const SendButton = styled.button`
  background-color: ${props => props.darkMode ? '#d32f2f' : '#f44336'} !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
  border-radius: 8px !important;
  cursor: pointer !important;
  font-weight: 600 !important;
  display: block !important;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  opacity: ${props => props.disabled ? '0.5' : '1'} !important;
  
  &:hover {
    background-color: ${props => props.darkMode ? '#b71c1c' : '#d32f2f'} !important;
  }

  &:disabled {
    cursor: not-allowed !important;
  }
`;

export const FilePreview = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const FileInfo = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: ${props => props.darkMode ? '#1e1e1e' : '#f5f5f5'};
  border-radius: 8px;
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};

  p {
    margin: 5px 0;
  }
`;

export const FileInput = styled.input`
  width: 100%;
  outline: 0;
  border: 1px solid ${props => props.darkMode ? '#444' : '#ddd'};
  border-radius: 8px;
  background-color: ${props => props.darkMode ? '#1e1e1e' : 'white'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  padding: 12px;
  font-size: 16px;
  margin-bottom: 10px;

  ::placeholder {
    color: ${props => props.darkMode ? '#888' : '#999'};
  }
`;

export const UploadProgress = styled.div`
  text-align: center;
  margin-top: 20px;

  p {
    margin-top: 10px;
    font-weight: bold;
  }
`;

export const ProfileContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const ProfileInfo = styled.div`
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};

  h2 {
    margin-bottom: 15px;
    color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  }

  p {
    margin: 10px 0;
    font-size: 16px;
    color: ${props => props.darkMode ? '#aaa' : 'gray'};
  }
`;

export const RecordingIndicator = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background-color: ${props => props.darkMode ? '#1e1e1e' : '#ffebee'};
  border-radius: 10px;
  color: ${props => props.darkMode ? '#e0e0e0' : '#c62828'};
  font-weight: 500;
`;

export const RecordingDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #f44336;
  border-radius: 50%;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }
`;

export const VoicePreview = styled.div`
  padding: 20px;
  text-align: center;
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const EmojiPickerContainer = styled.div`
  width: 350px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.darkMode ? '#2a2a2a' : 'white'};
`;

export const EmojiPickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${props => props.darkMode ? '#444' : '#e0e0e0'};

  h3 {
    margin: 0;
    font-size: 18px;
    color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  }
`;

export const EmojiSearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  border-bottom: 1px solid ${props => props.darkMode ? '#444' : '#e0e0e0'};
`;

export const EmojiSearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: ${props => props.darkMode ? '#1e1e1e' : '#f5f5f5'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;

  ::placeholder {
    color: ${props => props.darkMode ? '#888' : '#999'};
  }
`;

export const EmojiCategoryTabs = styled(Tabs)`
  border-bottom: 1px solid ${props => props.darkMode ? '#444' : '#e0e0e0'};
  min-height: 48px;

  .MuiTabs-flexContainer {
    justify-content: space-around;
  }
`;

export const EmojiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 4px;
  padding: 12px;
  overflow-y: auto;
  max-height: 280px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.darkMode ? '#1e1e1e' : '#f1f1f1'};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.darkMode ? '#555' : '#888'};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.darkMode ? '#666' : '#555'};
  }
`;

export const EmojiButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.darkMode ? '#3a3a3a' : '#f0f0f0'};
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.1);
  }
`;

export const NoEmojisMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px 20px;
  color: ${props => props.darkMode ? '#888' : '#999'};
  font-size: 14px;
`;

export const ReplyPreviewBar = styled.div`
  display: flex;
  padding: 12px 16px;
  background-color: ${props => props.darkMode ? '#2a2a2a' : '#f5f5f5'};
  border-top: 1px solid ${props => props.darkMode ? '#333' : '#e0e0e0'};
  gap: 12px;
  align-items: center;
`;

export const ReplyBarIndicator = styled.div`
  width: 4px;
  height: 50px;
  background-color: #00a884;
  border-radius: 2px;
  flex-shrink: 0;
`;

export const ReplyPreviewContent = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const ReplyPreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  
  span {
    font-size: 13px;
    font-weight: 600;
    color: #00a884;
  }
`;

export const ReplyPreviewText = styled.div`
  font-size: 14px;
  color: ${props => props.darkMode ? '#aaa' : '#666'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;