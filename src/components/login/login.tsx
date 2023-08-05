import React from "react";
import "./login.scss";
import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

const login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./sumurai.png" alt="" />
      </div>
      <Button onClick={signIn}>Login</Button>
    </div>
  );
};

export default login;
