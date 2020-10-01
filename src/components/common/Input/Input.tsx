import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import classes from './Input.module.scss'
import {faEye, faEyeSlash, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

type InputPropsType
   = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
   & {
   type: 'text' | 'password'
   inputTitle?: string
   error?: string
}

const Input = (props: InputPropsType) => {
   const [showPassword, setShowPassword] = React.useState<boolean>(false)

   const handleShowPassword = () => {
      setShowPassword(prevState => !prevState)
   }

   const {inputTitle, error, ...restProps} = props
   const type = props.type === 'password' && !showPassword ? 'password' : 'text'
   return (
      <label className={classes.label}>
         {inputTitle && <span className={classes.label}>{inputTitle}</span>}
         <input {...restProps} type={type} className={classes.input}/>
         {
            type === 'password' &&
            <div className={classes.showPassword} onClick={handleShowPassword}>
                <FontAwesomeIcon icon={faEye}/>
            </div>
         }
         {
            type === 'text' && showPassword &&
            <div className={classes.showPassword} onClick={handleShowPassword}>
                <FontAwesomeIcon icon={faEyeSlash}/>
            </div>
         }
         {
            error &&
            <div className={classes.error}>
                <FontAwesomeIcon icon={faExclamationCircle}/>
                <div className={classes.errorMessage}>{error}</div>
            </div>
         }

      </label>
   )
}

export default React.memo(Input)


