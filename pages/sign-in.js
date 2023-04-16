// pages/sign-in.js

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
        username,
        password,
      });
      if (response.status === 200) {
        // Store the authentication token or session information
        localStorage.setItem('authToken', response.data.access);

        // Redirect to the agent profile or another page after successful sign-in
        router.push('/agent-profile');
      }
    } catch (error) {
      setErrorMessage('Sign-in failed. Please check your credentials.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <div className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-3 py-2 border rounded"
        />
        <button onClick={handleSignIn} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">Sign In</button>
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default SignIn;
