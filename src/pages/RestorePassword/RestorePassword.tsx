import React, {ChangeEvent} from 'react'
import {Button, Input} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import {getEmailConfirmation} from '../../store/restorePasswordReducer/restorePasswordAction'
import {AppRootStateType} from '../../store/store'

const RestorePassword = () => {

   const dispatch = useDispatch()
   const selectedEmail = useSelector<AppRootStateType>(state => state.restorePassword.selectedEmail)
   const [email, setEmail] = React.useState<string>('')

   const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)

   const onClickSend = () => {
      dispatch(getEmailConfirmation(email))
   }

   return (
      <div>
         <h1>Restore password</h1>

         {
            selectedEmail && <p><a href={`mailto:${selectedEmail}`}>Email</a></p>
         }

         <Input inputTitle={'Email'} value={email} onChange={handleEmail}/>
         <Button onClick={onClickSend}>Send</Button>
      </div>
   )
}

export default RestorePassword
