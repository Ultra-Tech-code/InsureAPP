import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminRegSetup = ({ onNext, onPrev }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate()

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
      return false
    } else {
      setEmailError('');
      return true
    }
  };

  const validatePassword = () => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
      );
      return false
    } else {
      setPasswordError('');
      return true;
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      return false
    } else {
      setConfirmPasswordError('');
      return true
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleTogglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleBack = (event) => {
    event.preventDefault();

    //GO Back
    //navigate('/auth/admin/registration/'); 
    onPrev()
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    validateEmail();
    validatePassword();
    validateConfirmPassword();

    // Check if there are no validation errors
    if (!emailError && !passwordError && !confirmPasswordError && confirmPassword !== "") {

      // Navigate to the next page
      //navigate('/auth/admin/registration/teaminvite'); 
      onNext({
        email,
        password,
      })

    }

  };

  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
      {/* Left Column */}
      <div className="lg:w-[50%] h-screen flex flex-col px-20 pt-3">
        {/* Logo */}
        <a href="index.html">
          <img
            src="https://tinyurl.com/3wuh45ve"
            alt="logo"
            className="mb-2 w-16 h-12 lg:w-24 lg:h-14"
          />
        </a>
        {/* Header Section */}
        <div className="mb-14 text-left">
          <h1 className="font-bold mb-6 text-2xl lg:text-4xl">
            Account <span className="text-red-500">setup</span>
          </h1>
        </div>
        {/* Form Area */}
        <form name="signUpData" onSubmit={handleSubmit} className="flex flex-col w-full">
          {/* Company's email */}
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            placeholder="Company's email"
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${emailError ? 'border-red-500' : ''
              }`}
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              placeholder="Password"
              className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${passwordError ? 'border-red-500' : ''
                }`}
            />
            <span
              className="absolute right-4 top-2 cursor-pointer"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </span>
          </div>
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

          {/* Confirm Password */}
          <div className='relative'>
            <input
              type={showPassword1 ? 'text' : 'password'}
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={validateConfirmPassword}
              placeholder="Confirm password"
              className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${confirmPasswordError ? 'border-red-500' : ''
                }`}
            />
            <span
              className="absolute right-4 top-2 cursor-pointer"
              onClick={handleTogglePassword1}
            >
              {showPassword1 ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </span>
          </div>
          {confirmPasswordError && (
            <p className="text-red-500 text-sm">{confirmPasswordError}</p>
          )}

          {/* Back and Continue button */}
          <div className="flex justify-between flex-col lg:flex-row w-full mt-6">
            <button
              onClick={handleBack}
              type="button"
              className="w-full lg:w-[25%] h-[40px] bg-white text-gray-500 font-bold border-orange-400 border-2 py-2 px-4 rounded-md hover:bg-orange-400 mb-2 hover:text-white"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="sm:w-full lg:w-[25%] h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
      {/* Right Column (image) */}
      <div
        className="flex-1 bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage:
            'url("https://euvola.sirv.com/Images/Multiethnic%20leaders%20greeting%20each%20other%20in%20city.png")',
        }}
      ></div>
    </main>
  );
};
