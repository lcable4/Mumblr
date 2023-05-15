import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const searchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const searchPost = (e) => {
    e.preventDefault();
    const searchToLower = searchTerm.toLowerCase();
    const filteredSearch = props.posts.filter((post) => {
      const postToLower = post.title.toLowerCase();
      return postToLower.includes(searchToLower);
    });
    props.setPosts(filteredSearch);
    navigate("/");
  };
  // // const searchResult = post.filter(post => post.title.includes)

  //  const handleChange = (e) => {
  //     e.preventDefault();
  //     props.setSearchTerm(e.target.value);
  //   };

  //   if (props.searchTerm.length > 0) {
  //       posts.filter((post) => {
  //         const lowercaseTitle = post.title.toLowerCase()
  //         const lowercaseSearchTerm = props.searchTerm.toLowerCase()
  //       return lowercaseTitle.includes(lowercaseSearchTerm);
  //   });
  //   }

  return (
    <form onSubmit={searchPost}>
      <input
        className="Input"
        type="text"
        name="search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button className="searchButton">search</button>
    </form>
  );
};

export default searchBar;
