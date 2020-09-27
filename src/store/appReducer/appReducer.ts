import {RequestStatusType} from './appType'
import {ActionType} from './appAction'

const initialState = {
   status: 'idle' as RequestStatusType,
   error: null as null | string,
   isInitialized: false as boolean,
}

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case 'APP/SET_STATUS':
         return {...state, status: action.status}
      case 'APP/SET_ERROR':
         return {...state, error: action.error}
      case 'APP/SET_INITIALIZED':
         return {...state, isInitialized: action.initialized}
      default:
         return state
   }
}

export default appReducer
