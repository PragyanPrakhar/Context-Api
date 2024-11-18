import React, { useContext } from 'react'
import userContext from '../context/userContext';

function Profile() {
  const {user}=useContext(userContext);
  if(!user) {
    return <h1>Please login to view profile</h1>
  }
  return (
    <div>
        <h1>Profile : {user.username}</h1>
    </div>
  )
}

export default Profile
