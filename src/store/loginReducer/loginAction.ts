import {SET_LOGIN} from './loginType'
import {Dispatch} from 'redux'
import {appSetError, appSetStatus} from '../appReducer/appAction'
import {authAPI} from '../../api/api'

// actions =============================================================================================================

export const setIsLoggedIn = (value: boolean) => ({
   type: SET_LOGIN,
   value,
} as const)

export type ActionType = ReturnType<typeof setIsLoggedIn>

// thunks ==============================================================================================================

export const login = (email: string, password: string, rememberMe: boolean) =>
   (dispatch: Dispatch) => {
      dispatch(appSetStatus('loading'))
      authAPI.login({
         email,
         password,
         rememberMe,
      })
         .then(res => {
            console.log(res)
            if (res.status === 200) {
               dispatch(setIsLoggedIn(true))
            } else {
               dispatch(appSetError('Oops...Something went wrong. Please try again later'))
            }
         })
         .catch(error => {
            dispatch(appSetError(error.response.data.error))
         })
         .finally(() => {
            appSetStatus('succeeded')
         })
   }
