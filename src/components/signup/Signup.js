import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { MODAL_TYPE } from "../modal";

import InputField from "../inputField";

import "./signup.css";

const Signup = ({
  onClose,
  handlePostClick,
  selectedModalType,
  shouldShowCloseBtn,
  setShouldShowCloseBtn,
}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    onClose();
    navigate("/home");
  };

  const handleLoginClick = () => {
    if (!selectedModalType) {
      navigate("/login");
      return;
    }
    handlePostClick("LOGIN");
    setShouldShowCloseBtn(true);
  };

  return (
    <div className="signup-container">
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
        SIGN UP
      </h3>
      <h2 style={{ marginTop: "5px" }}>Create an account to continue</h2>
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email or username"
        value={email}
        className="inputField"
        onChange={(e) => setEmail(e.target.value)}
        fieldLabel="fieldLabel"
      />
      <InputField
        label="Username"
        type="text"
        placeholder="Choose a preferred username"
        value={username}
        className="inputField"
        onChange={(e) => setUsername(e.target.value)}
        fieldLabel="fieldLabel"
      />
      <InputField
        type="password"
        label="Password"
        placeholder="Choose a strong password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="inputField"
        fieldLabel="fieldLabel"
      />
      <button type="submit" className="submitBtn" onClick={handleContinue}>
        Continue
      </button>
      <p className="loginClass">
        Already have an account?{" "}
        <strong onClick={handleLoginClick} style={{ cursor: "pointer" }}>
          Login
        </strong>
      </p>
    </div>
  );
};

export default Signup;
