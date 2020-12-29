import React from "react";

const SendFrom = ({ onSendMessage, onMessageChange, message }) => {
  return (
    <form onSubmit={onSendMessage} className="msg-form ">
      <input
        className="msg-input "
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={onMessageChange}
      />
      <button className="sendButton">
        <i className="fas fa-location-arrow"></i>
      </button>
    </form>
  );
};

export default SendFrom;
