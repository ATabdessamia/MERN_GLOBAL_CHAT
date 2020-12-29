/* eslint-disable array-callback-return */
import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

const Conversation = ({ GlobalMessages, CurrentUser }) => {
  return (
    <ScrollToBottom className="conversation">
      {GlobalMessages &&
        GlobalMessages.map((gMsg) => {
          if (gMsg.fromObj[0]._id === CurrentUser._id) {
            return (
              <div className="messageContainer justifyEnd" key={gMsg._id}>
                <p className="sentText pr-10">{gMsg.fromObj[0].name}</p>
                <div className="messageBox backgroundBlue">
                  <p className="messageText colorWhite">{gMsg.body}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="messageContainer justifyStart" key={gMsg._id}>
                <div className="messageBox backgroundLight">
                  <p className="messageText colorDark">{gMsg.body}</p>
                </div>
                <p className="sentText pl-10 ">{gMsg.fromObj[0].name}</p>
              </div>
            );
          }
        })}
    </ScrollToBottom>
  );
};

export default Conversation;
