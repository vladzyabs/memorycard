import React from 'react'
import classes from './Registration.module.scss'
import {Button, Input} from '../../components'
import {useDispatch} from 'react-redux'
import {registration} from '../../store/registrationReducer/registrationAction'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
   email: Yup.string()
      .required('Empty field')
      .email('Invalid email address'),
   password: Yup.string()
      .required('Empty field')
      .min(8, 'Must be 8 characters or less'),
   repeatPassword: Yup.string()
      .required('Empty field')
      .min(8, 'Must be 8 characters or less'),
})

const Registration = () => {

   const dispatch = useDispatch()
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
         repeatPassword: '',
      },
      validationSchema,
      onSubmit: values => {
         dispatch(registration(values.email, values.password))
      },
   })

   return (
      <div className={classes.page}>
         <h1>Registration</h1>
         <form onSubmit={formik.handleSubmit}>

            <div className={classes.formItem}>
               <Input type={'text'}
                      inputTitle={'Email:'}
                      error={formik.touched.email ? formik.errors.email : ''}
                      {...formik.getFieldProps('email')}
               />
            </div>

            <div className={classes.formItem}>
               <Input type={'password'}
                      inputTitle={'Password:'}
                      error={formik.touched.password ? formik.errors.password : ''}
                      {...formik.getFieldProps('password')}
               />
            </div>

            <div className={classes.formItem}>
               <Input type={'password'}
                      inputTitle={'Repeat password:'}
                      error={formik.touched.repeatPassword ? formik.errors.repeatPassword : ''}
                      {...formik.getFieldProps('repeatPassword')}
               />
            </div>

            <div className={classes.formItem}>
               <Button type={'submit'}
                       disabled={
                          !!formik.errors.email ||
                          !!formik.errors.password ||
                          !!formik.errors.repeatPassword ||
                          formik.values.password !== formik.values.repeatPassword}
               >Send</Button>
            </div>

         </form>
      </div>
   )
}

export default React.memo(Registration)
