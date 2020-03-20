import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './index.css';
import { useUser } from '../../components/User';
  
const initialFormValues = { username: '', password: '' };

export default () => {
  const { login } = useUser();
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await login(values.username, values.password);
      setSubmitting(false);
    } catch (err) {
      setErrors({ password: err.message });
      setSubmitting(false);
    }
  };

  return (     
    <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
      {({ isSubmitting, isValid }) => (
        <Form>
          <Field type="username" name="username" />
          <ErrorMessage name="username" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting || !isValid}>Login</button>
        </Form>
      )}
    </Formik>
  );
};
