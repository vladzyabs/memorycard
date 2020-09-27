import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import appReducer from './appReducer/appReducer'
import authReducer from './authReducer/authReducer'

const rootReducer = combineReducers({
   app: appReducer,
   auth: authReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
