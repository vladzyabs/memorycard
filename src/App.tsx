import React from 'react'
import classes from './app.module.scss'
import {Route} from 'react-router-dom'
import * as routes from './routes'
import {Header} from './components'
import {LoginPage, NewPasswordPage, RegistrationPage, RestorePasswordPage} from './pages'

const App = () => {
   return (
      <div className={classes.App}>
         <Header/>
         <div className={classes.container}>
            <Route path={routes.LOGIN} render={() => <LoginPage/>}/>
            <Route path={routes.REGISTRATION} render={() => <RegistrationPage/>}/>
            <Route path={routes.NEW_PASSWORD} render={() => <NewPasswordPage/>}/>
            <Route path={routes.RESTORE_PASSWORD} render={() => <RestorePasswordPage/>}/>
         </div>
      </div>
   )
}

export default App
