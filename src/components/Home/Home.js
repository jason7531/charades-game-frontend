import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "./Home.module.css";
import Chat from "../Chat/Chat";
import queryString from "query-string";
import io from "socket.io-client";

const ENDPOINT = "localhost:5000";
let socket;
const Home = () => {
  const { search } = useLocation();
  const [allCards, setCards] = useState("");
  const [word, setWord] = useState("");
  const [userName, setName] = useState("");
  const [userRoom, setRoom] = useState("");
  const [roomUsers, setUsers] = useState("");

  const { name, room } = queryString.parse(search);

  const getData = async () => {
    const res = await fetch("http://localhost:5000/");
    const data = await res.json();

    const { cards, words } = data;
    console.log(cards);

    const randomWord = words[Math.floor(Math.random() * words.length)];

    setCards(cards);
    setWord(randomWord.text);
  };
  const getUsers = (users) => {
    setUsers(users);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {word && <h1>{`The Word is : ${word}`}</h1>}
      <div className={classes.row}>
        <div className={classes.left}>
          {roomUsers &&
            roomUsers.map((row) => {
              return <p>{row.name}</p>;
            })}
        </div>
        <div className={classes.middle}>
          <div className={classes.grid}>
            {allCards &&
              allCards.map((row) => {
                return (
                  <label className={classes.card}>
                    <input className={classes.card__input} type="checkbox" />
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
            getUsers={(users) => getUsers(users)}
          />
        </div>
      </div>

      <h2>&nbsp;</h2>
      <button className={classes.button}>Submit</button>
    </>
  );
};

export default Home;
