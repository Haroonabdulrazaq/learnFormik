import React from 'react';
import { useFormik } from 'formik';
const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: ''
    }, 
    onSubmit: values => {
      // console.log("Form data", values)
    },
    validate: values => {
      let errors = {}
      if(!values.name){
        errors.name = "Required"
      }
      if(!values.email){
        errors.email = "Required"
      }
      if(!values.channel){
        errors.channel = "Required"
      }
      return errors
    }
  });
  const { handleChange, values, handleSubmit, errors, handleBlur, touched } = formik
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
            onChange={handleChange}
            onBlur ={handleBlur}
            value={values.name}
          />
         { touched.name && errors.name?  <span className="error"> {errors.name} </span>: null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            onBlur ={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email?<span className="error"> {errors.email}</span> : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={handleChange}
            onBlur ={handleBlur}
            value={values.channel}
          />
          {touched.channel && errors.channel?<span className="error"> {errors.channel} </span> : null}
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm;
