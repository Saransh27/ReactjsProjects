import React from 'react';
import Yup from 'yup';
import { withFormik } from 'formik';

const formikEnhancer = withFormik({
  mapPropsToValues: props => ({ firstName:'', lastName:'',  email: '', mobile:''}),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
      firstName: Yup.string().required('FirstName is required'),
      lastName: Yup.string().required(),
      mobile: Yup.number().required('email is required').positive("can't enter a negative number").lessThan(11,'max 10 digits are allowed').moreThan(9,'atleast 10 digit')
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'Registration', // helps with React DevTools
});

const Registration = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="firstName">First Name</label>
    <input id="firstName"
        type="text"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur} 
        class="form-control"
         placeholder="FirstName"/>
  </div>
  {errors.firstName &&
        touched.firstName &&
        <div className="input-feedback">
          {errors.firstName}
        </div>}
<div className="form-group">
    <label htmlFor="email">Email address</label>
    <input id="email"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur} 
        class="form-control"
         placeholder="Email"/>
  </div>


      {errors.email &&
        touched.email &&
        <div className="input-feedback">
          {errors.email}
        </div>}

        <div className="form-group">
    <label htmlFor="mobile">Mobile</label>
    <input id="mobile"
        type="text"
        value={values.mobile}
        onChange={handleChange}
        onBlur={handleBlur} 
        class="form-control"
         placeholder="mobile"/>
  </div>
  {errors.mobile &&
        touched.mobile &&
        <div className="input-feedback">
          {errors.mobile}
        </div>}
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}>
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default formikEnhancer(Registration);