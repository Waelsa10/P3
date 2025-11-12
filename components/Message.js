// components/Message.jsx
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PollIcon from "@mui/icons-material/Poll";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { DarkModeContext } from "./DarkModeProvider";
import MessageStatus from "./ChatScreen/components/MessageStatus";
import { MESSAGE_STATUS } from "./ChatScreen/constants";

function Message({ user, message, messageId, onDelete, onReply }) {
  const [userLoggedIn] = useAuthState(auth);
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [votingInProgress, setVotingInProgress] = useState(false);

  // Get dark mode context
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode } = darkModeContext || { darkMode: false };

  const TypeOfMessage = user === userLoggedIn?.email ? Sender : Receiver;
  const isOwnMessage = user === userLoggedIn?.email;

  // Helper function to convert poll options to array
  const getPollOptionsArray = (poll) => {
    if (!poll || !poll.options) return [];
    return Array.isArray(poll.options) ? poll.options : Object.values(poll.options);
  };

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
        message: message.message || (message.poll ? `📊 ${message.poll.question}` : ''),
        timestamp: message.timestamp,
        fileURL: message.fileURL,
        fileName: message.fileName,
        fileType: message.fileType,
        voiceURL: message.voiceURL,
        voiceDuration: message.voiceDuration,
        location: message.location,
        poll: message.poll,
      });
    }
  };

  // Handle poll vote
  const handlePollVote = async (optionIndex) => {
    if (!messageId || votingInProgress || !router.query.id || !message.poll) return;
    
    setVotingInProgress(true);
    try {
      console.log('🗳️ Attempting to vote on poll:', {
        chatId: router.query.id,
        messageId,
        optionIndex,
        userEmail: userLoggedIn.email
      });

      // Convert poll options to array
      const pollOptions = getPollOptionsArray(message.poll);
      
      if (!pollOptions[optionIndex]) {
        console.error('Invalid option index');
        return;
      }

      const messageRef = doc(db, "chats", router.query.id, "messages", messageId);
      const currentVotes = Array.isArray(pollOptions[optionIndex].votes) 
        ? pollOptions[optionIndex].votes 
        : [];
      const hasVoted = currentVotes.includes(userLoggedIn.email);
      
      console.log('Current vote status:', { currentVotes, hasVoted });

      // For single answer polls, remove votes from all options first
      if (!message.poll.allowMultipleAnswers && !hasVoted) {
        const updates = {};
        pollOptions.forEach((option, idx) => {
          const votes = Array.isArray(option.votes) ? option.votes : [];
          if (votes.includes(userLoggedIn.email)) {
            updates[`poll.options.${idx}.votes`] = arrayRemove(userLoggedIn.email);
          }
        });
        
        if (Object.keys(updates).length > 0) {
          console.log('Removing previous votes:', updates);
          await updateDoc(messageRef, updates);
        }
      }
      
      // Toggle vote for the selected option
      const voteUpdate = {
        [`poll.options.${optionIndex}.votes`]: hasVoted 
          ? arrayRemove(userLoggedIn.email)
          : arrayUnion(userLoggedIn.email)
      };
      
      console.log('Applying vote update:', voteUpdate);
      await updateDoc(messageRef, voteUpdate);
      console.log('✅ Vote successful!');
    } catch (error) {
      console.error("❌ Error voting on poll:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      alert(`Failed to vote: ${error.message}`);
    } finally {
      setVotingInProgress(false);
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
                  {message.replyTo.location 
                    ? '📍 Location' 
                    : message.replyTo.poll 
                      ? `📊 ${message.replyTo.poll.question || 'Poll'}` 
                      : message.replyTo.message || message.replyTo.fileName || '🎤 Voice message'}
                </ReplyText>
              </ReplyContent>
            </ReplyPreview>
          )}

          {/* Poll Message */}
          {message.poll && (
            <PollContainer darkMode={darkMode}>
              <PollHeader darkMode={darkMode}>
                <PollIcon style={{ fontSize: 20, marginRight: 8 }} />
                <PollQuestion>{message.poll.question}</PollQuestion>
              </PollHeader>

              <PollOptions>
                {(() => {
                  // Convert poll.options to array if it's an object
                  const pollOptions = getPollOptionsArray(message.poll);

                  return pollOptions.map((option, index) => {
                    // Ensure option has required structure
                    if (!option || typeof option !== 'object') {
                      return null;
                    }

                    const optionText = option.text || '';
                    const optionVotes = Array.isArray(option.votes) ? option.votes : [];
                    
                    // Calculate vote statistics
                    const totalVotes = pollOptions.reduce((sum, opt) => {
                      const votes = Array.isArray(opt?.votes) ? opt.votes : [];
                      return sum + votes.length;
                    }, 0);
                    
                    const optionVotesCount = optionVotes.length;
                    const percentage = totalVotes > 0 ? (optionVotesCount / totalVotes) * 100 : 0;
                    const hasVoted = optionVotes.includes(userLoggedIn?.email);
                    const hasVotedAnywhere = pollOptions.some(opt => {
                      const votes = Array.isArray(opt?.votes) ? opt.votes : [];
                      return votes.includes(userLoggedIn?.email);
                    });

                    return (
                      <PollOption
                        key={index}
                        onClick={() => handlePollVote(index)}
                        darkMode={darkMode}
                        hasVoted={hasVoted}
                        disabled={votingInProgress}
                      >
                        <PollOptionContent>
                          <PollOptionIcon>
                            {message.poll.allowMultipleAnswers ? (
                              hasVoted ? (
                                <CheckBoxIcon 
                                  style={{ 
                                    color: darkMode ? "#00a884" : "#25d366",
                                    fontSize: 20 
                                  }} 
                                />
                              ) : (
                                <CheckBoxOutlineBlankIcon 
                                  style={{ 
                                    color: darkMode ? "#8696a0" : "#667781",
                                    fontSize: 20 
                                  }} 
                                />
                              )
                            ) : (
                              hasVoted ? (
                                <CheckCircleIcon 
                                  style={{ 
                                    color: darkMode ? "#00a884" : "#25d366",
                                    fontSize: 20 
                                  }} 
                                />
                              ) : (
                                <RadioButtonUncheckedIcon 
                                  style={{ 
                                    color: darkMode ? "#8696a0" : "#667781",
                                    fontSize: 20 
                                  }} 
                                />
                              )
                            )}
                          </PollOptionIcon>
                          
                          <PollOptionText darkMode={darkMode} hasVoted={hasVoted}>
                            {optionText}
                          </PollOptionText>

                          {hasVotedAnywhere && (
                            <PollOptionVotes darkMode={darkMode}>
                              {optionVotesCount} {optionVotesCount === 1 ? 'vote' : 'votes'}
                            </PollOptionVotes>
                          )}
                        </PollOptionContent>

                        {hasVotedAnywhere && (
                          <PollProgressBar darkMode={darkMode}>
                            <PollProgressFill 
                              percentage={percentage} 
                              darkMode={darkMode}
                              hasVoted={hasVoted}
                            />
                          </PollProgressBar>
                        )}
                      </PollOption>
                    );
                  }).filter(Boolean); // Remove null entries
                })()}
              </PollOptions>

              <PollFooter darkMode={darkMode}>
                {message.poll.allowMultipleAnswers && (
                  <PollInfo>Multiple answers allowed</PollInfo>
                )}
                <PollTotalVotes darkMode={darkMode}>
                  {(() => {
                    const pollOptions = getPollOptionsArray(message.poll);
                    const totalVotes = pollOptions.reduce((sum, opt) => {
                      const votes = Array.isArray(opt?.votes) ? opt.votes : [];
                      return sum + votes.length;
                    }, 0);
                    return `${totalVotes} ${totalVotes === 1 ? 'vote' : 'votes'}`;
                  })()}
                </PollTotalVotes>
              </PollFooter>
            </PollContainer>
          )}

          {/* Location Message */}
          {message.location && (
            <LocationContainer darkMode={darkMode}>
              <MapPreview>
                <MapFrame
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${message.location.longitude - 0.005},${message.location.latitude - 0.005},${message.location.longitude + 0.005},${message.location.latitude + 0.005}&layer=mapnik&marker=${message.location.latitude},${message.location.longitude}`}
                  title="Location"
                  loading="lazy"
                />
              </MapPreview>
              
              <LocationInfo darkMode={darkMode}>
                <LocationIcon>
                  <LocationOnIcon style={{ fontSize: 20, color: "#f44336" }} />
                </LocationIcon>
                <Coordinates darkMode={darkMode}>
                  {message.location.latitude.toFixed(6)}, {message.location.longitude.toFixed(6)}
                </Coordinates>
              </LocationInfo>

              <ViewButton 
                href={message.location.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                darkMode={darkMode}
              >
                <OpenInNewIcon style={{ fontSize: 16, marginRight: 4 }} />
                View on Maps
              </ViewButton>
            </LocationContainer>
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
          {message.message && message.message.trim() && !message.location && !message.poll && (
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
            <MoreVertIcon style={{ color: darkMode ? 'gray' : 'inherit' }} fontSize="small" />
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

// Styled Components remain the same...
// [All the styled components from your original code stay exactly the same]

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

// Poll Message Styles
const PollContainer = styled.div`
  background-color: ${(props) => (props.darkMode ? "#2a3942" : "#f0f0f0")};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;
  min-width: 300px;
  max-width: 400px;
`;

const PollHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: ${(props) => (props.darkMode ? "#64b5f6" : "#1976d2")};
`;

const PollQuestion = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "black")};
  line-height: 1.4;
`;

const PollOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
`;

const PollOption = styled.div`
  background-color: ${(props) => (props.darkMode ? "#1f2c33" : "white")};
  border: 2px solid ${(props) => {
    if (props.hasVoted) {
      return props.darkMode ? "#00a884" : "#25d366";
    }
    return props.darkMode ? "#3a4952" : "#e0e0e0";
  }};
  border-radius: 8px;
  padding: 12px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${(props) => 
      props.disabled 
        ? (props.darkMode ? "#1f2c33" : "white")
        : (props.darkMode ? "#2a3942" : "#f5f5f5")
    };
    transform: ${(props) => (props.disabled ? "none" : "translateX(2px)")};
  }

  &:active {
    transform: ${(props) => (props.disabled ? "none" : "scale(0.98)")};
  }
`;

const PollOptionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
`;

const PollOptionIcon = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const PollOptionText = styled.div`
  flex: 1;
  font-size: 14px;
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "black")};
  font-weight: ${(props) => (props.hasVoted ? "600" : "400")};
  line-height: 1.4;
`;

const PollOptionVotes = styled.div`
  font-size: 12px;
  color: ${(props) => (props.darkMode ? "#8696a0" : "#667781")};
  font-weight: 500;
  flex-shrink: 0;
`;

const PollProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${(props) => (props.darkMode ? "#1a1a1a" : "#e0e0e0")};
  border-radius: 2px;
  overflow: hidden;
`;

const PollProgressFill = styled.div`
  height: 100%;
  width: ${(props) => props.percentage}%;
  background-color: ${(props) => {
    if (props.hasVoted) {
      return props.darkMode ? "#00a884" : "#25d366";
    }
    return props.darkMode ? "#3a4952" : "#ccc";
  }};
  transition: width 0.3s ease;
  border-radius: 2px;
`;

const PollFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid ${(props) => (props.darkMode ? "#3a4952" : "#e0e0e0")};
`;

const PollInfo = styled.div`
  font-size: 11px;
  color: ${(props) => (props.darkMode ? "#8696a0" : "#667781")};
  font-style: italic;
`;

const PollTotalVotes = styled.div`
  font-size: 12px;
  color: ${(props) => (props.darkMode ? "#8696a0" : "#667781")};
  font-weight: 500;
`;

// Location Message Styles
const LocationContainer = styled.div`
  max-width: 280px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "#f5f5f5")};
  margin-bottom: 8px;
`;

const MapPreview = styled.div`
  width: 100%;
  height: 200px;
  background: #f0f0f0;
  position: relative;
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  pointer-events: none;
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 8px;
`;

const LocationIcon = styled.div`
  display: flex;
  align-items: center;
`;

const Coordinates = styled.span`
  font-size: 13px;
  color: ${(props) => (props.darkMode ? "#b0b0b0" : "#666")};
  font-family: monospace;
`;

const ViewButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => (props.darkMode ? "#128C7E" : "#25D366")};
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.darkMode ? "#0d6b5f" : "#1fa855")};
  }
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