import {ActionType} from './restorePasswordAction'

const initialState = {
   selectedEmail: '' as string,
   success: false as boolean,
}

type InitialStateType = typeof initialState

const restorePasswordReducer = (state = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case 'SET_SELECTED_EMAIL':
         return {...state}
      default:
         return state
   }
}

export default restorePasswordReducer
