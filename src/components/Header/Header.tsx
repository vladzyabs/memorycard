import React from 'react'
import {NavLink} from 'react-router-dom'
import * as routes from '../../routes'
import classes from './Header.module.scss'

const Header = () => {
   return (
      <header className={classes.header}>
         <div className={classes.container}>
            <NavLink to={routes.LOGIN}>login</NavLink>
            <NavLink to={routes.REGISTRATION}>registration</NavLink>
            <NavLink to={routes.RESTORE_PASSWORD}>restore password</NavLink>
            <NavLink to={routes.NEW_PASSWORD}>new password</NavLink>
         </div>
      </header>
   )
}

export default Header
