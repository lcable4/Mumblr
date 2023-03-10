import { React, useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api-adapter";

const setCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [user, setUser] = useState("");
  //   const [confirmPass, setConfirmPass] = useState("");
  //   const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // makeProfile(username, password);
      const result = await registerUser(username, password, name, location);
      console.log(result, "RESULT25");
      localStorage.setItem("token", result.token);
      setUsername("");
      setPassword("");
      setName("");
      setLocation("");
      setUser(user);
      // setCurrentUser(result.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(username);
  return (
    <div className="loginPageBox">
      <div className="loginPage">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <p>Username:</p>
          <input
            className="userNameInput"
            value={username}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Name:</p>
          <input
            className="userNameInput"
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <p>Location:</p>
          <input
            className="userNameInput"
            value={location}
            type="text"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <p>Password:</p>
          <input
            className="passwordInput"
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <p>Confirm Password:</p>
          <input
            className="passwordInput"
            // value={confirmPass}
            type="password"
            placeholder="Confirm Password"
          />

          <br></br>
          <button className="submitBtn" type="submit">
            Submit
          </button>
          <br></br>
          <Link to="/login" className="registerLink">
            Already have an account? Login here!
          </Link>
          <img
            className="companyLogoLoginBox"
            src="/Untitled_Artwork 27.png"
            alt=""
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
