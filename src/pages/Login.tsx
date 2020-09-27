import React from 'react'
import {Input} from '../components'

const Login = () => {
   return (
      <div>
         <form>
            <Input inputTitle={'Email: '}/>
            <Input inputTitle={'Password: '}/>
            <button>Send</button>
         </form>
      </div>
   )
}

export default Login
