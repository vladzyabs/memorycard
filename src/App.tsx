import React from 'react'
import classes from './app.module.scss'
import {Route, Switch} from 'react-router-dom'
import {PATHS} from './routes'
import {Header, Loader} from './components'
import {LoginPage, ProfilePage, NewPasswordPage, RegistrationPage, RestorePasswordPage, NotFound} from './pages'
import {useSelector} from 'react-redux'
import {AppRootStateType} from './store/rootReducer'
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
               <Route exact path={PATHS.HOME} render={() => <LoginPage/>}/>
               <Route path={PATHS.PROFILE} render={() => <ProfilePage/>}/>
               <Route path={PATHS.LOGIN} render={() => <LoginPage/>}/>
               <Route path={PATHS.REGISTRATION} render={() => <RegistrationPage/>}/>
               <Route path={PATHS.NEW_PASSWORD} render={() => <NewPasswordPage/>}/>
               <Route path={PATHS.RESTORE_PASSWORD} render={() => <RestorePasswordPage/>}/>

               <Route component={NotFound}/>
            </Switch>
         </div>
         {error && <div>error</div>}
      </div>
   )
}

export default App
