import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api-adapter";
import { MultilineInput } from "react-input-multiline";

function NewPost() {
  const [newTitle, setNewTitle] = useState();
  const [newDescription, setNewDescription] = useState();
  const [newPrice, setNewPrice] = useState();
  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();
    const result = await createPost(newTitle, newDescription, newPrice);
    if (result != undefined) {
      localStorage.setItem("token", result.data.token);
      navigate("/");
    } else {
      console.log(result.error);
    }
  };

  return (
    <div className="newPostFormBox">
      <div className="newPostFormFull">
        <form onSubmit={handleClick}>
          <div className="newPostLabelText">
            <h3>NEW POST</h3>
            <label>
              Title:
              <input
                className="newPostInput"
                name="title"
                type="text"
                value={newTitle}
                onChange={(event) => {
                  console.log(event.target.value);
                  setNewTitle(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="newPostLabelText">
            <label>
              Description:
              <textarea
                className="newPostInput"
                name="description"
                type="text"
                value={newDescription}
                onChange={(event) => {
                  console.log(event.target.value);

                  setNewDescription(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="newPostLabelText">
            <label>
              Tags:
              <input
                className="newPostInput"
                name="price"
                type="text"
                value={newPrice}
                onChange={(event) => {
                  console.log(event.target.value);

                  setNewPrice(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <button className="newPostBtn" type="submit">
              POST
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewPost;
