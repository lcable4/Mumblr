import React, { useState, useEffect } from "react";
import {
  Navbar,
  DummyPosts,
  Login,
  Register,
  NewPost,
  Profile,
  SearchBar,
  TagsComp,
} from "./";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllTags, getPosts, getUsers } from "../api-adapter";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  

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
          <Navbar posts={posts} setPosts={setPosts} />
          <Routes>
            <Route
              path="/"
              element={<DummyPosts posts={posts} users={users} />}
            />
            <Route
              path="/login"
              element={<Login setCurrentUser={setCurrentUser} />}
            />
            <Route
              path="/register"
              element={<Register setCurrentUser={setCurrentUser} />}
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
