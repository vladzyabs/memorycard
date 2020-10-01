import {ActionType} from './registrationAction'

const initialState = {
   isRegistered: false as boolean
}

type InitialStateType = typeof initialState

const registrationReducer = (state = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case 'SET_REGISTRATION':
         return {...state, isRegistered: action.value}
      default:
         return state
   }
}

export default registrationReducer
