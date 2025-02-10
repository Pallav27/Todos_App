import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)
  return (
    <div>
        <h1>Profile : {user ? user.username : 'No user logged in'}</h1>
    </div>
  )
}

export default Profile