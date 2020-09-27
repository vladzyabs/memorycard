import {SET_CONFIRMING, SET_SELECTED_EMAIL} from './restorePasswordType'
import {Dispatch} from 'redux'
import {authAPI} from '../../api/api'
import {appSetError, appSetStatus} from '../appReducer/appAction'

//actions ==============================================================================================================

export const setConfirming = (value: boolean) => ({
   type: SET_CONFIRMING,
   payload: value,
} as const)

export const setSelectedEmail = (email: string) => ({
   type: SET_SELECTED_EMAIL,
   email,
} as const)

export type ActionType
   = ReturnType<typeof setConfirming>
   | ReturnType<typeof setSelectedEmail>

// thunks ==============================================================================================================

export const getEmailConfirmation = (email: string) =>
   (dispatch: Dispatch) => {
      const message = `
         <div style="padding: 15px">
            password recovery link:
            <a href='http://localhost:3000/memory-cards#/set-new-password/$token$'>
            link</a>
         </div>
      `
      dispatch(appSetStatus('loading'))
      authAPI.forgot({
         email,
         from: '<vladzyaba@mail.ru>',
         message: message,
      })
         .then(res => {

         })
         .catch(error => {
            dispatch(appSetError(error.message))
         })
         .finally(() => {
            dispatch(appSetStatus('succeeded'))
         })
   }
