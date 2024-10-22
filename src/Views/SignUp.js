import React, { useState } from 'react';
import { SignUpUser } from "../Config/Firebase";
import "./SignUp.css";
import Abab from "../Images/Abab.jpg";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await SignUpUser({ email, password, fullName, age });
      alert("Successfully signed up");
      // Reset form fields
      setFullName('');
      setAge('');
      setEmail('');
      setPassword('');
      console.log("Form fields reset");
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 p-6 bg-[#32a897] rounded-lg">
        <h1 className='text-gray-800 text-4xl mb-10 ml-[220px]'>Sign Up</h1>
        <div className="flex flex-col gap-4 w-full max-w-sm ml-[100px]">
          <input
            type="text"
            placeholder="Full Name"
            className='px-4 py-2 rounded-lg border border-gray-300'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Age"
            className='px-4 py-2 rounded-lg border border-gray-300'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className='px-4 py-2 rounded-lg border border-gray-300'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className='px-4 py-2 rounded-lg border border-gray-300'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSignUp}
            className='bg-green-500 px-6 py-1 text-white text-2xl rounded-lg'
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img src={Abab} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} alt="Abab" />
      </div>
    </div>
  );
};

export default SignUp;
