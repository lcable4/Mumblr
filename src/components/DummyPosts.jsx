import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { Link, useParams } from "react-router-dom";
import { TagsComp } from "./";
import { getIndividualPost, DeletePost, getAllTags } from "../api-adapter";

function DummyPosts(props) {
  const [openedPost, setOpenedPost] = useState({});

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

  // const result = post.filter(post => post.title.includes)

  console.log(props.posts, "propsDummyPost");
  const mapPosts = props.posts.map((post) => {
    console.log(post.tags);
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
  // getIndividualPost()

  // function filterPosts (id) {
  //     for(let i = 0; i <= posts.length; i++)
  //     if(posts.id ){

  //     }
  // }

  return (
    // <div key={`${post._id}`}>
    <div className="openedPostContainer">
      <div>{mapPosts}</div>
      <div className="openedPostWindow">
        <img className="companyLogoPostWindow" src="/Untitled_Artwork 25.png" />
        <div className="openedPostTextBox">
          <div className="openedPostText">
            <h2>{openedPost.title}</h2>
            <p>Price: {openedPost.price}</p>
            <p>Description: {openedPost.description}</p>
            <p>Location: {openedPost.location}</p>
          </div>
          <button className="openedPostMessageSellerBtn">MESSAGE SELLER</button>

          <Link to="/profile" className="openedPostMyProfileBtn">
            MY PROFILE
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DummyPosts;
