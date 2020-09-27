import React, {ChangeEvent} from 'react'
import {Button, Input} from '../../components'
import {useDispatch} from 'react-redux'
import {getEmailConfirmation} from '../../store/restorePasswordReducer/restorePasswordAction'

const RestorePassword = () => {

   const dispatch = useDispatch()
   const [email, setEmail] = React.useState<string>('')

   const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)

   const onClickSend = () => {
      dispatch(getEmailConfirmation(email))
   }

   return (
      <div>
         <Input inputTitle={'Email'} value={email} onChange={handleEmail}/>
         <Button onClick={onClickSend}>Send</Button>
      </div>
   )
}

export default RestorePassword
