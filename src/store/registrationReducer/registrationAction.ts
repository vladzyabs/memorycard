const initialState = {}

type InitialStateType = typeof initialState

const registrationReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      default:
         return state
   }
}

export default registrationReducer
