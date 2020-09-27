const initialState = {}

type InitialStateType = typeof initialState

const loginReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      default:
         return state
   }
}

export default loginReducer
