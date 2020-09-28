import {SET_REGISTRATION} from './registrationTypeAction'
import {Dispatch} from 'redux'
import {appSetError, appSetStatus} from '../appReducer/appAction'
import {authAPI} from '../../api/api'

// actions =============================================================================================================

export const setRegistration = (value: boolean) => ({
   type: SET_REGISTRATION,
   value,
} as const)

export type ActionType = ReturnType<typeof setRegistration>

// thunks ==============================================================================================================

export const registration = (email: string, password: string) =>
   (dispatch: Dispatch) => {
      dispatch(appSetStatus('loading'))
      authAPI.registration({
         email,
         password,
      })
         .then(res => {
            if (res.data.addedUser.created) {
               dispatch(setRegistration(true))
            } else {
               dispatch(appSetError('error'))
            }
         })
         .catch(error => {
            dispatch(appSetError('error'))
         })
         .finally(() => {
            appSetStatus('succeeded')
         })
   }
