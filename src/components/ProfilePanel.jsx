import React, { useState, useEffect, useReducer } from "react";
import { createRoutesFromElements, useResolvedPath } from "react-router-dom";
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
  const [currentUserObject, setCurrentUserObject] = useState(null);
  console.log(props, "PROPS");

  function ifUserLogged() {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    if (props.users.length) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const filteredUser = props.users.filter((element) => {
        console.log(typeof element.username, "ELEMENT");
        if (element.username == currentUser) {
          console.log("Hello");
          return true;
        } else {
          return false;
        }
      });
      if (filteredUser.length) {
        setCurrentUserObject(filteredUser[0]);
      }
    }
  }, [props.users]);
  return (
    <div className="profileContainer">
      <div className="profileOnDash">
        {currentUserObject && currentUserObject.username && ifUserLogged() ? (
          <>
            <p>{currentUserObject.username}</p>
            <p>{currentUserObject.name}</p>
            <p>{currentUserObject.location}</p>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ProfilePanel;
