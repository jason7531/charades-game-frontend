import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <>
      <body>
        <div className={classes.container} onclick="onclick">
          <div className={classes.top}></div>
          <div className={classes.bottom}></div>
          <div className={classes.center}>
            <h2>Please join</h2>
            <input
              type="text"
              placeholder="Nickname"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="text"
              placeholder="Room Code"
              onChange={(event) => setRoom(event.target.value)}
            />
            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/home?name=${name}&room=${room}`}
            >
              <button className={classes.button}>Join</button>
            </Link>
            <h2>&nbsp;</h2>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;
