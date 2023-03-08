import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { Link, useParams } from "react-router-dom";
import { getIndividualPost, DeletePost, getAllTags } from "../api-adapter";

function TagsComp(props) {

  return <p>{props.tag.name}</p>;
}
export default TagsComp;
