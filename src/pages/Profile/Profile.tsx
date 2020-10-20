import React from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/rootReducer'
import {PATHS} from '../../routes'

const Profile = () => {

   const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

   if (!isLoggedIn) {
      return <Redirect to={PATHS.LOGIN}/>
   }

   return (
      <div>
         <h1>Profile</h1>
      </div>
   )
}

export default Profile
