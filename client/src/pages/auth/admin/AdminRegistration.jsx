import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MultiStepper } from "./MuiltiStepper";

export const AdminRegistration = ({ onNext }) => {
  const [companyName, setCompanyName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [teamCapacity, setTeamCapacity] = useState("");
  const [companyLicense, setCompanyLicense] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [businessTypeError, setBusinessTypeError] = useState("");
  const [teamCapacityError, setTeamCapacityError] = useState("");
  const [companyLicenseError, setCompanyLicenseError] = useState("");

  const navigate = useNavigate();
  const validateCompanyName = () => {
    if (!companyName) {
      setCompanyNameError("Company name is required");
      return false;
    } else {
      setCompanyNameError("");
      return true;
    }
  };

  const validateBusinessType = () => {
    if (!businessType) {
      setBusinessTypeError("Business type is required");
      return false;
    } else {
      setBusinessTypeError("");
      return true;
    }
  };

  const validateTeamCapacity = () => {
    if (!teamCapacity) {
      setTeamCapacityError("Team capacity is required");
      return false;
    } else {
      setTeamCapacityError("");
      return true;
    }
  };

  const validateCompanyLicense = () => {
    if (!companyLicense) {
      setCompanyLicenseError("Company license is required");
      return false;
    } else {
      setCompanyLicenseError("");
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validateCompanyName();
    validateBusinessType();
    validateTeamCapacity();
    validateCompanyLicense();

    // Check if there are no validation errors
    if (
      !companyNameError &&
      !businessTypeError &&
      !teamCapacityError &&
      !companyLicenseError &&
      businessType !== ""
    ) {
      // Navigate to the next page
      // navigate('/auth/admin/registration/contact');
      onNext({
        companyName,
        teamCapacity,
        license: companyLicense,
      });
    }
  };

  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
      {/* Left Column */}
      <div className="sm:px-20 lg:w-[50%] h-screen flex flex-col px-8">
        {/* Logo */}
        <a className="flex text-center items-center justify-center ">
          <img
            src="https://tinyurl.com/3wuh45ve"
            alt="logo"
            className="mb-2 w-16 h-12 lg:w-24 lg:h-14"
          />
        </a>
        {/* Header Section */}
        <div className="">
          <h1 className="font-bold mb-4 text-2xl lg:text-4xl">
            Register <span className="text-red-500">with</span> INsure
          </h1>
          <p className="pb-4 text-xs lg:text-base">
            Get started - <span className="text-red-500">7</span> days free
            trial
          </p>
        </div>
        {/* Form Area */}
        <form name="signUpData" className="flex flex-col w-full">
          {/* Company name */}
          <input
            type="text"
            id="name"
            name="name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            onBlur={validateCompanyName}
            placeholder="Company's name"
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${
              companyNameError ? "border-red-500" : ""
            }`}
          />
          {companyNameError && (
            <p className="text-red-500 text-sm">{companyNameError}</p>
          )}

          {/* Business type */}
          <input
            type="text"
            name="Btype"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            onBlur={validateBusinessType}
            placeholder="Business type (e.g., proprietorship)"
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${
              businessTypeError ? "border-red-500" : ""
            }`}
          />
          {businessTypeError && (
            <p className="text-red-500 text-sm">{businessTypeError}</p>
          )}

          {/* Team capacity */}
          <select
            value={teamCapacity}
            onChange={(e) => setTeamCapacity(e.target.value)}
            onBlur={validateTeamCapacity}
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 text-xs lg:text-sm text-gray-400 focus:border-blue-500 ${
              teamCapacityError ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Team capacity
            </option>
            <option value="10">1 - 10</option>
            <option value="20">11 - 20</option>
            <option value="50">21 - 50</option>
            <option value="200">51 - 200</option>
          </select>
          {teamCapacityError && (
            <p className="text-red-500 text-sm">{teamCapacityError}</p>
          )}

          {/* Company license */}
          <input
            type="text"
            name="license"
            value={companyLicense}
            onChange={(e) => setCompanyLicense(e.target.value)}
            onBlur={validateCompanyLicense}
            placeholder="Company license"
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${
              companyLicenseError ? "border-red-500" : ""
            }`}
          />
          {companyLicenseError && (
            <p className="text-red-500 text-sm">{companyLicenseError}</p>
          )}

          {/* Register button */}
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
            id="register-button"
          >
            Continue
          </button>
          <div className="text-left text-xs">
            <p className="mt-2 text-xs">
              By proceeding, you agree to the 
              <a>
                <span className="text-blue-500 hover:underline">
                   Terms of services
                </span>
              </a>{" "}
              and
              <a>
                <span className="text-blue-500 hover:underline">
                  privacy policy
                </span>
              </a>
            </p>
            <p className="mt-[1rem] text-xs lg:text-sm flex items-center justify-center gap-3">
              Already have an account?
              <span className="text-red-500 cursor-pointer hover:underline">
                <a href="./login">Log in</a>
              </span>
            </p>
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
