import React, { useState, useEffect } from 'react'
import { getUsers } from '../api-adapter';

  function ProfilePanel() {
   async function getMyProfile() {
        const [myProfile, setMyProfile] = useState([]);
        {
            try
            {
                let result = await getUsers();
                console.log(result)
                let holder = [];
                for(let i = 0; i < result.length; i++)
                {
                    
                    if(result[i].isAuthor)
                    {
                        holder.push(result[i]);
                    }
                }
                setMyProfile(holder);
                
            }
            catch(e)
            {
                console.error(e);
            }
        }

    }

    useEffect(()=>
    {
        getMyProfile();
    },[])

   
}
export default ProfilePanel;