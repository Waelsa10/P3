// components/Message.jsx
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import styled from "styled-components";
import moment from "moment";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ImageIcon from "@mui/icons-material/Image";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplyIcon from "@mui/icons-material/Reply";
import { useContext, useState } from "react";
import { DarkModeContext } from "./DarkModeProvider";
import MessageStatus from "./ChatScreen/components/MessageStatus";
import { MESSAGE_STATUS } from "./ChatScreen/constants";

function Message({ user, message, messageId, onDelete, onReply }) {
  const [userLoggedIn] = useAuthState(auth);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // Get dark mode context
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode } = darkModeContext || { darkMode: false };

  const TypeOfMessage = user === userLoggedIn?.email ? Sender : Receiver;
  const isOwnMessage = user === userLoggedIn?.email;

  // Check if message is less than 1 hour old
  const isRecentMessage = () => {
    if (!message.timestamp) return false;
    const messageTime = moment(message.timestamp);
    const now = moment();
    const hoursDiff = now.diff(messageTime, 'hours');
    return hoursDiff < 1;
  };

  // Open menu
  const handleMenuOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  // Close menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle delete
  const handleDelete = () => {
    handleMenuClose();
    if (onDelete && messageId) {
      onDelete(messageId);
    }
  };

  // Handle reply
  const handleReply = () => {
    handleMenuClose();
    if (onReply) {
      onReply({
        id: messageId,
        user: user,
        message: message.message,
        timestamp: message.timestamp,
        fileURL: message.fileURL,
        fileName: message.fileName,
        fileType: message.fileType,
        voiceURL: message.voiceURL,
        voiceDuration: message.voiceDuration,
      });
    }
  };

  // Optimize Cloudinary image URLs with transformations
  const getOptimizedImageUrl = (url) => {
    if (!url || !url.includes('cloudinary.com')) return url;
    const transformation = '/w_600,h_600,c_limit,f_auto,q_auto';
    return url.replace('/upload/', `/upload${transformation}/`);
  };

  // Get thumbnail for video
  const getVideoThumbnail = (url) => {
    if (!url || !url.includes('cloudinary.com')) return null;
    const transformation = '/w_600,h_400,c_fill,f_jpg,q_auto';
    return url.replace('/upload/', `/upload${transformation}/`).replace(/\.[^.]+$/, '.jpg');
  };

  // Download file function with better Cloudinary support
  const downloadFile = async (url, fileName) => {
    try {
      let downloadUrl = url;
      if (url.includes('cloudinary.com')) {
        downloadUrl = url.replace('/upload/', '/upload/fl_attachment/');
      }

      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 100);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(url, '_blank');
    }
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return "Unknown size";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  // Format voice duration
  const formatDuration = (seconds) => {
    if (!seconds) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Get file type icon and color
  const getFileIcon = (fileType) => {
    if (!fileType) return { icon: InsertDriveFileIcon, color: darkMode ? '#64b5f6' : '#1976d2' };
    
    if (fileType.includes('pdf')) return { icon: InsertDriveFileIcon, color: '#d32f2f' };
    if (fileType.includes('word') || fileType.includes('document')) return { icon: InsertDriveFileIcon, color: '#2196f3' };
    if (fileType.includes('sheet') || fileType.includes('excel')) return { icon: InsertDriveFileIcon, color: '#4caf50' };
    if (fileType.includes('zip') || fileType.includes('rar')) return { icon: InsertDriveFileIcon, color: '#ff9800' };
    
    return { icon: InsertDriveFileIcon, color: darkMode ? '#64b5f6' : '#1976d2' };
  };

  const fileIconData = getFileIcon(message.fileType);
  const FileIconComponent = fileIconData.icon;
  const showDelete = isRecentMessage();

  return (
    <Container>
      <TypeOfMessage darkMode={darkMode} isSender={isOwnMessage}>
        <MessageContent>
          {/* Reply Preview (if this message is a reply) */}
          {message.replyTo && (
            <ReplyPreview darkMode={darkMode}>
              <ReplyBar isSender={isOwnMessage} />
              <ReplyContent>
                <ReplyUser darkMode={darkMode}>
                  {message.replyTo.user === userLoggedIn?.email ? 'You' : message.replyTo.user}
                </ReplyUser>
                <ReplyText darkMode={darkMode}>
                  {message.replyTo.message || message.replyTo.fileName || '🎤 Voice message'}
                </ReplyText>
              </ReplyContent>
            </ReplyPreview>
          )}

          {/* File Attachment */}
          {message.fileURL && (
            <FileAttachment>
              {/* Image Preview */}
              {message.fileType?.startsWith("image/") ? (
                <ImageContainer>
                  {!imageLoaded && !imageError && (
                    <ImagePlaceholder darkMode={darkMode}>
                      <ImageIcon style={{ fontSize: 48, color: darkMode ? '#555' : '#ccc' }} />
                    </ImagePlaceholder>
                  )}
                  {imageError ? (
                    <ImageError darkMode={darkMode}>
                      <ImageIcon style={{ fontSize: 48, color: darkMode ? '#666' : '#999' }} />
                      <p>Failed to load image</p>
                    </ImageError>
                  ) : (
                    <ImagePreview
                      src={getOptimizedImageUrl(message.fileURL)}
                      alt={message.fileName || "Image"}
                      onClick={() => window.open(message.fileURL, "_blank")}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      loading="lazy"
                      style={{ display: imageLoaded ? 'block' : 'none' }}
                    />
                  )}
                  {message.fileName && (
                    <ImageFileName darkMode={darkMode}>{message.fileName}</ImageFileName>
                  )}
                </ImageContainer>
              ) : message.fileType?.startsWith("video/") ? (
                /* Video Preview */
                <VideoContainer>
                  <VideoPreview 
                    controls 
                    preload="metadata"
                    poster={getVideoThumbnail(message.fileURL)}
                  >
                    <source src={message.fileURL} type={message.fileType} />
                    Your browser does not support the video tag.
                  </VideoPreview>
                  {message.fileName && (
                    <VideoFileName darkMode={darkMode}>
                      <VideoLibraryIcon style={{ fontSize: 16, marginRight: 4 }} />
                      {message.fileName}
                    </VideoFileName>
                  )}
                </VideoContainer>
              ) : message.fileType?.startsWith("audio/") && !message.voiceURL ? (
                /* Audio File (not voice message) */
                <AudioFileContainer darkMode={darkMode}>
                  <AudioFileHeader>
                    <AudiotrackIcon style={{ fontSize: 32, color: darkMode ? '#64b5f6' : '#1976d2' }} />
                    <AudioFileInfo>
                      <AudioFileName darkMode={darkMode}>
                        {message.fileName || "Audio File"}
                      </AudioFileName>
                      <AudioFileSize darkMode={darkMode}>
                        {formatFileSize(message.fileSize)}
                      </AudioFileSize>
                    </AudioFileInfo>
                  </AudioFileHeader>
                  <AudioPlayer controls src={message.fileURL} darkMode={darkMode}>
                    Your browser does not support the audio element.
                  </AudioPlayer>
                </AudioFileContainer>
              ) : (
                /* Other Files (PDF, Documents, etc.) */
                <FileInfo darkMode={darkMode}>
                  <FileIconComponent style={{ fontSize: 40, color: fileIconData.color }} />
                  <FileDetails>
                    <FileName darkMode={darkMode}>{message.fileName || "File"}</FileName>
                    <FileSize darkMode={darkMode}>
                      {formatFileSize(message.fileSize)}
                    </FileSize>
                  </FileDetails>
                </FileInfo>
              )}

              {/* Download Button */}
              <DownloadButton
                onClick={() => downloadFile(message.fileURL, message.fileName)}
                size="small"
                darkMode={darkMode}
              >
                <DownloadIcon fontSize="small" />
                <span style={{ marginLeft: 5, fontSize: 12 }}>Download</span>
              </DownloadButton>
            </FileAttachment>
          )}

          {/* Voice Message */}
          {message.voiceURL && (
            <VoiceMessageContainer darkMode={darkMode}>
              <VoiceLabel darkMode={darkMode}>🎤 Voice Message</VoiceLabel>
              <AudioPlayer controls src={message.voiceURL} darkMode={darkMode}>
                Your browser does not support the audio element.
              </AudioPlayer>
              {message.voiceDuration && (
                <VoiceDuration darkMode={darkMode}>
                  Duration: {formatDuration(message.voiceDuration)}
                </VoiceDuration>
              )}
            </VoiceMessageContainer>
          )}

          {/* Text Message */}
          {message.message && message.message.trim() && (
            <MessageText darkMode={darkMode}>{message.message}</MessageText>
          )}

          {/* Message Footer with Timestamp and Status */}
          <MessageFooter>
            <Timestamp darkMode={darkMode}>
              {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
            </Timestamp>
            {isOwnMessage && (
              <MessageStatus 
                status={message.status || MESSAGE_STATUS.SENT} 
                darkMode={darkMode} 
              />
            )}
          </MessageFooter>
        </MessageContent>

        {/* Three Dots Menu */}
        <MessageActions>
          <MessageMenuButton
            onClick={handleMenuOpen}
            size="small"
            darkMode={darkMode}
            isSender={isOwnMessage}
          >
            <MoreVertIcon fontSize="small" />
          </MessageMenuButton>
        </MessageActions>

        {/* Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              backgroundColor: darkMode ? '#2a2a2a' : 'white',
              color: darkMode ? '#e0e0e0' : 'black',
            },
          }}
        >
          <MenuItem onClick={handleReply}>
            <ListItemIcon>
              <ReplyIcon fontSize="small" style={{ color: darkMode ? '#64b5f6' : '#1976d2' }} />
            </ListItemIcon>
            <ListItemText style={{ color: darkMode ? '#e0e0e0' : 'black' }}>
              Reply
            </ListItemText>
          </MenuItem>
          
          {showDelete && isOwnMessage && (
            <MenuItem onClick={handleDelete}>
              <ListItemIcon>
                <DeleteIcon fontSize="small" style={{ color: '#d32f2f' }} />
              </ListItemIcon>
              <ListItemText style={{ color: darkMode ? '#e0e0e0' : 'black' }}>
                Delete
              </ListItemText>
            </MenuItem>
          )}
        </Menu>
      </TypeOfMessage>
    </Container>
  );
}

export default Message;

// Styled Components
const Container = styled.div`
  margin: 5px 0;
  
  &:hover {
    ${props => `
      ${MessageActions} {
        opacity: 1;
      }
    `}
  }
`;

const MessageElement = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  width: fit-content;
  max-width: 65%;
  padding: 10px 15px;
  padding-top: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 8px;
  position: relative;
  word-wrap: break-word;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: ${props => props.darkMode ? '#056162' : '#dcf8c6'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  border-radius: 8px 8px 0 8px;
`;

const Receiver = styled(MessageElement)`
  background-color: ${props => props.darkMode ? '#1f2c33' : 'whitesmoke'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  text-align: left;
  border-radius: 8px 8px 8px 0;
  margin-left: 10px;
  margin-right: auto;
`;

const MessageContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const MessageActions = styled.div`
  opacity: 0;
  transition: opacity 0.2s;
  display: flex;
  align-items: flex-start;
`;

const MessageMenuButton = styled(IconButton)`
  opacity: 0.6 !important;
  padding: 4px !important;
  color: ${props => props.darkMode ? '#e0e0e0' : '#666'} !important;
  
  &:hover {
    opacity: 1 !important;
    background-color: ${props => props.darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} !important;
  }
`;

const MessageFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 4px;
  padding-top: 2px;
`;

const ReplyPreview = styled.div`
  display: flex;
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${props => props.darkMode ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)'};
  border-radius: 6px;
`;

const ReplyBar = styled.div`
  width: 4px;
  background-color: ${props => props.isSender ? '#00a884' : '#1976d2'};
  border-radius: 2px;
  margin-right: 8px;
  flex-shrink: 0;
`;

const ReplyContent = styled.div`
  flex: 1;
  overflow: hidden;
`;

const ReplyUser = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.darkMode ? '#64b5f6' : '#1976d2'};
  margin-bottom: 2px;
`;

const ReplyText = styled.div`
  font-size: 13px;
  color: ${props => props.darkMode ? '#aaa' : '#666'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MessageText = styled.p`
  margin: 0;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 1.4;
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  white-space: pre-wrap;
`;

const Timestamp = styled.span`
  color: ${props => props.darkMode ? '#8696a0' : 'gray'};
  font-size: 11px;
  margin-left: 8px;
`;

const FileAttachment = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// Image Styles
const ImageContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${props => props.darkMode ? '#1a1a1a' : '#f5f5f5'};
`;

const ImagePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background-color: ${props => props.darkMode ? '#2a2a2a' : '#e0e0e0'};
`;

const ImageError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background-color: ${props => props.darkMode ? '#2a2a2a' : '#f0f0f0'};
  
  p {
    margin-top: 10px;
    color: ${props => props.darkMode ? '#888' : '#666'};
    font-size: 14px;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  max-width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.95;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ImageFileName = styled.div`
  padding: 8px;
  font-size: 12px;
  color: ${props => props.darkMode ? '#8696a0' : '#666'};
  background-color: ${props => props.darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.9)'};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Video Styles
const VideoContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

const VideoPreview = styled.video`
  width: 100%;
  max-width: 100%;
  max-height: 400px;
  border-radius: 8px;
  background-color: #000;
`;

const VideoFileName = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 8px;
  font-size: 12px;
  color: ${props => props.darkMode ? '#8696a0' : '#666'};
  background-color: ${props => props.darkMode ? '#2a3942' : '#f0f0f0'};
  border-radius: 6px;
  margin-top: 6px;
`;

// Audio File Styles
const AudioFileContainer = styled.div`
  padding: 12px;
  background-color: ${props => props.darkMode ? '#2a3942' : '#f0f0f0'};
  border-radius: 8px;
  min-width: 280px;
`;

const AudioFileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

const AudioFileInfo = styled.div`
  flex: 1;
  overflow: hidden;
`;

const AudioFileName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AudioFileSize = styled.div`
  font-size: 12px;
  color: ${props => props.darkMode ? '#8696a0' : 'gray'};
  margin-top: 2px;
`;

// General File Styles
const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: ${props => props.darkMode ? '#2a3942' : '#f0f0f0'};
  border-radius: 8px;
  min-width: 220px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.darkMode ? '#3a4952' : '#e8e8e8'};
  }
`;

const FileDetails = styled.div`
  flex: 1;
  overflow: hidden;
`;

const FileName = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FileSize = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${props => props.darkMode ? '#8696a0' : 'gray'};
  margin-top: 4px;
`;

const DownloadButton = styled(IconButton)`
  display: flex !important;
  align-items: center !important;
  padding: 8px 14px !important;
  background-color: ${props => props.darkMode ? '#2a3942' : '#e3f2fd'} !important;
  color: ${props => props.darkMode ? '#64b5f6' : '#1976d2'} !important;
  border-radius: 6px !important;
  font-size: 12px !important;
  align-self: flex-start !important;
  transition: all 0.2s !important;

  &:hover {
    background-color: ${props => props.darkMode ? '#3a4952' : '#bbdefb'} !important;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Voice Message Styles
const VoiceMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  padding: 12px;
  background-color: ${props => props.darkMode ? '#2a3942' : '#f0f0f0'};
  border-radius: 8px;
  min-width: 280px;
`;

const VoiceLabel = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.darkMode ? '#64b5f6' : '#1976d2'};
  display: flex;
  align-items: center;
  gap: 6px;
`;

const AudioPlayer = styled.audio`
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 6px;
  
  &::-webkit-media-controls-panel {
    background-color: ${props => props.darkMode ? '#1f2c33' : 'white'};
    border-radius: 6px;
  }

  &::-webkit-media-controls-play-button,
  &::-webkit-media-controls-mute-button {
    filter: ${props => props.darkMode ? 'invert(1)' : 'none'};
  }
`;

const VoiceDuration = styled.span`
  font-size: 11px;
  color: ${props => props.darkMode ? '#8696a0' : 'gray'};
  text-align: right;
`;