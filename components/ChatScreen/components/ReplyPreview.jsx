// components/ChatScreen/components/ReplyPreview.jsx
import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  ReplyPreviewBar,
  ReplyBarIndicator,
  ReplyPreviewContent,
  ReplyPreviewHeader,
  ReplyPreviewText,
} from "../ChatScreen.styles";

const ReplyPreview = ({ replyingTo, userEmail, onCancel, darkMode }) => {
  if (!replyingTo) return null;

  return (
    <ReplyPreviewBar darkMode={darkMode}>
      <ReplyBarIndicator />
      <ReplyPreviewContent>
        <ReplyPreviewHeader>
          <span>
            Replying to {replyingTo.user === userEmail ? 'yourself' : replyingTo.user}
          </span>
          <IconButton onClick={onCancel} size="small">
            <CloseIcon fontSize="small" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }} />
          </IconButton>
        </ReplyPreviewHeader>
        <ReplyPreviewText darkMode={darkMode}>
          {replyingTo.message || replyingTo.fileName || '🎤 Voice message'}
        </ReplyPreviewText>
      </ReplyPreviewContent>
    </ReplyPreviewBar>
  );
};

export default ReplyPreview;