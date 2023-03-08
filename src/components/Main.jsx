import React, { useState, useEffect } from "react";
import { Navbar, DummyPosts, Login, Register, NewPost, Profile, SearchBar, Tags } from "./";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllTags, getPosts } from "../api-adapter";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  async function fetchAllPosts() {
    try {
      const response = await getPosts();

      console.log(response)
//       const postsData = result.data.posts;
// console.log(postsData)
      setPosts(response);
    } catch (err) {
      console.error(err);
    }
  }
  async function fetchAllTags() {
    try {
      const response = await getAllTags();

      console.log(response)
//       const postsData = result.data.posts;
// console.log(postsData)
      setTags(response);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchAllPosts();
    fetchAllTags();
  }, []);

  return (
    <div id="main">
      <BrowserRouter>
        <Navbar posts={posts} setPosts={setPosts}/>
        <Routes>
          <Route path="/" element={<DummyPosts posts={posts} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/SearchBar" element={<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} posts={posts} setPosts={setPosts}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
