import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://neko-back.herokuapp.com/2.0/',
})

export const authAPI = {
   me: () => instance.post(`auth/me`),
   login: (data: any) => instance.post(`auth/login`, data),
   registration: (data: any) => instance.post(`auth/register`, data),
   forgot: (data: any) => instance.post(`auth/forgot`, data),
   sendNewPassword: (data: any) => instance.post(`auth/set-new-password`, data),
}
