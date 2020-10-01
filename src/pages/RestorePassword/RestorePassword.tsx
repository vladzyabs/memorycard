import React from 'react'
import classes from './RestorePassword.module.scss'
import {Button, Input} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import {getEmailConfirmation} from '../../store/restorePasswordReducer/restorePasswordAction'
import {AppRootStateType} from '../../store/store'
import * as Yup from 'yup'
import {useFormik} from 'formik'

const validationSchema = Yup.object({
   email: Yup.string()
      .required('Empty field')
      .email('Invalid email address'),
})

const RestorePassword = () => {

   const dispatch = useDispatch()
   const selectedEmail = useSelector<AppRootStateType, string>(state => state.restorePassword.selectedEmail)
   const formik = useFormik({
      initialValues: {
         email: '',
      },
      validationSchema,
      onSubmit: values => {
         dispatch(getEmailConfirmation(values.email))
      },
   })

   return (
      <div className={classes.page}>
         <h1>Restore password</h1>

         {
            selectedEmail && <p className={classes.successMessage}>
                Check your email:{' '}
                <a href={`mailto:${selectedEmail}`}>{selectedEmail}</a>{' '}
                and follow the link in there
            </p>
         }

         <form onSubmit={formik.handleSubmit}>

            <div className={classes.formItem}>
               <Input type={'text'}
                      inputTitle={'Email:'}
                      error={formik.touched.email ? formik.errors.email : ''}
                      {...formik.getFieldProps('email')}
               />
            </div>

            <div className={classes.formItem}>
               <Button type={'submit'}
                       disabled={!!formik.errors.email}
               >Send</Button>
            </div>

         </form>
      </div>
   )
}

export default React.memo(RestorePassword)
