import React, { useState, useEffect } from "react";
// import { ReactDOM } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api-adapter";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const setCurrentUser = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    setUser(user);
  }

    const handleClick = async (event) => {
        event.preventDefault();
        const result = await loginUser(userName, password);
        console.log(result)
        if (result && result.token) {
          localStorage.setItem("token", result.token);
          setLoggedIn(true);
          setCurrentUser();
          navigate("/");
        } else {
          console.log(result.error);
        }
  }


  return (
    <div className="loginPageBox">
      <div className="loginPage">
        <h1>Please login</h1>
        <form onSubmit={handleClick}>
          <p>Username:</p>
          <input
            className="userNameInput"
            value={userName}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <p>Password:</p>
          <input
            className="passwordInput"
            value={password}
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button className="submitBtn" type="submit">
            Submit
          </button>
          <br></br>
          <Link to="/register" className="registerLink">
            Dont have an account? Register here!
          </Link>
          <img
            className="companyLogoLoginBox"
            src="/Untitled_Artwork 25.png"
            alt=""
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
