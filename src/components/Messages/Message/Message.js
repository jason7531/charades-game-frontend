import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name, word }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name ? name.trim().toLowerCase() : "";
  const trimmedWord = word ? word.trim().toLowerCase() : "";
  const answer = text ? text.trim().toLowerCase() : "";

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      {answer === trimmedWord ? (
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark" style={{ color: "green" }}>
            Guessed the word
          </p>
        </div>
      ) : (
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
        </div>
      )}
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      {answer === trimmedWord ? (
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark" style={{ color: "green" }}>
            Guessed the word
          </p>
        </div>
      ) : (
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
        </div>
      )}
      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
};

export default Message;
