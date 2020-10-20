import {SET_LOGIN} from './authType'
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

export const login = (data: { email: string, password: string, rememberMe: boolean }) =>
   async (dispatch: Dispatch) => {
      dispatch(appSetStatus('loading'))
      try {
         const res = await authAPI.login(data)
         if (res.status === 200) {
            dispatch(setIsLoggedIn(true))
            dispatch(appSetStatus('succeeded'))
         } else {
            dispatch(appSetError('Oops...Something went wrong. Please try again later'))
            dispatch(appSetStatus('failed'))
         }
      } catch (error) {
         dispatch(appSetError(error.response.data.error))
         dispatch(appSetStatus('failed'))
      }
   }
