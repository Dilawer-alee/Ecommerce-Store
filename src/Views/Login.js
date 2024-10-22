import React, { useState } from 'react';
import { LoginUser } from "../Config/Firebase";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = async () => {
    try {
      await LoginUser(email, password);
      alert('Successfully logged in');
      // navigate('dashboard');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Welcome</h1>

        <div className="relative mb-6">
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="absolute left-3 top-0 text-gray-500 pointer-events-none transition-all transform translate-y-3">Email</label>
          <i className="fa-solid fa-envelope absolute right-3 top-3 text-gray-400"></i>
        </div>

        <div className="relative mb-6">
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="absolute left-3 top-0 text-gray-500 pointer-events-none transition-all transform translate-y-3">Password</label>
          <i className="fa-solid fa-lock absolute right-3 top-3 text-gray-400"></i>
        </div>

        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <span className="text-blue-500 cursor-pointer">Forgot password?</span>
        </div>

        <button
          onClick={SignIn}
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Login
        </button>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account? <span className="text-blue-500 cursor-pointer">Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
