import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATHS} from '../../routes'
import classes from './NotFound.module.scss'
import {faSearchLocation} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const NotFound = ({location}: any) => {
   return (
      <div className={classes.notFound}>
         <div className={classes.container}>
            <h1>404 page '{location.pathname}' not found</h1>
            <div className={classes.icon}><FontAwesomeIcon icon={faSearchLocation}/></div>
            <NavLink to={PATHS.PROFILE} className={classes.link}>Home</NavLink>
         </div>
      </div>
   )
}

export default React.memo(NotFound)
