import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const YoutubeForm = () => {

  const initialValues = {
    name: '',
    email: '',
    channel: ''
  }
  const onSubmit = values => {
    // console.log("Form data", values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string().email("Invalid email format").required("email is required"),
    channel: Yup.string().required('Channel is required')
  })
  const formik = useFormik({
    initialValues, 
    onSubmit,
    validationSchema,
  });
  const {  handleSubmit, errors, touched } = formik
  console.log("Visited Fields", touched)
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps('name')}
          />
         { touched.name && errors.name?  <span className="error"> {errors.name} </span>: null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps('email')}
          />
          {touched.email && errors.email?<span className="error"> {errors.email}</span> : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...formik.getFieldProps('channel')}
          />
          {touched.channel && errors.channel?<span className="error"> {errors.channel} </span> : null}
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm;
