import Axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";

export const AgentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  

  const navigate = useNavigate();
  
  const baseURL = process.env.REACT_APP_BASE_URL;
  const loginURL = `${baseURL}/auth/login?type=agent`;

  const validateEmail = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    validateEmail();
    validatePassword();

    await Axios.post(loginURL, { email, password }).then((res) => {
      //login(res.data.data.tokens.access.token, res.data.data.user.companyProfile.id, "agent" );
      if (res.status === 200) {
        setIsLoading(true)
        Swal.fire({
          title: 'Success!',
          text: 'Login succesfull!!!!!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/dashboard/agent')
          }
        })
      } else {
        setIsLoading(true)
        Swal.fire({
          title: 'Error!',
          text: 'Login failed!!!!!',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }).catch((err) => {
      setIsLoading(true)
      console.log(err)
      Swal.fire({
        title: 'Error!',
        text: 'Login failed!!!!!',
        icon: 'error',
        confirmButtonText: 'OK'
      }).then((result) => {
        setIsLoading(true)
        if (result.isConfirmed) {
          setEmail("")
          setPassword("")
        }
      })
    })
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
            className="mb-2 w-16 h-12 mt-20 lg:w-24 lg:h-14"
          />
        </a>
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="font-bold mb-4 text-2xl lg:text-4xl">
            Welcome <span className="text-red-500"> Back </span> Agent
          </h1>
        </div>
        {/* Form Area */}
        <form
          name="Login"
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
            onBlur={validateEmail}
            placeholder="Enter email address"
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${
              emailError ? "border-red-500" : ""
            }`}
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            placeholder="Enter password"
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${
              passwordError ? "border-red-500" : ""
            }`}
          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}

          {/* Proceed button */}
          <button
            type="submit"
            className="w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
            id="register-button"
            disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Login'}
          </button>
          <div>
            <a href="/">
              <b>Forget Password?</b>
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};
