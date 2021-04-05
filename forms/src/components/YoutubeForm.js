import React from 'react';
import {  Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError  from './TextError';

const YoutubeForm = () => {

  const initialValues = {
    name: '',
    email: '',
    channel: '', 
    comment: '',
    address: ''
  }
  const onSubmit = values => {
    // console.log("Form data", values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string().email("Invalid email format").required("email is required"),
    channel: Yup.string().required('Channel is required'),
    comment: Yup.string().required('Comment is required'),
  })

  return (

    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
          />
         <ErrorMessage name="name" component= {TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
          />
          <ErrorMessage name="email" component= {TextError}/>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
          />
          <ErrorMessage name="channel" component= {TextError}/>
        </div>
        <div className="form-control">
          <label htmlFor="comment">Comment</label>
          <Field id="comment" name="comment" as="textarea" />
          <ErrorMessage name="comment" component= {TextError}/>
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field id="address" name="address" >
            { 
              (props) => {
               const {field, meta} = props
                console.log(props)
                return <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error? <div>{meta.error}</div>: null}
                </div>
              }
            } 
          </Field>
        </div>
        <button>Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm;
