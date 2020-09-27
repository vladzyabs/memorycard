import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import classes from './Button.module.scss'

type ButtonPropsType
   = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
   & {}

const Button = (props: ButtonPropsType) => {
   const {...restProps} = props
   return (
      <button {...restProps} className={classes.button}/>
   )
}

export default Button
