import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import classes from './Input.module.scss'

type InputPropsType
   = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
   & {
   inputTitle?: string
}

const Input = (props: InputPropsType) => {
   const {inputTitle, ...restProps} = props
   return (
      <label className={classes.label}>
         {inputTitle && <span>{inputTitle}</span>}
         <input type="text" className={classes.input} {...restProps}/>
      </label>
   )
}

export default Input
