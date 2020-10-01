import React from 'react'
import classes from './Loader.module.scss'
import loaderSVG from '../../../assets/images/loader.svg'

const Loader = () => {
   return (
      <div className={classes.loader}>
         <img src={loaderSVG} className={classes.img} alt="loader"/>
      </div>
   )
}

export default React.memo(Loader)
