import React, {ChangeEvent} from 'react'
import {Button, Input} from '../../components'
import {useDispatch} from 'react-redux'
import {login} from '../../store/loginReducer/loginAction'

const Login = () => {

   const dispatch = useDispatch()

   const [email, setEmail] = React.useState<string>('')
   const [password, setPassword] = React.useState<string>('')
   const [rememberMe, setRememberMe] = React.useState<boolean>(false)

   const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
   const handlePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
   const handleRememberMe = (e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)

   const onClickSend = () => {
      dispatch(login(email, password, rememberMe))
   }

   return (
      <div>
         <h1>Login</h1>
         <form>
            <Input type={'text'} inputTitle={'Email: '} value={email} onChange={handleEmail}/>
            <Input type="password" inputTitle={'Password: '} value={password} onChange={handlePassword}/>
            <input type="checkbox" checked={rememberMe} onChange={handleRememberMe}/>
            <br/>
            <Button onClick={onClickSend}>Send</Button>
         </form>
      </div>
   )
}

export default Login
