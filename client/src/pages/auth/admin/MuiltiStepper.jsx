// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const MultiStepper = () => {
//   const [companyName, setCompanyName] = useState('');
//   const [businessType, setBusinessType] = useState('');
//   const [teamCapacity, setTeamCapacity] = useState('');
//   const [companyLicense, setCompanyLicense] = useState('');
//   const [companyNameError, setCompanyNameError] = useState('');
//   const [businessTypeError, setBusinessTypeError] = useState('');
//   const [teamCapacityError, setTeamCapacityError] = useState('');
//   const [companyLicenseError, setCompanyLicenseError] = useState('');

//   const navigate = useNavigate();

//   const validateCompanyName = () => {
//     if (!companyName) {
//       setCompanyNameError('Company name is required');
//       return false;
//     } else {
//       setCompanyNameError('');
//       return true;
//     }
//   };

//   const validateBusinessType = () => {
//     if (!businessType) {
//       setBusinessTypeError('Business type is required');
//       return false;
//     } else {
//       setBusinessTypeError('');
//       return true;
//     }
//   };

//   const validateTeamCapacity = () => {
//     if (!teamCapacity) {
//       setTeamCapacityError('Team capacity is required');
//       return false;
//     } else {
//       setTeamCapacityError('');
//       return true;
//     }
//   };

//   const validateCompanyLicense = () => {
//     if (!companyLicense) {
//       setCompanyLicenseError('Company license is required');
//       return false;
//     } else {
//       setCompanyLicenseError('');
//       return true;
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const isCompanyNameValid = validateCompanyName();
//     const isBusinessTypeValid = validateBusinessType();
//     const isTeamCapacityValid = validateTeamCapacity();
//     const isCompanyLicenseValid = validateCompanyLicense();

//     if (isCompanyNameValid && isBusinessTypeValid && isTeamCapacityValid && isCompanyLicenseValid) {
//       // Move to the next step
//       navigate('/auth/admin/registration/contact');
//     }
//   };

//   return (
//     <main className="flex flex-col lg:flex-row lg:w-full">
//       {/* Left Column */}
//       <div className="sm:px-20 lg:w-[50%] h-screen flex flex-col px-8">
//         {/* Your existing form content goes here */}
//         {/* Logo, Header Section, Form Area */}
//         {/* ... */}

//         {/* Form Area - Step 1 */}
//         <form name="signUpData" className="flex flex-col w-full">
//           {/* Company name */}
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={companyName}
//             onChange={(e) => setCompanyName(e.target.value)}
//             onBlur={validateCompanyName}
//             placeholder="Company's name"
//             className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${
//               companyNameError ? 'border-red-500' : ''
//             }`}
//           />
//           {companyNameError && <p className="text-red-500 text-sm">{companyNameError}</p>}

//           {/* Business type */}
//           <input
//             type="text"
//             name="Btype"
//             value={businessType}
//             onChange={(e) => setBusinessType(e.target.value)}
//             onBlur={validateBusinessType}
//             placeholder="Business type (e.g., proprietorship)"
//             className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${
//               businessTypeError ? 'border-red-500' : ''
//             }`}
//           />
//           {businessTypeError && <p className="text-red-500 text-sm">{businessTypeError}</p>}

//           {/* Team capacity */}
//           <select
//             value={teamCapacity}
//             onChange={(e) => setTeamCapacity(e.target.value)}
//             onBlur={validateTeamCapacity}
//             className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 text-xs lg:text-sm text-gray-400 focus:border-blue-500 ${
//               teamCapacityError ? 'border-red-500' : ''
//             }`}
//           >
//             <option value="" disabled>
//               Team capacity
//             </option>
//             <option value="1-10">1 - 10</option>
//             <option value="11-20">11 - 20</option>
//             <option value="21-50">21 - 50</option>
//             <option value="51-200">51 - 200</option>
//           </select>
//           {teamCapacityError && <p className="text-red-500 text-sm">{teamCapacityError}</p>}

//           {/* Company license */}
//           <input
//             type="text"
//             name="license"
//             value={companyLicense}
//             onChange={(e) => setCompanyLicense(e.target.value)}
//             onBlur={validateCompanyLicense}
//             placeholder="Company license"
//             className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${
//               companyLicenseError ? 'border-red-500' : ''
//             }`}
//           />
//           {companyLicenseError && <p className="text-red-500 text-sm">{companyLicenseError}</p>}

//           {/* Continue button */}
//           <button
//             onClick={handleSubmit}
//             type="button"
//             className="w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
//           >
//             Continue
//           </button>
//         </form>
//       </div>

//       {/* Right Column (image) */}
//       <div
//         className="flex-1 bg-cover bg-center hidden lg:block"
//         style={{
//           backgroundImage:
//             'url("https://euvola.sirv.com/Images/Multiethnic%20leaders%20greeting%20each%20other%20in%20city.png")',
//         }}
//       ></div>
//     </main>
//   );
// };
