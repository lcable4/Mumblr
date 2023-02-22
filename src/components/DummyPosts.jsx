import { React, useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";

function DummyPosts(props) {
  console.log(props);
  return props.posts.map((post) => {
    return (
      <div className="postInfo" key={`${post._id}`}>
        <div>
          <img className="paperPlaneImg" src="/Untitled_Artwork 23.png" />

          <h2 className="postTitle">{post.title}</h2>
          <p>Seller: {post.author.username}</p>
          <p>Price: {post.price}</p>
          <p>{post.description}</p>
          <p>Location: {post.location}</p>
        </div>
        <div className="openedPostWindow"><img className="companyLogoPostWindow" src="/Untitled_Artwork 25.png" /></div>
      </div>
    );
  });
}

export default DummyPosts;