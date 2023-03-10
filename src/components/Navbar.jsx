import React, { useState, useEffect } from "react";
import { Link, Outlet, Route, Router } from "react-router-dom";
import { SearchBar } from "./";

const Navbar = (props) => {
  const loggedIn = props.loggedIn;
  function onLogoutClick() {
    console.log("been clicked");
    localStorage.removeItem("token");
    window.location.reload(false);
  }

  function ifUserLogged() {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }
  // useEffect(() => {
  //   const logged = ifUserLogged();
  //   setLoggedValue(logged);
  // }, []);

  // console.log(ifUserLogged());
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
      <Link to="/profile" className="navBtns2">
        PROFILE
      </Link>
      {loggedIn ? (
        <button className="navBtns3" onClick={onLogoutClick}>
          Logout
        </button>
      ) : (
        <div>
          <Link className="navBtns3" to="/login">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// return (
//   <div id="navbar">
//     {ifUserLogged() ? (
//       <>
//         <div className="navLinksDiv">
//           <Link to="/User" className="navLinks">
//             <button className="btns">Profile</button>
//           </Link>
//         </div>
//         <p>Logged in as: {localStorage.getItem("username")}</p>
//       </>
//     ) : null}
//     {ifUserLogged() ? (
//       <button className="navBtns3" onClick={onLogoutClick}>
//         Logout
//       </button>
//     ) : (
//       <div>
//         <Link className="navLinks" to="/login">
//           <button className="navBtns3">Login</button>
//         </Link>
//       </div>
//     )}
//   </div>
// );
