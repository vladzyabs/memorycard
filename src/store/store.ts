import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import appReducer from './appReducer/appReducer'
import loginReducer from './loginReducer/loginReducer'
import registrationReducer from './registrationReducer/registrationReducer'
import restorePasswordReducer from './restorePasswordReducer/restorePasswordReducer'

const rootReducer = combineReducers({
   app: appReducer,
   login: loginReducer,
   registration: registrationReducer,
   restorePassword: restorePasswordReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
