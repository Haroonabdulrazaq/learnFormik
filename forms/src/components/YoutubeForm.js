import React from 'react';
import {  Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import TextError  from './TextError';

const YoutubeForm = () => {

  const initialValues = {
    name: '',
    email: '',
    channel: '', 
    comment: '',
    address: '',
    socials: {
      facebook: '',
      twitter:'',
    },
    phoneNumbers: ['',''],
    phNumbers: ['']
  }
  const onSubmit = values => {
    console.log("Form data", values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string().email("Invalid email format").required("email is required"),
    channel: Yup.string().required('Channel is required'),
    comment: Yup.string().required('Comment is required'),
    address: Yup.string().required('Address is required'),
  })
  const validateComments = value => {
    let error
    if(!value) {
      error = "Comment is required"
    }
    return error;
  }

  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}>
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
          <ErrorMessage name="email">
            {
              (errorMsg)=>{
                return <div className="error">{errorMsg}</div>
              }
            }
          </ErrorMessage>
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
          <Field id="comment" name="comment" as="textarea" validate={validateComments} />
          <ErrorMessage name="comment" component= {TextError}/>
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field id="address" name="address" >
            { 
              (props) => {
               const {field, meta} = props
                return <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error? <div>{meta.error}</div>: null}
                </div>
              }
            } 
          </Field>
          <ErrorMessage name="address" component= {TextError}/>
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" id="facebook" name="socials.facebook" />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <Field type="text" id="twitter" name="socials.twitter" />
        </div>
        <div className="form-control">
          <label htmlFor="first-num">First Number</label>
          <Field type="text" id="first-num" name="phoneNumbers[0]" />
        </div>
        <div className="form-control">
          <label htmlFor="second-num">Second Number</label>
          <Field type="text" id="second-num" name="phoneNumbers[1]" />
        </div>
        {/* Dynamic FieldArray */}
        <div className="form-control">
        <label htmlFor="phNumbers">List of Phone Numbers</label>
          <FieldArray type="text" id="phNumbers" name="phNumbers">
            {
              (fieldArrayProps)=>{
                const {push, remove, form} = fieldArrayProps;
                console.log("Form Error", form.errors);
                const {phNumbers} = form.values
                return <div>
                  {phNumbers.map((phNumber, index) => (
                    <div key={index}>
                      <Field name={`phNumbers[${index}]`} />
                     {index > 0 && <button type="button" onClick={()=> remove(index)}>{' '} - {' '}</button>}
                      <button type="button"  onClick={()=> push('')}>+</button>
                    </div>
                  ))}
                </div>
              }
            }
          </FieldArray>
        </div>
        <button>Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm;
