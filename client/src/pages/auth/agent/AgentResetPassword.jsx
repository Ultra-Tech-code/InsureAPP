import React, { useState } from 'react';

const PasswordInput = ({ placeholder, name, value, onChange, error, errorMessage }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
//Adding the eye icon
  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 pr-10 focus:border-blue-500 ${
          error ? 'border-red-500' : ''
        }`}
      />
      <div
        className="absolute inset-y-4 top-1 right-0 pr-3 flex items-center cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
    </div>
  );
};

export const AgentResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState({
    required: false,
    mismatch: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if passwords are empty
    if (!newPassword) {
      setPasswordError({
        required: true,
        mismatch: false,
      });
    
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setPasswordError({
        required: false,
        mismatch: true,
      });
      
    }


    // Reset passwordError state
    setTimeout(() => {
        setPasswordError({
            required: false,
            mismatch: false,
          });
    }, 2000);
    
  };

  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
      {/* Left Column */}
      <div
        className="flex-1 bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: 'url("https://tinyurl.com/bdzfvt2y")' }}
      ></div>

      {/* Right Column (image) */}
      <div className="sm:px-20 lg:w-[50%] h-screen flex flex-col px-8">
        {/* Logo */}
        <a href="index.html">
          <img src="https://tinyurl.com/3wuh45ve" alt="logo" className="mb-8 w-16 h-12 mt-20 lg:w-24 lg:h-14" />
        </a>
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="font-bold mb-2 text-2xl lg:text-4xl">
            Forget <span className="text-red-500"> Password</span>
          </h1>
          <div className="text-sm">Must be at least 8 characters.</div>
        </div>
        {/* Form Area */}
        <form name="setPassword" onSubmit={handleSubmit} className="flex flex-col w-full">
          {/* agent new password */}
          <div>
            <PasswordInput
              name="newPassword"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              error={passwordError.required || passwordError.mismatch}
              errorMessage={
                passwordError.required
                  ? 'Password is required'
                  : ''
              }
            />
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={passwordError.mismatch}
              errorMessage={
                passwordError.required
                  ? 'Password is required'
                  : 
                passwordError.mismatch ? 'Passwords do not match' : ''
              }
            />
          </div>

          {/* Proceed button */}
          <button
            type="submit"
            className="w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
            id="register-button"
          >
            Set Password
          </button>
          <div>
            <a href="/">Back to Log in</a>
          </div>
        </form>
      </div>
    </main>
  );
};
