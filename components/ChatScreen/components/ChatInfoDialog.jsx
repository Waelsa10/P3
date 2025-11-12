// components/ChatScreen/components/ChatInfoDialog.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Avatar,
  TextField,
  Button,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import LinkIcon from "@mui/icons-material/Link";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import moment from "moment";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function ChatInfoDialog({
  open,
  onClose,
  recipient,
  recipientEmail,
  isSelfChat,
  messages,
  onUpdateDisplayName,
  darkMode,
}) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    if (recipient?.displayName) {
      setDisplayName(recipient.displayName);
    } else {
      setDisplayName(recipientEmail?.split("@")[0] || "");
    }
  }, [recipient, recipientEmail]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSaveDisplayName = () => {
    if (displayName.trim() && onUpdateDisplayName) {
      onUpdateDisplayName(displayName.trim());
    }
    setIsEditingName(false);
  };

  const handleCancelEdit = () => {
    // Reset to original name
    if (recipient?.displayName) {
      setDisplayName(recipient.displayName);
    } else {
      setDisplayName(recipientEmail?.split("@")[0] || "");
    }
    setIsEditingName(false);
  };

  // Extract links from messages
  const extractLinks = () => {
    if (!messages) return [];
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const links = [];

    messages.forEach((msg) => {
      if (msg.message) {
        const urls = msg.message.match(urlRegex);
        if (urls) {
          urls.forEach((url) => {
            links.push({
              id: msg.id,
              url,
              message: msg.message,
              timestamp: msg.timestamp,
              user: msg.user,
            });
          });
        }
      }
    });

    return links.reverse();
  };

  // Extract media (images, videos, audio)
  const extractMedia = () => {
    if (!messages) return [];
    const media = [];

    messages.forEach((msg) => {
      if (msg.fileURL && msg.fileType) {
        if (
          msg.fileType.startsWith("image/") ||
          msg.fileType.startsWith("video/") ||
          msg.fileType.startsWith("audio/")
        ) {
          media.push({
            id: msg.id,
            url: msg.fileURL,
            fileName: msg.fileName,
            fileType: msg.fileType,
            fileSize: msg.fileSize,
            timestamp: msg.timestamp,
            user: msg.user,
          });
        }
      }
    });

    return media.reverse();
  };

  // Extract documents
  const extractDocuments = () => {
    if (!messages) return [];
    const docs = [];

    messages.forEach((msg) => {
      if (msg.fileURL && msg.fileType) {
        if (
          !msg.fileType.startsWith("image/") &&
          !msg.fileType.startsWith("video/") &&
          !msg.fileType.startsWith("audio/")
        ) {
          docs.push({
            id: msg.id,
            url: msg.fileURL,
            fileName: msg.fileName,
            fileType: msg.fileType,
            fileSize: msg.fileSize,
            timestamp: msg.timestamp,
            user: msg.user,
          });
        }
      }
    });

    return docs.reverse();
  };

  const links = extractLinks();
  const media = extractMedia();
  const documents = extractDocuments();

  const formatFileSize = (bytes) => {
    if (!bytes) return "Unknown size";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const downloadFile = async (url, fileName) => {
    try {
      const response = await fetch(url);
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
      window.open(url, "_blank");
    }
  };

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="sm" fullWidth darkMode={darkMode}>
      <DialogTitle>
        <HeaderContainer>
          <span>Chat Info</span>
          <IconButton onClick={onClose} size="small">
            <CloseIcon style={{ color: darkMode ? "#e0e0e0" : "#000" }} />
          </IconButton>
        </HeaderContainer>
      </DialogTitle>

      <DialogContent>
        {/* Profile Section */}
        <ProfileSection darkMode={darkMode}>
          <LargeAvatar src={recipient?.photoURL}>
            {recipientEmail?.[0]?.toUpperCase()}
          </LargeAvatar>

          {/* Display Name Section */}
          <NameSection>
            {isEditingName ? (
              <>
                <NameEditContainer>
                  <TextField
                    fullWidth
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    variant="outlined"
                    size="medium"
                    autoFocus
                    placeholder="Enter display name"
                    InputProps={{
                      style: {
                        color: darkMode ? "#e0e0e0" : "#000",
                        backgroundColor: darkMode ? "#2a2a2a" : "#fff",
                      },
                    }}
                  />
                </NameEditContainer>
                <EditButtonsContainer>
                  <Button
                    onClick={handleCancelEdit}
                    startIcon={<CancelIcon />}
                    variant="outlined"
                    color="secondary"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSaveDisplayName}
                    startIcon={<CheckIcon />}
                    variant="contained"
                    color="primary"
                    disabled={!displayName.trim()}
                  >
                    Save
                  </Button>
                </EditButtonsContainer>
              </>
            ) : (
              <>
                <DisplayNameText darkMode={darkMode}>
                  {displayName || recipientEmail}
                </DisplayNameText>
                <EmailText darkMode={darkMode}>{recipientEmail}</EmailText>
                
                {!isSelfChat && (
                  <ChangeNameButton
                    onClick={() => setIsEditingName(true)}
                    startIcon={<EditIcon />}
                    variant="outlined"
                    darkMode={darkMode}
                  >
                    Change Display Name
                  </ChangeNameButton>
                )}
              </>
            )}
          </NameSection>
        </ProfileSection>

        {/* Tabs */}
        <StyledTabs
          value={tabValue}
          onChange={handleTabChange}
          darkMode={darkMode}
          variant="fullWidth"
        >
          <StyledTab
            icon={<LinkIcon />}
            label={`Links (${links.length})`}
            darkMode={darkMode}
          />
          <StyledTab
            icon={<ImageIcon />}
            label={`Media (${media.length})`}
            darkMode={darkMode}
          />
          <StyledTab
            icon={<DescriptionIcon />}
            label={`Docs (${documents.length})`}
            darkMode={darkMode}
          />
        </StyledTabs>

        {/* Links Tab */}
        <TabPanel value={tabValue} index={0}>
          <TabContent darkMode={darkMode}>
            {links.length === 0 ? (
              <EmptyState darkMode={darkMode}>
                <LinkIcon style={{ fontSize: 48, opacity: 0.3 }} />
                <p>No links shared yet</p>
              </EmptyState>
            ) : (
              links.map((link, index) => (
                <LinkItem key={`${link.id}-${index}`} darkMode={darkMode}>
                  <LinkIcon style={{ color: darkMode ? "#64b5f6" : "#1976d2", fontSize: 20 }} />
                  <LinkContent>
                    <LinkUrl
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      darkMode={darkMode}
                    >
                      {link.url}
                      <OpenInNewIcon style={{ fontSize: 14, marginLeft: 4 }} />
                    </LinkUrl>
                    <LinkMeta darkMode={darkMode}>
                      {link.user} • {moment(link.timestamp).format("MMM D, YYYY")}
                    </LinkMeta>
                  </LinkContent>
                </LinkItem>
              ))
            )}
          </TabContent>
        </TabPanel>

        {/* Media Tab */}
        <TabPanel value={tabValue} index={1}>
          <TabContent darkMode={darkMode}>
            {media.length === 0 ? (
              <EmptyState darkMode={darkMode}>
                <ImageIcon style={{ fontSize: 48, opacity: 0.3 }} />
                <p>No media shared yet</p>
              </EmptyState>
            ) : (
              <MediaGrid>
                {media.map((item) => (
                  <MediaItem key={item.id} darkMode={darkMode}>
                    {item.fileType.startsWith("image/") ? (
                      <MediaImage
                        src={item.url}
                        alt={item.fileName}
                        onClick={() => window.open(item.url, "_blank")}
                      />
                    ) : item.fileType.startsWith("video/") ? (
                      <MediaVideo controls>
                        <source src={item.url} type={item.fileType} />
                      </MediaVideo>
                    ) : (
                      <AudioContainer darkMode={darkMode}>
                        <audio controls style={{ width: "100%" }}>
                          <source src={item.url} type={item.fileType} />
                        </audio>
                      </AudioContainer>
                    )}
                    <MediaInfo darkMode={darkMode}>
                      <MediaName>{item.fileName}</MediaName>
                      <MediaMeta darkMode={darkMode}>
                        {formatFileSize(item.fileSize)} •{" "}
                        {moment(item.timestamp).format("MMM D")}
                      </MediaMeta>
                    </MediaInfo>
                    <DownloadIconButton
                      onClick={() => downloadFile(item.url, item.fileName)}
                      size="small"
                    >
                      <DownloadIcon fontSize="small" />
                    </DownloadIconButton>
                  </MediaItem>
                ))}
              </MediaGrid>
            )}
          </TabContent>
        </TabPanel>

        {/* Documents Tab */}
        <TabPanel value={tabValue} index={2}>
          <TabContent darkMode={darkMode}>
            {documents.length === 0 ? (
              <EmptyState darkMode={darkMode}>
                <DescriptionIcon style={{ fontSize: 48, opacity: 0.3 }} />
                <p>No documents shared yet</p>
              </EmptyState>
            ) : (
              documents.map((doc) => (
                <DocumentItem key={doc.id} darkMode={darkMode}>
                  <DescriptionIcon
                    style={{ color: darkMode ? "#64b5f6" : "#1976d2", fontSize: 32 }}
                  />
                  <DocumentContent>
                    <DocumentName darkMode={darkMode}>{doc.fileName}</DocumentName>
                    <DocumentMeta darkMode={darkMode}>
                      {formatFileSize(doc.fileSize)} • {doc.user} •{" "}
                      {moment(doc.timestamp).format("MMM D, YYYY")}
                    </DocumentMeta>
                  </DocumentContent>
                  <DownloadIconButton
                    onClick={() => downloadFile(doc.url, doc.fileName)}
                    size="small"
                  >
                    <DownloadIcon fontSize="small" />
                  </DownloadIconButton>
                </DocumentItem>
              ))
            )}
          </TabContent>
        </TabPanel>
      </DialogContent>
    </StyledDialog>
  );
}

export default ChatInfoDialog;

// Styled Components
const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "#fff")};
    color: ${(props) => (props.darkMode ? "#e0e0e0" : "#000")};
    min-height: 600px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${(props) => (props.darkMode ? "#333" : "#e0e0e0")};
`;

const LargeAvatar = styled(Avatar)`
  && {
    width: 100px;
    height: 100px;
    font-size: 48px;
    margin-bottom: 16px;
  }
`;

const NameSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const NameEditContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const EditButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const DisplayNameText = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "#000")};
  text-align: center;
`;

const EmailText = styled.p`
  margin: 0;
  color: ${(props) => (props.darkMode ? "#888" : "#666")};
  font-size: 14px;
`;

const ChangeNameButton = styled(Button)`
  && {
    margin-top: 12px;
    color: ${(props) => (props.darkMode ? "#25D366" : "#128C7E")};
    border-color: ${(props) => (props.darkMode ? "#25D366" : "#128C7E")};
    text-transform: none;
    
    &:hover {
      border-color: ${(props) => (props.darkMode ? "#1fa855" : "#0d6b5f")};
      background-color: ${(props) => (props.darkMode ? "rgba(37, 211, 102, 0.1)" : "rgba(18, 140, 126, 0.1)")};
    }
  }
`;

const StyledTabs = styled(Tabs)`
  && {
    margin-top: 16px;
    border-bottom: 1px solid ${(props) => (props.darkMode ? "#333" : "#e0e0e0")};

    .MuiTabs-indicator {
      background-color: ${(props) => (props.darkMode ? "#25D366" : "#128C7E")};
    }
  }
`;

const StyledTab = styled(Tab)`
  && {
    color: ${(props) => (props.darkMode ? "#888" : "#666")};
    text-transform: none;
    font-size: 13px;

    &.Mui-selected {
      color: ${(props) => (props.darkMode ? "#25D366" : "#128C7E")};
    }
  }
`;

const TabContent = styled.div`
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => (props.darkMode ? "#2a2a2a" : "#f1f1f1")};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => (props.darkMode ? "#555" : "#888")};
    border-radius: 4px;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: ${(props) => (props.darkMode ? "#666" : "#999")};

  p {
    margin-top: 16px;
    font-size: 16px;
  }
`;

const LinkItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "#f5f5f5")};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.darkMode ? "#333" : "#e8e8e8")};
  }
`;

const LinkContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const LinkUrl = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => (props.darkMode ? "#64b5f6" : "#1976d2")};
  text-decoration: none;
  font-size: 14px;
  word-break: break-all;
  margin-bottom: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkMeta = styled.div`
  font-size: 12px;
  color: ${(props) => (props.darkMode ? "#888" : "#666")};
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
`;

const MediaItem = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "#f5f5f5")};

  &:hover {
    .download-btn {
      opacity: 1;
    }
  }
`;

const MediaImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const MediaVideo = styled.video`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const AudioContainer = styled.div`
  padding: 12px;
  background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "#f0f0f0")};
`;

const MediaInfo = styled.div`
  padding: 8px;
`;

const MediaName = styled.div`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MediaMeta = styled.div`
  font-size: 11px;
  color: ${(props) => (props.darkMode ? "#888" : "#666")};
  margin-top: 4px;
`;

const DocumentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "#f5f5f5")};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.darkMode ? "#333" : "#e8e8e8")};
  }
`;

const DocumentContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const DocumentName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "#000")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`;

const DocumentMeta = styled.div`
  font-size: 12px;
  color: ${(props) => (props.darkMode ? "#888" : "#666")};
`;

const DownloadIconButton = styled(IconButton)`
  && {
    opacity: 0.7;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;