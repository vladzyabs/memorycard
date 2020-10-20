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
   async (dispatch: Dispatch) => {
      const message = `
         <div style="padding: 15px">
            password recovery link:
            <a href='http://localhost:3000/memory-cards#/set-new-password/$token$'>
            link</a>
         </div>
      `
      dispatch(appSetStatus('loading'))
      try {
         const res = await authAPI.forgot({
            email,
            from: 'test-front-admin <vladzyaba@mail.ru>',
            message: message,
         })
         if (res.data.success) {
            dispatch(setSelectedEmail(email))
            dispatch(appSetStatus('succeeded'))
         } else {
            dispatch(appSetError('Oops...Something went wrong. Please try again later'))
            dispatch(appSetStatus('failed'))
         }
      } catch (error) {
         dispatch(appSetError('Oops...Something went wrong. Please try again later'))
         dispatch(appSetStatus('failed'))
      }
   }

export const sendNewPassword = (password: string, token: string) =>
   async (dispatch: Dispatch) => {
      dispatch(appSetStatus('loading'))
      try {
         const res = await authAPI.sendNewPassword({
            password,
            resetPasswordToken: token,
         })
         dispatch(setConfirming(true))
         dispatch(appSetStatus('succeeded'))
      } catch (error) {
         dispatch(appSetError('Oops...Something went wrong. Please try again later'))
         dispatch(appSetStatus('failed'))
      }
   }
