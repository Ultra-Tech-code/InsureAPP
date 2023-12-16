import React from "react";
import { useState } from "react";

export const AgentRegistration = ({ onNext }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to the next page
    // navigate('/auth/admin/registration/contact');
    onNext({
      email,
      password,
    });
  };
  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
      {/* Left Column */}
      <div
        className="flex-1 bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: 'url("https://tinyurl.com/29p8xwx3")' }}
      ></div>

      {/* Right Column (image) */}
      <div className="sm:px-20 lg:w-[50%] h-screen flex flex-col px-8">
        {/* Logo */}
        <a href="index.html">
          <img
            src="https://tinyurl.com/3wuh45ve"
            alt="logo"
            className="mb-8 w-16 mt-20 h-12 lg:w-24 lg:h-14"
          />
        </a>
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="font-bold mb-4 text-2xl lg:text-4xl">
            Let's <span className="text-red-500">get</span> you started
          </h1>
        </div>
        {/* Form Area */}
        <form
          name="signUpData"
          onSubmit={handleSubmit}
          className="flex flex-col w-full"
        >
          {/* agent email */}
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter email address"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500"
          />

          {/* Agent password */}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500"
          />
          {/* Proceed button */}
          <button
            type="submit"
            className="w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
            id="register-button"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
};
