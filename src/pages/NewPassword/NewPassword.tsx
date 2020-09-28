import React, {ChangeEvent} from 'react'
import {Button, Input} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import {useParams, Redirect} from 'react-router-dom'
import {LOGIN} from '../../routes'
import {sendNewPassword} from '../../store/restorePasswordReducer/restorePasswordAction'
import {AppRootStateType} from '../../store/store'

const NewPassword = () => {

   const dispatch = useDispatch()
   const {token} = useParams()
   const success = useSelector<AppRootStateType, boolean>(state => state.restorePassword.success)

   const [primaryPassword, setPrimaryPassword] = React.useState<string>('')
   const [secondaryPassword, setSecondaryPassword] = React.useState<string>('')

   const handlePrimaryPassword = (e: ChangeEvent<HTMLInputElement>) => setPrimaryPassword(e.target.value)
   const handleSecondaryPassword = (e: ChangeEvent<HTMLInputElement>) => setSecondaryPassword(e.target.value)
   const onClickSend = () => dispatch(sendNewPassword(primaryPassword, token))

   if (success) {
      return <Redirect to={LOGIN}/>
   }

   return (
      <div>
         <h1>New password</h1>
         <Input inputTitle={'Primary password'} value={primaryPassword} onChange={handlePrimaryPassword}/>
         <Input inputTitle={'Secondary password'} value={secondaryPassword} onChange={handleSecondaryPassword}/>
         <Button onClick={onClickSend}>Send</Button>
      </div>
   )
}

export default NewPassword
