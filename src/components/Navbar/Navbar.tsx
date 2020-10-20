import React from 'react'
import classes from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'
import {PATHS} from '../../routes'

const Navbar = () => {

   React.useEffect(() => {
      document.body.addEventListener('click', handleOutsideClick)
   }, [])

   const [activeMenu, setActiveMenu] = React.useState<boolean>(false)

   const menuRef = React.useRef<HTMLDivElement>(null)

   const handleOutsideClick = (event: MouseEvent | any) => {
      const path = event.path || (event.composedPath && event.composedPath()) // firefox uses composedPath
      if (!path.includes(menuRef.current)) {
         setActiveMenu(false)
      }

   }

   const onClickSwitch = () => setActiveMenu(prevState => !prevState)
   const onClickLink = () => setActiveMenu(false)

   return (
      <div className={classes.menu} ref={menuRef}>
         <div className={classes.menuTitle}>Menu</div>
         <div className={`${classes.switch} ${activeMenu ? classes.active : ''}`} onClick={onClickSwitch}>
            <div className={classes.switchLine}>{''}</div>
            <div className={classes.switchLine}>{''}</div>
            <div className={classes.switchLine}>{''}</div>
         </div>
         <nav className={classes.navbar}>
            <NavLink to={PATHS.LOGIN} activeClassName={classes.activeLink} onClick={onClickLink}>login</NavLink>
            <NavLink to={PATHS.PROFILE} activeClassName={classes.activeLink} onClick={onClickLink}>profile</NavLink>
            <NavLink to={PATHS.REGISTRATION} activeClassName={classes.activeLink}
                     onClick={onClickLink}>registration</NavLink>
            <NavLink to={PATHS.RESTORE_PASSWORD} activeClassName={classes.activeLink} onClick={onClickLink}>restore
               password</NavLink>
         </nav>
      </div>
   )
}

export default React.memo(Navbar)
