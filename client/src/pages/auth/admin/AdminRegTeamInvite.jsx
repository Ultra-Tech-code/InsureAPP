import Axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom';
import ActionButton from '../../../components/molecules/dashboard/ActionButton';

export const AdminRegTeamInvite = ({ onPrev }) => {
  const [email, setEmail] = useState('');
  // const [email2, setEmail2] = useState('');
  // const [email3, setEmail3] = useState('');
  const [emailError, setEmailError] = useState('');

  const location = useLocation();
  const formData = location.state?.formData || {};


  const baseURL = process.env.REACT_APP_BASE_URL
  const teamInviteURL = `${baseURL}/auth/Register?type=agent`

  console.log(formData, 'formdata on team invite')


  const agentData = {
    "companyProfileId": formData.user.companyProfile.id,
    "email": email,
    "role": "agent"
  }


  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('clicked here');

    if (emailError) {
    }
    await Axios.post(teamInviteURL, agentData).then(res =>{
             //swal fire for continue and cancel with sweet alert
             console.log(res, "res")
             if (res.status === 200) {
              Swal.fire({
                title: 'Success!',
                text: 'User Invited Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/dashboard/admin', { state: { formData } })
                }
              })
            } else {
              Swal.fire({
                title: 'Error!',
                text: 'User already Invited',
                icon: 'error',
                confirmButtonText: 'OK'
              })
            }
          }).catch((err) => {
            console.log(err)
            Swal.fire({
              title: 'Error!',
              text: 'Invitation error',
              icon: 'error',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.isConfirmed) {
                setEmail("")
             
              }
            })
          })
  };

  const handleBack = () => {
    //navigate('/auth/admin/registration/setup')
    onPrev()
  }

  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
      {/* Left Column */}
      <div className="lg:w-[50%] h-screen flex flex-col px-20 pt-3">
        {/* Logo */}
        <a href="index.html">
          <img
            src="https://tinyurl.com/3wuh45ve"
            alt="logo"
            className="mb-8 w-16 h-12 lg:w-24 lg:h-14"
          />
        </a>
        {/* Header Section */}
        <div className="mb-5 text-left">
          <div className="flex justify-between items-center">
            <h1 className="font-bold mb-4 text-xl lg:text-4xl">
              Invite <span className="text-red-500">agents</span>
            </h1>
            {/* <a href="/">Skip for later</a> */}
          </div>
          {/* <button
            type="button"
            className="sm:w-full lg:w-[30%] h-[40px] bg-orange-600 text-white py-2 px-1 rounded-md hover:bg-orange-400 mb-2"
          >
            + Add another
          </button> */}
        </div>
        {/* Form Area */}
        <form name="signUpData" className="flex flex-col w-full" onSubmit={handleSubmit}>
          {/* Email input fields */}
          <input
            type="email"
            name="email1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Add email address"
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${emailError ? 'border-red-500' : ''
              }`}
          />

          {/* <input
            type="email"
            name="email2"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)}
            placeholder="Add email address"
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${emailError ? 'border-red-500' : ''
              }`}
          /> */}

          {/* <input
            type="email"
            name="email3"
            value={email3}
            onChange={(e) => setEmail3(e.target.value)}
            placeholder="Add email address"
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-16 focus:border-blue-500 ${emailError ? 'border-red-500' : ''
              }`}
          /> */}

          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

          {/* Back and Proceed buttons */}
          <div className="flex justify-between flex-col lg:flex-row w-full mt-6">
            {/* <button
              onClick={handleBack}
              type="button"
              className="w-full lg:w-[25%] h-[40px] bg-white text-gray-500 font-bold border-2 border-orange-400 py-2 px-4 rounded-md hover:bg-orange-400 hover:text-white mb-2"
            >
              Back
            </button> */}
            <button

              type="submit"
              className="sm:w-full lg:w-[25%] h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
            >
              Invite
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
