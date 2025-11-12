// components/ChatScreen/components/MessageStatus.jsx

import React from "react";
import styled from "styled-components";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { MESSAGE_STATUS } from "../constants";

function MessageStatus({ status, darkMode }) {
  // ✅ Handle PENDING/SENDING status
  if (status === MESSAGE_STATUS.PENDING || status === MESSAGE_STATUS.SENDING) {
    return (
      <StatusIcon darkMode={darkMode}>
        <AccessTimeIcon style={{ fontSize: 14 }} />
      </StatusIcon>
    );
  }

  // ✅ Handle SENT status - Single gray checkmark
  if (!status || status === MESSAGE_STATUS.SENT) {
    return (
      <StatusIcon darkMode={darkMode}>
        <DoneIcon style={{ fontSize: 16 }} />
      </StatusIcon>
    );
  }

  // ✅ Handle DELIVERED status - Double gray checkmarks
  if (status === MESSAGE_STATUS.DELIVERED) {
    return (
      <StatusIcon darkMode={darkMode}>
        <DoneAllIcon style={{ fontSize: 16 }} />
      </StatusIcon>
    );
  }

  // ✅ Handle READ status - Double blue checkmarks
  if (status === MESSAGE_STATUS.READ) {
    return (
      <StatusIcon darkMode={darkMode} isRead={true}>
        <DoneAllIcon style={{ fontSize: 16 }} />
      </StatusIcon>
    );
  }

  // ✅ Handle FAILED status - Error icon
  if (status === MESSAGE_STATUS.FAILED) {
    return (
      <StatusIcon darkMode={darkMode} isFailed={true}>
        <ErrorOutlineIcon style={{ fontSize: 16 }} />
      </StatusIcon>
    );
  }

  return null;
}

export default MessageStatus;

// ✅ Clean styled component - removed unused ones
const StatusIcon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
  vertical-align: middle;
  color: ${props => {
    if (props.isFailed) return '#f44336'; // Red for failed
    if (props.isRead) return '#53bdeb';   // Blue for read
    return props.darkMode ? '#8696a0' : '#667781'; // Gray for others
  }};
`;