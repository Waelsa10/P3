// components/ChatScreen/components/CameraDialog.jsx
import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent, DialogActions, Button, CircularProgress, TextField } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import RefreshIcon from "@mui/icons-material/Refresh";

function CameraDialog({
  open,
  showCamera,
  capturedImage,
  videoRef,
  input,
  onInputChange,
  uploadProgress,
  isUploading,
  onCapture,
  onRetake,
  onCancel,
  onSend,
  darkMode,
}) {
  return (
    <StyledDialog 
      open={open} 
      onClose={!isUploading ? onCancel : undefined} 
      maxWidth="sm" 
      fullWidth 
      darkMode={darkMode}
    >
      <DialogContent>
        {showCamera && (
          <VideoContainer>
            <Video ref={videoRef} autoPlay playsInline muted />
          </VideoContainer>
        )}

        {capturedImage && (
          <PreviewContainer>
            <PreviewImage src={capturedImage} alt="Captured photo" />
            <TextField
              fullWidth
              placeholder="Add a caption (optional)"
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              variant="outlined"
              margin="normal"
              disabled={isUploading}
              InputProps={{
                style: {
                  color: darkMode ? "#e0e0e0" : "#000",
                  backgroundColor: darkMode ? "#2a2a2a" : "#fff",
                },
              }}
            />
            {isUploading && (
              <ProgressContainer>
                <CircularProgress variant="determinate" value={uploadProgress} />
                <ProgressText darkMode={darkMode}>{uploadProgress}%</ProgressText>
              </ProgressContainer>
            )}
          </PreviewContainer>
        )}
      </DialogContent>

      <DialogActions>
        {showCamera && (
          <>
            <Button onClick={onCancel} color="secondary" startIcon={<CancelIcon />}>
              Cancel
            </Button>
            <Button 
              onClick={onCapture} 
              color="primary" 
              variant="contained" 
              startIcon={<CameraAltIcon />}
            >
              Capture
            </Button>
          </>
        )}

        {capturedImage && !showCamera && (
          <>
            <Button 
              onClick={onRetake} 
              color="secondary" 
              startIcon={<RefreshIcon />} 
              disabled={isUploading}
            >
              Retake
            </Button>
            <Button 
              onClick={onCancel} 
              color="secondary" 
              startIcon={<CancelIcon />} 
              disabled={isUploading}
            >
              Cancel
            </Button>
            <Button
              onClick={onSend}
              color="primary"
              variant="contained"
              startIcon={<SendIcon />}
              disabled={isUploading}
            >
              {isUploading ? "Sending..." : "Send"}
            </Button>
          </>
        )}
      </DialogActions>
    </StyledDialog>
  );
}

export default CameraDialog;

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "#fff")};
    color: ${(props) => (props.darkMode ? "#e0e0e0" : "#000")};
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PreviewContainer = styled.div`
  width: 100%;
`;

const PreviewImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #000;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
`;

const ProgressText = styled.span`
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "#333")};
  font-weight: 500;
`;