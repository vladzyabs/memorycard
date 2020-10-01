import React from 'react'
import classes from './app.module.scss'
import {Route, Switch} from 'react-router-dom'
import * as routes from './routes'
import {Header, Loader} from './components'
import {LoginPage, ProfilePage, NewPasswordPage, RegistrationPage, RestorePasswordPage, NotFound} from './pages'
import {useSelector} from 'react-redux'
import {AppRootStateType} from './store/store'
import {RequestStatusType} from './store/appReducer/appType'

const App = () => {

   const loading = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
   const error = useSelector<AppRootStateType, null | string>(state => state.app.error)

   return (
      <div className={classes.App}>
         {loading === 'loading' && <Loader/>}
         <Header/>
         <div className={classes.container}>
            <Switch>
               <Route exact path={routes.HOME} render={() => <LoginPage/>}/>
               <Route path={routes.PROFILE} render={() => <ProfilePage/>}/>
               <Route path={routes.LOGIN} render={() => <LoginPage/>}/>
               <Route path={routes.REGISTRATION} render={() => <RegistrationPage/>}/>
               <Route path={routes.NEW_PASSWORD} render={() => <NewPasswordPage/>}/>
               <Route path={routes.RESTORE_PASSWORD} render={() => <RestorePasswordPage/>}/>

               <Route component={NotFound}/>
            </Switch>
         </div>
         {error && <div>error</div>}
      </div>
   )
}

export default App
