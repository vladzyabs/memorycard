import React from 'react'
import logoPNG from '../../assets/images/logo.png'
import classes from './Header.module.scss'
import {Navbar} from '../index'

const Header = () => {
   return (
      <header className={classes.header}>
         <div className={classes.container}>
            <div>
               <img src={logoPNG} alt="logo" width={'50px'}/>
            </div>
            <Navbar/>
         </div>
      </header>
   )
}

export default Header
