import {APP_SET_ERROR, APP_SET_INITIALIZED, APP_SET_STATUS, RequestStatusType} from './appType'

export const appSetStatus = (status: RequestStatusType) => ({
   type: APP_SET_STATUS,
   status,
} as const)

export const appSetError = (error: null | string) => ({
   type: APP_SET_ERROR,
   error,
} as const)

export const appSetInitialized = (initialized: boolean) => ({
   type: APP_SET_INITIALIZED,
   initialized,
} as const)

export type ActionType
   = ReturnType<typeof appSetStatus>
   | ReturnType<typeof appSetError>
   | ReturnType<typeof appSetInitialized>
