import React from 'react'

export const ForgetPassword = () => {
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
          <h1 className="font-bold mb-4 text-2xl lg:text-4xl">
            Forget <span className="text-red-500"> Password</span> 
          </h1>
          <div className='mt-[-20px]'>No worries, we’ll send you reset instructions.</div>
        </div>
        {/* Form Area */}
        <form name="forgetPassword" 
        // onSubmit={(event) => signUP(event)} 
        className="flex flex-col w-full">
          {/* agent email */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500"
          />
          
          {/* Proceed button */}
          <button
            type="submit"
            className="w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
            id="register-button"
          >
            Confirm
          </button>
          <div>
            <a href="/">Back to Log in</a>
          </div>
        </form>
      </div>
    </main>
  )
}
