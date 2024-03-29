import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { Link, useParams } from "react-router-dom";
import { TagsComp, ProfilePanel, Profile, NewPost } from ".";
import { DeletePost, getUsers } from "../api-adapter";
import { SearchBar } from "./";

export default function Home(props) {
  const [openedPost, setOpenedPost] = useState({});

  const currentUser = localStorage.getItem("currentUser");
  console.log(currentUser, "CURRENTUSER");
  console.log(props, "PROPS LOG");

  function displayPost(post) {
    console.log(post);
    setOpenedPost(post);
    console.log(openedPost);
  }

  const handleClickDelete = async (id) => {
    const result = await DeletePost(id);
    console.log("hello");
    if (result != undefined) {
      return;
    } else {
      console.log(result.error);
      console.log(result.error);
    }
  };

  const mapPosts = props.posts.map((post) => {
    return (
      <div className="fullPostBox" key={`post map and all post${post.id}`}>
        <div
          className="postInfo"
          onClick={() => {
            displayPost(post);
          }}
          key={`${post._id}`}
        >
          <div className="postDetails">
            <p>@{post.author.username}</p>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.tags.length
              ? post.tags.map((tag) => (
                  <TagsComp key={`tag map and tag ${tag.id}`} tag={tag} />
                ))
              : null}
            {post.isAuthor ? (
              <div>
                <button
                  className="deleteBtn"
                  onClick={() => {
                    handleClickDelete(post._id);
                  }}
                >
                  DELETE
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="navSearch">
        <SearchBar posts={props.posts} setPosts={props.setPosts} />
      </div>

      <div
        className="openedPostContainer"
        key={`user map and user ${currentUser?.id}`}
      >
        <div className="mapPostsContainer">{mapPosts}</div>
        {currentUser ? (
          <div className="openedPostWindow">
            <img
              className="companyLogoPostWindow"
              src="/Untitled_Artwork 27.png"
              alt=""
            />
            <ProfilePanel users={props.users} />
            <NewPost />
            <div className="profileBtnDiv">
              <Link to="/profile" className="openedPostProfileLink">
                <button>View Profile</button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
