// components/ChatScreen/components/VoiceRecordingDialog.jsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { VoicePreview, UploadProgress } from "../ChatScreen.styles";
import { formatTime } from "../utils";

const VoiceRecordingDialog = ({
  open,
  audioBlob,
  recordingTime,
  uploadProgress,
  isUploading,
  onCancel,
  onSend,
  onError,
  darkMode,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: darkMode ? '#2a2a2a' : 'white',
          color: darkMode ? '#e0e0e0' : 'black',
        },
      }}
    >
      <DialogTitle style={{ color: darkMode ? '#e0e0e0' : 'black' }}>
        Voice Message Recorded
      </DialogTitle>
      <DialogContent>
        <VoicePreview darkMode={darkMode}>
          <p>Duration: {formatTime(recordingTime)}</p>
          {audioBlob && (
            <>
              <p style={{ fontSize: '12px', color: darkMode ? '#888' : '#666' }}>
                Size: {(audioBlob.size / 1024).toFixed(2)} KB
              </p>
              <p style={{ fontSize: '12px', color: darkMode ? '#888' : '#666' }}>
                Type: {audioBlob.type}
              </p>
              <audio 
                controls 
                src={URL.createObjectURL(audioBlob)} 
                style={{ width: '100%', marginTop: 10 }}
                onError={(e) => {
                  console.error('Audio playback error:', e);
                  onError('Failed to play audio. The recording might be corrupted.');
                }}
              />
            </>
          )}
        </VoicePreview>
        {isUploading && (
          <UploadProgress>
            <CircularProgress variant="determinate" value={uploadProgress} />
            <p>{Math.round(uploadProgress)}%</p>
          </UploadProgress>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} disabled={isUploading} style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
          Cancel
        </Button>
        <Button
          onClick={onSend}
          variant="contained"
          disabled={isUploading || !audioBlob || audioBlob.size === 0}
          style={{ backgroundColor: darkMode ? '#d32f2f' : '#f44336', color: 'white' }}
          startIcon={<SendIcon />}
        >
          {isUploading ? 'Sending...' : 'Send'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default VoiceRecordingDialog;