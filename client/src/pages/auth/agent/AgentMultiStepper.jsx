import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AgentRegistration } from "./AgentRegistration";
import AgentBioData from "./AgentBioData";
const KeyContext = createContext();

const AgentMultiStepper = () => {
  const [formStep, setFormStep] = useState(1);
  const [agentFormData, setAgentFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "agent",
  });
  useEffect(() => {
    console.log(agentFormData);
  }, [agentFormData]);

  const [key, setKey] = useState("");

  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;
  const agentRegURL = `${baseURL}/auth/Register?type=agent`;

  const postData = async (data) => {
    try {
      const updatedFormData = { ...agentFormData, ...data };
      setAgentFormData(updatedFormData);
      const response = await axios.post(agentRegURL, updatedFormData);

      if (response.data.status) {
        await Swal.fire({
          title: "Success!",
          text: "Registration Successful. Press OK to verify your email",
          icon: "success",
          confirmButtonText: "OK",
        });

        setKey(agentFormData);
        // Pass formData as state to the /auth/otp route
        navigate("/auth/otp", { state: { formData: updatedFormData } });
      }
    } catch (error) {
      await Swal.fire({
        title: "Error!",
        text: `Registration failed!!!!!  ${
          error.response.data.message || error.message
        }`,
        icon: "error",
        confirmButtonText: "OK",
      });
      console.log("Error making POST request:", error);
    }
  };

  const handlePrev = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  const handleNext = (data) => {
    setAgentFormData((prevData) => ({ ...prevData, ...data }));
    setFormStep((prevStep) => prevStep + 1);
  };

  const renderStepComponent = () => {
    switch (formStep) {
      case 1:
        return <AgentRegistration onNext={handleNext} />;
      case 2:
        return <AgentBioData onNext={postData} onPrev={handlePrev} />;
      // case 3:
      //   return <AdminRegSetup onNext={postData} onPrev={handlePrev} />;
      default:
        return null;
    }
  };

  return <div>{renderStepComponent()}</div>;
};

export default AgentMultiStepper;
