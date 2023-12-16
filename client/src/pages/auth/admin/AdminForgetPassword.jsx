import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BUTTON from "../../../components/molecules/global/Button";
import  Axios  from 'axios';
import Swal from "sweetalert2";


const AdminForgetPassword = () => {
  const [email, setEmail] = useState({email: ''});
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const baseURL = process.env.REACT_APP_BASE_URL;
  const forgetPasswordURL = `${baseURL}/auth/forgot-password`

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Validate if email is not empty
    if (!email.email) {
      setError('Please enter a valid email address or username.');
      setSuccessMessage('');
    } else {
      // Clear any previous error
      setError('');

      await Axios.post(forgetPasswordURL, email).then((res) => {
        console.log("clickeeeeed")
        console.log("email", email)
        console.log("res", res)
        if (res.status === 204) {
        Swal.fire({
            title: 'Success!',
            text: 'Paaword reset information sent to your email!!!!!',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
      }).catch((err) => {
        console.log(err, "err")
         Swal.fire({
            title: 'Error!',
            text: 'Invalid Email!!!',
            icon: 'error',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              setEmail({email: ''})
            }
          })
      })
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <form className="rounded-md w-[500px] p-5" onSubmit={handleResetPassword} >
        <div className="logo flex justify-center items-center">
          <img src="https://tinyurl.com/3wuh45ve" alt="INSURE LOGO" />
        </div>
        <div className="flex flex-col w-full my-2">
          {successMessage && (
            <div className="w-full py-3 px-5 border border-green-500 border-l-4 border-l-[#34c759] mb-5">
              {successMessage}
            </div>
          )}
          <div className="w-full py-3 px-5 border border-gray-900 border-l-4 border-l-[#e76927] mb-5">
            Please, enter your username or email address. You will receive an
            email message with instructions on how to reset your password.
          </div>
          <input
            type="text"
            className={`px-2 py-3 my-2 rounded-[3px] border ${
              error ? 'border-red-500' : 'border-blue-500'
            } focus:outline-none`}
            placeholder="Enter username or email address"
            value={email.email}
            onChange={(e) => setEmail({email: e.target.value})}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        {/* fixed this button with */}
        {/* <BUTTON description="Get new password" width="w-full"    /> */}
        <button type="button" onClick={handleResetPassword} description="Get new password" width="w-full" className='bg-[#e76927] text-white px-6 py-3 rounded-[8px] text-bold my-2 hover:bg-[#ffa074] hover:text-[#ffffff] align-self-center text-center'>Get new password</button>
            <br />
        <Link to="/login" className="text-[12px] mt-5 pl-2">
          Login
        </Link>
      </form>
    </main>
  );
};

export default AdminForgetPassword;
