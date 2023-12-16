import React, { createContext, useContext, useState, useEffect } from "react";
import { AdminRegistration } from "./AdminRegistration";
import { AdminRegContact } from "./AdminRegContact";
import { AdminRegSetup } from "./AdminRegSetup";
import { AdminRegTeamInvite } from "./AdminRegTeamInvite";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { useAuth } from "../Authentication/AuthContext";


export const AdminMultiStepper = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    teamCapacity: "",
    license: "",
    phoneNumber: "",
    companyAddress: "",
    email: "",
    password: "",
    role: "company",
  });
  const [key, setKey] = useState("");
  const { registration } = useAuth();

  const navigate = useNavigate()
  const baseURL= process.env.REACT_APP_BASE_URL
  const registrationURL= `${baseURL}/auth/register?type=company`
  

  const postData = async (data) => {
    try {
      const updatedFormData = { ...formData, ...data };
      setFormData(updatedFormData);
      const response = await axios.post(registrationURL, updatedFormData);
  
      if (response.data.status) {
        await Swal.fire({
          title: 'Success!',
          text: 'A confirmation email has been sent to you. Click okay to continue.',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        registration(response?.data?.data?.verifyToken, response.data.data.id);
  
        setKey(formData);
        // Pass formData as state to the /auth/otp route
        navigate('/auth/otp', { state: { formData: response?.data?.data } });
      }
    } catch (error) {
      await Swal.fire({
        title: 'Error!',
        text: `Registration failed!!!!!  ${error.response.data.message || error.message}`,
        icon: 'error',
        confirmButtonText: 'OK',
      });
      console.log('Error making POST request:', error);
    }
  };
  
  

  // const postData = async () => {
  //   try{
  //     const response = await axios.post(baseURL, JSON.stringify(formData))
  //     console.log(response)
  //   }catch(error){
  //     console.log('Error making POST request:', error);
  //   }
  // }

  const handlePostRequest = async () => {
    try {
      const response = await fetch('https://insure-8vvy.onrender.com/v1/docs/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers you need, such as authentication tokens
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Response Data:', responseData);
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };


  const handlePrev = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setFormStep((prevStep) => prevStep + 1);
    console.log(baseURL)
  };

  const renderStepComponent = () => {
    switch (formStep) {
      case 1:
        return <AdminRegistration onNext={handleNext} />;
      case 2:
        return <AdminRegContact onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <AdminRegSetup onNext={postData} onPrev={handlePrev} />;
      case 4:
        return <AdminRegTeamInvite onNext={handleNext} onPrev={handlePrev} />;
      default:
        return null;
    }
  };

  return <>{renderStepComponent()}</>;
};
