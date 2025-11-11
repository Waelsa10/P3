// components/ChatScreen/components/MessageStatus.jsx

import React from "react";
import styled from "styled-components";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { MESSAGE_STATUS } from "../constants";

function MessageStatus({ status, darkMode }) {
  if (!status || status === MESSAGE_STATUS.SENT) {
    // Single gray checkmark for sent
    return (
      <StatusIcon darkMode={darkMode}>
        <DoneIcon style={{ fontSize: 16 }} />
      </StatusIcon>
    );
  }

  if (status === MESSAGE_STATUS.DELIVERED) {
    // Double gray checkmarks for delivered
    return (
      <StatusIcon darkMode={darkMode}>
        <DoneAllIcon style={{ fontSize: 16 }} />
      </StatusIcon>
    );
  }

  if (status === MESSAGE_STATUS.READ) {
    // Double blue checkmarks for read
    return (
      <StatusIcon darkMode={darkMode} isRead={true}>
        <DoneAllIcon style={{ fontSize: 16 }} />
      </StatusIcon>
    );
  }

  return null;
}

export default MessageStatus;

const StatusIcon = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${props => props.isRead ? '#53bdeb' : (props.darkMode ? '#8696a0' : '#667781')};
  margin-left: 4px;
`;

// Styled Components
const StatusContainer = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
  vertical-align: middle;
`;

const SingleCheck = styled(DoneIcon)`
  font-size: 16px !important;
  color: ${props => props.darkMode ? '#8696a0' : '#667781'};
`;

const DoubleCheckGray = styled(DoneAllIcon)`
  font-size: 16px !important;
  color: ${props => props.darkMode ? '#8696a0' : '#667781'};
`;

const DoubleCheckBlue = styled(DoneAllIcon)`
  font-size: 16px !important;
  color: #53bdeb;
`;

const PendingIcon = styled(AccessTimeIcon)`
  font-size: 14px !important;
  color: ${props => props.darkMode ? '#8696a0' : '#667781'};
  opacity: 0.6;
`;