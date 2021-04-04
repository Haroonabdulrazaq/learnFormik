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
  const { handleChange, values, handleSubmit, errors } = formik
  console.log("Form errors", errors)
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} value={values.name}/>
          <span className="error">{errors.name && errors.name}</span>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} value={values.email}/>
          <span className="error">{errors.email && errors.email}</span>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" name="channel" onChange={handleChange} value={values.channel}/>
          <span className="error">{errors.channel && errors.channel}</span>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm;
