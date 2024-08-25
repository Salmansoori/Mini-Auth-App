import React from "react";

import { MODAL_TYPE } from "../modal";

import "./home.css";

function Home({ userName, posts, handlePostClick, setShouldShowCloseBtn }) {
  const handlePostDivClick = () => {
    setShouldShowCloseBtn(true);
    handlePostClick(MODAL_TYPE.SIGNUP);
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    setShouldShowCloseBtn(true);
    handlePostClick(MODAL_TYPE.SIGNUP);
  };

  return (
    <div className="home-container">
      <div className="header">
        <h2>Hello {userName}</h2>
        <p>
          How are you doing today? Would you like to share something with the
          community?
        </p>
      </div>
      <div className="submitPost" onClick={handlePostDivClick}>
        <h3>Create Post</h3>
        <form onSubmit={handleSubmitPost}>
          <input
            className="postInput"
            type="text"
            placeholder="How are you feeling today?"
          />
          <button
            type="submit"
            style={{
              width: "111px",
              alignSelf: "self-end",
              backgroundColor: "#4A96FF",
            }}
          >
            Post
          </button>
        </form>
      </div>
      <div className="posts-section">
        {posts.map((post, index) => (
          <div className="post" key={index} onClick={handlePostDivClick}>
            <div className="post-header">
              <img
                src={post.userImage}
                alt={post.userName}
                className="post-avatar"
              />
              <div>
                <h3>{post.userName}</h3>
                <p className="post-time">{post.timeAgo}</p>
              </div>
            </div>
            <div className="postContent">
              <span>{post.icon}</span>
              <span>{post.content}</span>
            </div>
            <div className="post-footer">
              <span>{post.comments} comments</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
