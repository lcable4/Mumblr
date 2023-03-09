import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { Link, useParams } from "react-router-dom";
import { TagsComp } from "./";
import {  DeletePost, getUsers, } from "../api-adapter";



function DummyPosts(props) {
  const [openedPost, setOpenedPost] = useState({});
  const [user, setUser] = useState("");

  function displayPost(post) {
    console.log(post);
    setOpenedPost(post);
    console.log(openedPost);
  }

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUsers();
      const result = await response.json();
      console.log(result);
      const currentUser = result.users.find(user => user.username === props.currentUser.id)[0];
      console.log(currentUser);
      setUser(currentUser);
    }
    fetchUser();
  }, []);

  const renderUserProfile = () => {
    if (!user) {
      return null;
    }

    return (
      <div>
        <h2>{user.username}</h2>
        <p>{user.bio}</p>
      </div>
    );
  };


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

  // const result = post.filter(post => post.title.includes)

  
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
          <div>
            <p>@{post.author.username}</p>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {/* 
          <Tags tags={post.tags}/> */}
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
  // Deleted CSS classnames, openedPostContainer, openedPostWindow
  // companyLogoPostWindow, openedPostTextBox
  return (
    <>
    <div className="openedPostContainer">
      <div>{mapPosts}</div>
      <div className="openedPostWindow">
      <div>{renderUserProfile()}</div>
         
          <Link to="/profile" className="openedPostMyProfileBtn">
            MY PROFILE
          </Link>
        </div>
      </div>
      
  </>
  );
}

export default DummyPosts;
