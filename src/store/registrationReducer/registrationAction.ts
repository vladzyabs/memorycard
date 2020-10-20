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
   async (dispatch: Dispatch) => {
      dispatch(appSetStatus('loading'))
      try {
         const res = await authAPI.registration({
            email,
            password,
         })
         if (res.data.addedUser.created) {
            dispatch(setRegistration(true))
            appSetStatus('succeeded')
         } else {
            dispatch(appSetError('error'))
            appSetStatus('failed')
         }
      } catch (error) {
         dispatch(appSetError('error app'))
         appSetStatus('failed')
      }
   }
