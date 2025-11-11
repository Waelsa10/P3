// components/ChatScreen/components/MessageList.jsx
import React, { forwardRef } from "react";
import Message from "../../Message";
import { MessageContainer, ErrorAlert, EndOfMessage } from "../ChatScreen.styles";

const MessageList = forwardRef(({ 
  messagesSnapshot, 
  messages, 
  sendingError, 
  onDelete, 
  onReply,
  darkMode 
}, ref) => {
  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          messageId={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message.data().timestamp?.toMillis(),
          }}
          onDelete={onDelete}
          onReply={onReply}
        />
      ));
    } else {
      return messages ? JSON.parse(messages).map((message) => (
        <Message 
          key={message.id} 
          messageId={message.id}
          user={message.user} 
          message={message}
          onDelete={onDelete}
          onReply={onReply}
        />
      )) : null;
    }
  };

  return (
    <MessageContainer darkMode={darkMode}>
      {showMessages()}
      {sendingError && <ErrorAlert darkMode={darkMode}>{sendingError}</ErrorAlert>}
      <EndOfMessage ref={ref} />
    </MessageContainer>
  );
});

MessageList.displayName = 'MessageList';

export default MessageList;