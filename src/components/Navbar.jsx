import React, { useState } from "react";
import { Link, Outlet, Route, Router } from "react-router-dom";
import { SearchBar } from "./";

const Navbar = (props) => {
  return (
    <div id="navbar">
      <img className="companyLogo" src="/Untitled_Artwork 27.png" alt="" />
      <Link to="/newpost" className="listItemBtn">
        LIST AN ITEM
      </Link>

      <SearchBar posts={props.posts} setPosts={props.setPosts} />
      {/* <div>{<SearchBar />}</div> */}

      <Link to="/" className="navBtns1">
        HOME
      </Link>
      <Link to="/" className="navBtns2">
        POSTS
      </Link>
      <Link to="/login" className="navBtns3">
        LOGIN
      </Link>
    </div>
  );
};

export default Navbar;
