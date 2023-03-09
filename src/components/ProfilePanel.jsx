import React, { useState, useEffect, useReducer } from "react";
import { useResolvedPath } from "react-router-dom";
import { getUsers } from "../api-adapter";

// function ProfilePanel() {
//   const [myProfile, setMyProfile] = useState([]);
//   async function getMyProfile() {
//     {
//       try {
//         let result = await getUsers();
//         console.log(result);
//         let holder = [];
//         for (let i = 0; i < result.length; i++) {
//           let newResult = result;
//           console.log(newResult);
//           if (result[i].id) {
//             holder.push(result[i]);
//           }
//         }
//         setMyProfile(holder);
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   }
//   useEffect(() => {
//     getMyProfile();
//   }, []);
//   return <p>{myProfile.id}</p>;
// }
function ProfilePanel(props) {
  
  return <p>{props.user.id}</p>;
}

export default ProfilePanel;
