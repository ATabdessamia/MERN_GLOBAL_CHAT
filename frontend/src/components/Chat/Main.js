/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

import {
  getGlobalMessages,
  postGlobalMessages,
} from "../../actions/chatActions";

import { getUsers } from "../../actions/index";
import Conversation from "./Conversation";
import SideBar from "./SideBar";
import SendFrom from "./SendFrom";

const ENDPOINT = "localhost:5000";
let socket;

const Main = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const CurrentUser = useSelector((state) => state.CurrentUser);
  const { GlobalMessages } = useSelector((state) => state.GlobalMessages);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [lastMessage, setLastMessage] = useState(null);

  useEffect(() => {
    dispatch(getUsers());
    reloadMessages();
  }, [lastMessage, dispatch]);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on("messages", (data) => setLastMessage(data));
  }, []);

  const reloadMessages = () => {
    dispatch(getGlobalMessages()).then((res) => {
      setMessages(res);
    });

    setMessages([]);
  };

  if (!GlobalMessages) {
    return <div>Loading...</div>;
  }

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    dispatch(postGlobalMessages(message));
    dispatch(getGlobalMessages());
    setMessage("");
  };

  return (
    <div className="main-twin">
      <SideBar users={users} name={CurrentUser.CurrentUser.name} />
      <div className="outerContainer">
        <div className="chat-container">
          <h2>{CurrentUser.CurrentUser.name}</h2>
          <Conversation
            GlobalMessages={GlobalMessages}
            CurrentUser={CurrentUser.CurrentUser}
          />
          <SendFrom
            onMessageChange={onMessageChange}
            onSendMessage={onSendMessage}
            message={message}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
