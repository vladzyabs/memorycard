import {combineReducers} from 'redux'
import appReducer from './appReducer/appReducer'
import authReducer from './authReducer/authReducer'
import registrationReducer from './registrationReducer/registrationReducer'
import restorePasswordReducer from './restorePasswordReducer/restorePasswordReducer'

const rootReducer = combineReducers({
   app: appReducer,
   auth: authReducer,
   registration: registrationReducer,
   restorePassword: restorePasswordReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export default rootReducer
