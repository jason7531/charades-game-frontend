import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

import classes from "./Chat.module.css";

const ENDPOINT = "localhost:5000";

let socket;

const Chat = (props) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [card, setCards] = useState([]);
  const [word, setWord] = useState("");

  useEffect(() => {
    // const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    socket.emit(
      "join",
      { name: props.username, room: props.userroom },
      (error) => {
        if (error) {
          alert(error);
        }
      }
    );
  }, [ENDPOINT, props.userroom, props.username]);
  useEffect(() => {
    socket.emit("sendCards", props.cards);
  }, [props.cards]);
  useEffect(() => {
    if (props.word === word) {
      console.log(props.word);
      return;
    } else {
      socket.emit("sendWord", props.word);
    }
  }, [props.word]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      props.getUsers(users);
      setUsers(users);
    });
  }, []);
  useEffect(() => {
    socket.on("getCards", (gotCards) => {
      props.sendCards(gotCards);
      setCards((prevState) => [...prevState, gotCards]);
    });
  }, [props.cards]);

  useEffect(() => {
    socket.on("getWord", (word) => {
      setWord(word);
      console.log(word);
      props.gotWord(word);
    });
  }, [props.word]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className={classes.container}>
      <InfoBar room={props.userroom} />
      <Messages messages={messages} name={props.username} word={word} />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default Chat;
