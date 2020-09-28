import React from 'react'
import {Button, Input} from '../../components'
import {useDispatch} from 'react-redux'
import {registration} from '../../store/registrationReducer/registrationAction'

const Registration = () => {

   const dispatch = useDispatch()

   const onClickSend = () => {
      dispatch(registration('vladzyaba@gmail.com', '12345qwerty'))
   }

   return (
      <div>
         <h1>Registration</h1>
         <form>
            <Input inputTitle={"Email: "}/>
            <Input inputTitle={"Password: "}/>
            <Input inputTitle={"Repeat password: "}/>
            <Button onClick={onClickSend}>Send</Button>
         </form>
      </div>
   )
}

export default Registration
