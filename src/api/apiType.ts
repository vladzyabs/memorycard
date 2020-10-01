// params types
export type registrationParamsType = {
   email: string
   password: string
}

export type loginParamsType = {
   email: string
   password: string
   rememberMe: boolean
}

export type forgotParamsType = {
   email: string
   from: string
   message: string
}

export type sendNewPasswordParamsType = {
   password: string
   resetPasswordToken: string
}

// response types
export type registrationResponseType = {
   addedUser: {
      created: string
      email: string
      isAdmin: boolean
      name: string
      publicCardPacksCount: number
      rememberMe: string
      updated: string
      verified: boolean
      __v: number
      _id: string
   }
}

export type loginResponseType = {
   _id: string
   email: string
   name: string
   avatar?: string
   publicCardPacksCount: number // количество колод

   created: string
   updated: string
   isAdmin: boolean;
   verified: boolean; // подтвердил ли почту
   rememberMe: boolean;

   error: string;
}

export type forgotResponseType = {
   answer: boolean
   html: boolean
   info: string
   success: boolean
}

export type sendNewPasswordResponseType = {
   info: string
}
