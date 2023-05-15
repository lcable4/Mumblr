import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AccountMenu from "./AccountMenu";

const Navbar = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  useEffect(() => {
    // Check the localStorage value for "loggedIn" on component initialization
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogoutClick = () => {
    // Clear localStorage or perform any other logout actions
    localStorage.clear(); // Clearing localStorage in this example

    // Update the logged-in state
    setLoggedIn(false);

    // Optional: Redirect to the login page or perform any other necessary actions
  };

  const handleAccountMenuToggle = () => {
    setShowAccountMenu((prev) => !prev);
  };

  return (
    <div id="navbar">
      <div className="navIcon">
        <a href="/">
          <img className="companyLogo" src="/Untitled_Artwork 27.png" alt="" />
        </a>
      </div>

      <div className="newPostDiv">
        <Link to="/newpost" className="listItemBtn">
          Write a new post
        </Link>
      </div>
      <div className="navMenu">
        {loggedIn ? (
          <div className="navBtns3">
            <button onClick={handleAccountMenuToggle}>Account</button>

            {showAccountMenu && (
              <AccountMenu handleLogoutClick={handleLogoutClick} />
            )}
          </div>
        ) : (
          <div>
            <Link className="navBtns3" to="/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
