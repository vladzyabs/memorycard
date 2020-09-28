import axios from 'axios'
import {
   forgotParamsType,
   forgotResponseType,
   loginParamsType, loginResponseType,
   registrationParamsType,
   sendNewPasswordParamsType, sendNewPasswordResponseType,
} from './apiType'

const instance = axios.create({
   baseURL: 'https://neko-back.herokuapp.com/2.0/',
})

export const authAPI = {
   me: () =>
      instance.post<loginResponseType>(`auth/me`),
   login: (data: loginParamsType) =>
      instance.post<loginResponseType>(`auth/login`, data),
   registration: (data: registrationParamsType) =>
      instance.post(`auth/register`, data),
   forgot: (data: forgotParamsType) =>
      instance.post<forgotResponseType>(`auth/forgot`, data),
   sendNewPassword: (data: sendNewPasswordParamsType) =>
      instance.post<sendNewPasswordResponseType>(`auth/set-new-password`, data),
}
