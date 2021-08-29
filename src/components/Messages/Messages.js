import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message/Message";

import "./Messages.css";

const Messages = (props) => (
  <ScrollToBottom className="messages">
    {props.messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={props.name} word={props.word} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
