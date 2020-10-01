import React from 'react'
import classes from './NewPassword.module.scss'
import {Button, Input} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import {useParams, Redirect} from 'react-router-dom'
import {LOGIN} from '../../routes'
import {sendNewPassword} from '../../store/restorePasswordReducer/restorePasswordAction'
import {AppRootStateType} from '../../store/store'
import * as Yup from 'yup'
import {useFormik} from 'formik'

const validationSchema = Yup.object({
   password: Yup.string()
      .required('Empty field')
      .min(8, 'Must be 8 characters or less'),
   repeatPassword: Yup.string()
      .required('Empty field')
      .min(8, 'Must be 8 characters or less'),
})

const NewPassword = () => {

   const dispatch = useDispatch()
   const {token} = useParams()
   const success = useSelector<AppRootStateType, boolean>(state => state.restorePassword.success)
   const formik = useFormik({
      initialValues: {
         password: '',
         repeatPassword: '',
      },
      validationSchema,
      onSubmit: values => {
         dispatch(sendNewPassword(values.password, token))
      },
   })

   if (success) {
      return <Redirect to={LOGIN}/>
   }

   return (
      <div className={classes.page}>
         <h1>New password</h1>
         <form onSubmit={formik.handleSubmit}>

            <div className={classes.formItem}>
               <Input type={'password'}
                      inputTitle={'Password'}
                      error={formik.touched.password ? formik.errors.password : ''}
                      {...formik.getFieldProps('password')}
               />
            </div>

            <div className={classes.formItem}>
               <Input type={'password'}
                      inputTitle={'Repeat password'}
                      error={formik.touched.repeatPassword ? formik.errors.repeatPassword : ''}
                      {...formik.getFieldProps('repeatPassword')}
               />
            </div>

            <div className={classes.formItem}>
               <Button type={'submit'}
                       disabled={
                          !!formik.errors.password ||
                          !!formik.errors.repeatPassword ||
                          formik.values.password !== formik.values.repeatPassword
                       }>Send</Button>
            </div>

         </form>
      </div>
   )
}

export default React.memo(NewPassword)
