import React from 'react'
import classes from './Login.module.scss'
import {Button, Input} from '../../components'
import {useDispatch} from 'react-redux'
import {login} from '../../store/loginReducer/loginAction'
import * as Yup from 'yup'
import {useFormik} from 'formik'

const validationSchema = Yup.object({
   email: Yup.string()
      .required('Empty field')
      .email('Invalid email address'),
   password: Yup.string()
      .required('Empty field')
      .min(8, 'Must be 8 characters or less'),
})

const Login = () => {

   const dispatch = useDispatch()
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
         rememberMe: false,
      },
      validationSchema,
      onSubmit: values => {
         console.log(values)
         // dispatch(login(values))
      },
   })

   return (
      <div className={classes.page}>
         <h1>Login</h1>
         <form onSubmit={formik.handleSubmit}>

            <div className={classes.formItem}>
               <Input type={'text'}
                      inputTitle={'Email: '}
                      error={formik.touched.email ? formik.errors.email : ''}
                      {...formik.getFieldProps('email')}
               />
            </div>

            <div className={classes.formItem}>
               <Input type="password"
                      inputTitle={'Password: '}
                      error={formik.touched.password ? formik.errors.password : ''}
                      {...formik.getFieldProps('password')}
               />
            </div>

            <div className={classes.formItem}>
               <input type="checkbox"
                      {...formik.getFieldProps('rememberMe')}
               />
            </div>

            <div className={classes.formItem}>
               <Button type={'submit'}
                       disabled={
                          !!formik.errors.password ||
                          !!formik.errors.email}
               >Send</Button>
            </div>

         </form>
      </div>
   )
}

export default Login
