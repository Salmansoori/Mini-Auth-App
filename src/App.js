import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login";
import Signup from "./components/signup";
import Home from "./components/home";
import Modal from "./components/modal";

const posts = [
  {
    userName: "Theresa Webb",
    userImage: "https://randomuser.me/api/portraits/women/44.jpg",
    timeAgo: "5 mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
  },
  {
    userName: "Marvin McKinney",
    userImage: "https://randomuser.me/api/portraits/men/45.jpg",
    timeAgo: "8 mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 16,
  },
];

function App() {
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [selectedModalType, setSelectedModalType] = useState();
  const [shouldShowCloseBtn, setShouldShowCloseBtn] = useState(false);

  const handlePostClick = (modalType) => {
    setSignupModalOpen(true);
    setSelectedModalType(modalType);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
    setShouldShowCloseBtn(false);
    setSelectedModalType();
  };

  return (
    <Router>
      <div>
        <Modal
          isOpen={isSignupModalOpen}
          onClose={closeSignupModal}
          handlePostClick={handlePostClick}
          selectedModalType={selectedModalType}
          setSelectedModalType={setSelectedModalType}
          shouldShowCloseBtn={shouldShowCloseBtn}
          setShouldShowCloseBtn={setShouldShowCloseBtn}
        />
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                onClose={closeSignupModal}
                handlePostClick={handlePostClick}
                selectedModalType={selectedModalType}
                setSelectedModalType={setSelectedModalType}
                shouldShowCloseBtn={shouldShowCloseBtn}
                setShouldShowCloseBtn={setShouldShowCloseBtn}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup
                onClose={closeSignupModal}
                handlePostClick={handlePostClick}
                selectedModalType={selectedModalType}
                shouldShowCloseBtn={shouldShowCloseBtn}
                setShouldShowCloseBtn={setShouldShowCloseBtn}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                posts={posts}
                handlePostClick={handlePostClick}
                setShouldShowCloseBtn={setShouldShowCloseBtn}
              />
            }
          />
          <Route
            path="/"
            element={
              <Login
                onClose={closeSignupModal}
                isSignupModalOpen={isSignupModalOpen}
                handlePostClick={handlePostClick}
                selectedModalType={selectedModalType}
                setSelectedModalType={setSelectedModalType}
                shouldShowCloseBtn={shouldShowCloseBtn}
                setShouldShowCloseBtn={setShouldShowCloseBtn}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
