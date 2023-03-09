import  React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { Link, useParams } from "react-router-dom";
import { Register } from "./"
import { getUsers } from "../api-adapter";


 function Profile(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            let users = await getUsers();
            setUsers(users);
        }
        fetchUsers();
    }, []);
console.log(users)

return(
<div className="profileBoxFull">
    <div className="profileBox">
         <img className="profileBoxImg" src="/Untitled_Artwork 25.png" />
    <div>
         <img className="profilePic" src="/Untitled_Artwork 26.png" />
        <h3 className="profileUserName">@username</h3>
        <p className="profileBio">Bio: 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, est non iaculis semper, augue felis ullamcorper diam, et sollicitudin justo tellus sed orci. Duis quam dolor, condimentum dictum posuere a, maximus non libero. Morbi pharetra libero quis diam ultricies fringilla. Phasellus ac purus consectetur, consequat dui quis, volutpat enim. Integer in urna lectus. Suspendisse ligula eros, hendrerit in porttitor eget, aliquam at elit. Duis imperdiet tincidunt enim et bibendum. Nulla facilisis vestibulum sem. Etiam nec consequat magna, in dignissim risus. </p>
        </div>
        <br></br>

    </div>

</div>    

)
}

export default Profile;