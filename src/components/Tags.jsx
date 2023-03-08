import  React, { useState, useEffect } from "react";
import { ReactDOM} from "react-dom";
import { Link, useParams } from "react-router-dom";
import { getIndividualPost, DeletePost, getAllTags } from "../api-adapter";


async function Tags(){
const allTags = await getAllTags();
     allTags.map((tags) => {
        return (
        
        <p>{tags.name}</p>
        )}
)}
export default Tags;