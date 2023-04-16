import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SignUp = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {
      try {
        // Submit the form data to the backend
        const response = await axios.post('http://127.0.0.1:8000/api/register/', values);
        setSuccessMessage('Registration successful!');
        setErrorMessage('');
        console.log(response.data);
      } catch (error) {
        setErrorMessage('Registration failed. Please try again.');
        setSuccessMessage('');
        console.error(error);
      }
    },
  });

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      {successMessage && <div className="bg-green-200 text-green-700 p-2 rounded mb-4">{successMessage}</div>}
      {errorMessage && <div className="bg-red-200 text-red-700 p-2 rounded mb-4">{errorMessage}</div>}
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            className="w-full px-3 py-2 border rounded"
          />
          {formik.errors.username && formik.touched.username && <div className="text-red-500">{formik.errors.username}</div>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full px-3 py-2 border rounded"
          />
          {formik.errors.email && formik.touched.email && <div className="text-red-500">{formik.errors.email}</div>}
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="w-full px-3 py-2 border rounded"
          />
          {formik.errors.password && formik.touched.password && <div className="text-red-500">{formik.errors.password}</div>}
        </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</button>
    </form>
  </div>
  );
};

export default SignUp;
