// components/ChatScreen/components/FileUploadDialog.jsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { FilePreview, FileInfo, FileInput, UploadProgress } from "../ChatScreen.styles";
import { formatFileSize } from "../utils";

const FileUploadDialog = ({
  open,
  onClose,
  file,
  filePreview,
  input,
  onInputChange,
  uploadProgress,
  isUploading,
  onSend,
  darkMode,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
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
        Send File
        <IconButton
          onClick={onClose}
          style={{ position: 'absolute', right: 8, top: 8, color: darkMode ? '#e0e0e0' : 'inherit' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {filePreview && (
          <FilePreview>
            <img src={filePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
          </FilePreview>
        )}
        <FileInfo darkMode={darkMode}>
          <p><strong>File:</strong> {file?.name}</p>
          <p><strong>Size:</strong> {formatFileSize(file?.size)} MB</p>
          <p><strong>Type:</strong> {file?.type || 'Unknown'}</p>
        </FileInfo>
        <FileInput
          darkMode={darkMode}
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Add a message (optional)"
          type="text"
        />
        {isUploading && (
          <UploadProgress>
            <CircularProgress variant="determinate" value={uploadProgress} />
            <p>{Math.round(uploadProgress)}%</p>
          </UploadProgress>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
          Cancel
        </Button>
        <Button
          onClick={onSend}
          variant="contained"
          disabled={isUploading}
          style={{ backgroundColor: darkMode ? '#d32f2f' : '#f44336', color: 'white' }}
          startIcon={<SendIcon />}
        >
          {isUploading ? 'Sending...' : 'Send'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FileUploadDialog;