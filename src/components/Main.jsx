import React, { useState, useEffect } from "react";
import {
  Navbar,
  Home,
  Login,
  Register,
  NewPost,
  Profile,
  SearchBar,
  TagsComp,
  ProfilePanel,
} from "./";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllTags, getPosts, getUsers } from "../api-adapter";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  async function fetchAllPosts() {
    try {
      const response = await getPosts();
      setPosts(response);
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchAllTags() {
    try {
      const response = await getAllTags();
      setTags(response);
    } catch (err) {
      console.error(err);
    }
  }
  async function fetchAllUsers() {
    try {
      const response = await getUsers();
      console.log(response);
      setUsers(response);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchAllPosts();
    fetchAllTags();
    fetchAllUsers();
  }, []);
  console.log(posts, users);
  return (
    <>
      <div id="main">
        <BrowserRouter>
          <Navbar posts={posts} setPosts={setPosts} loggedIn={loggedIn} />
          {/* <ProfilePanel users={users} /> */}
          <Routes>
            <Route
              path="/"
              element={
                <Home posts={posts} users={users} currentUser={currentUser} />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  setCurrentUser={setCurrentUser}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  setCurrentUser={setCurrentUser}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
            <Route path="/newpost" element={<NewPost />} />
            <Route
              path="/profile"
              element={<Profile setCurrentUser={setCurrentUser} />}
            />
            <Route
              path="/SearchBar"
              element={
                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  posts={posts}
                  setPosts={setPosts}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Main;
