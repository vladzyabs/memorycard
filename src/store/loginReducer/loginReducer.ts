import {ActionType} from './loginAction'

const initialState = {
   isLoggedIn: false as boolean,
}

type InitialStateType = typeof initialState

const loginReducer = (state = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case 'SET_LOGIN':
         return {...state, isLoggedIn: action.value}
      default:
         return state
   }
}

export default loginReducer
