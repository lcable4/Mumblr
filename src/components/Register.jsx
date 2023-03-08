import { React, useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api-adapter";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const [confirmPass, setConfirmPass] = useState("");
//   const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // makeProfile(username, password);
    const result = await registerUser(username, password);
    localStorage.setItem("token", result.data.token);
    setUsername("")
    setPassword("")
        navigate("/login");

  };

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
          <p>Confirm Password:</p>
          <input
            className="passwordInput"
            // value={confirmPass}
            type="text"
            placeholder="Confirm Password"
          />

          <br></br>
          <button
            className="submitBtn"
            type="submit"

          >
            Submit
          </button>
          <br></br>
          <Link to="/login" className="registerLink">
            Already have an account? Login here!
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

export default Register;
