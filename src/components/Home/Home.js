import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "./Home.module.css";
import Chat from "../Chat/Chat";
import queryString from "query-string";
import io from "socket.io-client";
import onlineIcon from "../../icons/onlineIcon.png";

const ENDPOINT = "localhost:5000";
let socket;
const Home = () => {
  const { search } = useLocation();
  const [allCards, setCards] = useState("");
  const [word, setWord] = useState("");
  const [allwords, setWords] = useState("");
  const [userName, setName] = useState("");
  const [userRoom, setRoom] = useState("");
  const [roomUsers, setUsers] = useState("");
  const [selectedCard, setCard] = useState([]);
  const [finalCards, setFinalCards] = useState("");
  const [receivedCards, setReceivedCards] = useState("");

  const { name, room } = queryString.parse(search);

  const getData = async () => {
    const res = await fetch("http://localhost:5000/");
    const data = await res.json();

    const { cards, words } = data;
    console.log(words);

    const randomWord = words[Math.floor(Math.random() * words.length)];

    setCards(cards);
    setWords(words);
  };

  const getUsers = (users) => {
    setUsers(users);
    console.log(roomUsers);
  };
  const sendCards = (cards) => {
    setReceivedCards(cards);
  };
  const gotWord = (recword) => {
    if (recword) {
      setWord(recword);
    } else {
      const randomWord = allwords[Math.floor(Math.random() * allwords.length)];
      setWord(randomWord);
    }
  };
  const handleChange = (card) => {
    if (selectedCard.find((e) => e._id === card._id)) {
      const index = selectedCard.findIndex((e) => e._id === card._id);
      selectedCard.splice(index, 1);
    } else {
      setCard((prevState) => [...prevState, card]);
    }
  };
  const submitHandler = () => {
    setFinalCards(selectedCard);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {roomUsers && roomUsers.findIndex((e) => e.name === name) === 0 ? (
        word && (
          <div style={{ textAlign: "center" }}>
            <h1>{`The Word is : ${word}`}</h1>
          </div>
        )
      ) : (
        <h1>&nbsp;</h1>
      )}
      <div className={classes.row}>
        <div className={classes.left}>
          <h3>Players in the lobby:</h3>
          {roomUsers &&
            roomUsers.map((row) => {
              return (
                <div>
                  <p>
                    {" "}
                    <img alt="Online Icon" src={onlineIcon} />{" "}
                    <span>&nbsp;</span>
                    {row.name}
                  </p>
                </div>
              );
            })}
        </div>
        <div className={classes.middle}>
          <div className={classes.grid}>
            {roomUsers && roomUsers.findIndex((e) => e.name === name) === 0
              ? allCards &&
                allCards.map((row) => {
                  return (
                    <label className={classes.card}>
                      <input
                        className={classes.card__input}
                        type="checkbox"
                        onChange={() => handleChange(row)}
                      />
                      <div className={classes.card__body}>
                        <div className={classes.card__body_cover}>
                          <img
                            className={classes.card__body_cover_image}
                            src={row.imageurl}
                          />
                          <span className={classes.card__body_cover_checkbox}>
                            {" "}
                            <svg
                              className={classes.card__body_cover_checkbox__svg}
                              viewBox="0 0 12 10"
                            >
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                        </div>
                        <header className={classes.card__body_header}>
                          <h2 className={classes.card__body_header_title}>
                            {row.description}
                          </h2>
                        </header>
                      </div>
                      <h1>&nbsp;</h1>
                    </label>
                  );
                })
              : receivedCards &&
                receivedCards.map((row) => {
                  return (
                    <label className={classes.card}>
                      <input
                        className={classes.card__input}
                        type="checkbox"
                        onChange={() => handleChange(row)}
                      />
                      <div className={classes.card__body}>
                        <div className={classes.card__body_cover}>
                          <img
                            className={classes.card__body_cover_image}
                            src={row.imageurl}
                          />
                          <span className={classes.card__body_cover_checkbox}>
                            {" "}
                            <svg
                              className={classes.card__body_cover_checkbox__svg}
                              viewBox="0 0 12 10"
                            >
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                        </div>
                        <header className={classes.card__body_header}>
                          <h2 className={classes.card__body_header_title}>
                            {row.description}
                          </h2>
                        </header>
                      </div>
                    </label>
                  );
                })}
          </div>
        </div>
        <div className={classes.right}>
          {/* <iframe
            src={`/chat?name=${name}&room=${room}`}
            width="100%"
            height="500"
            style={{ border: "1px solid black;" }}
          ></iframe> */}
          <Chat
            username={name}
            userroom={room}
            cards={finalCards}
            getUsers={(users) => getUsers(users)}
            sendCards={(cards) => sendCards(cards)}
            gotWord={(recword) => gotWord(recword)}
            word={word}
          />
        </div>
        <h2>&nbsp;</h2>
        {roomUsers && roomUsers.findIndex((e) => e.name === name) === 0 ? (
          <button className={classes.button} onClick={submitHandler}>
            Submit
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Home;
