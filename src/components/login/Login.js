import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../inputField";

import "./login.css";

function Login({
  onClose,
  selectedModalType,
  setSelectedModalType,
  shouldShowCloseBtn,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    if (!selectedModalType) {
      navigate("/mini-auth-app/signup");
    } else {
      setSelectedModalType("SIGNUP");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/mini-auth-app/home");
    onClose();
  };

  return (
    <div className="login-container">
      {shouldShowCloseBtn && (
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      )}
      <h3
        style={{
          color: "#6B6C70",
          height: "17px",
          margin: "0px",
          fontSize: "14px",
        }}
      >
        WELCOME BACK
      </h3>
      <h2 style={{ marginTop: "10px" }}>Log into your account</h2>
      <InputField
        label="Email or Username"
        type="email"
        placeholder="Enter your email or username"
        value={email}
        className="inputField"
        onChange={(e) => setEmail(e.target.value)}
        fieldLabel="fieldLabel"
      />
      <InputField
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="inputField"
        fieldLabel="fieldLabel"
      />
      <button type="submit" className="submitBtn" onClick={handleLogin}>
        Login now
      </button>
      <p className="registerClass">
        Not registered yet?{" "}
        <strong onClick={handleRegisterClick} style={{ cursor: "pointer" }}>
          Register
        </strong>
      </p>
    </div>
  );
}

export default Login;
