const initialState = {}

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      default:
         return state
   }
}

export default authReducer
