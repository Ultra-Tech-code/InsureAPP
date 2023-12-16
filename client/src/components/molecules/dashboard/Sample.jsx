import React from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Swal from 'sweetalert2';



const Sample = () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const otpURL = `${baseURL}/auth/Register?type=agent`;

    const navigate = useNavigate();

    const handleLoginChange = (value) => {
        if (value === 'admin') {
            navigate('/auth/admin/login');
        } else if (value === 'agent') {
            navigate('/auth/agent/login');
        }
    };

    const fetchData = async() => {
        await Axios.post(otpURL,   {
            "companyProfileId": 1,
            "email": "hjeehvhvhgsdfdsyyvduffsdytfsdhjdvnhvsdhgxfhg",
            "role": "agent"
          }
          ).then((res) => {
            console.log(res, "res")
            console.log(res?.data?.data?.verifyToken, "res data")
        }).catch((err) => {
            console.log(err?.response?.data)
        })
        
    }

    return (
        <>
            <div className='relative w-[8rem] rounded-md ml-10 mt-20'>
                <select name="" id="" className='appearance-none w-full py-4 text-[1.125rem] pl-4 rounded-md border border-[--form-border-bg]'
                onChange={(e) => handleLoginChange(e.target.value)}
                >
                    <option value="Login" className='hidden' disabled selected>Login</option>
                    <option value="admin" className=''>
                        Admin
                    </option>
                    <option value="agent" className='' >Agent</option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6'>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-8-8-2 2 10 10 10-10-2-2-8 8z" /></svg>
                </div>
            </div>

            <button onClick={fetchData}>
                    click me to fetch            </button>


            {/* <div className="relative inline-block w-60 self-center">
                <select className="block appearance-none w-full bg-white border border-[--form-border-bg] hover:border-gray-500 pr-3 py-3 rounded-xl text-lg leading-tight focus:outline-none focus:border-[--blue-bg] text-center">
                    <option defaultValue={''}>select data range</option>
                    <option value={7}>1 - 7</option>
                    <option value={14}>8 - 14</option>
                    <option value={21}>15 - 21</option>
                    <option value={31}>21 - 31</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

                    <!-- Dropdown arrow icon (you can use an SVG or another icon library) -->

                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-8-8-2 2 10 10 10-10-2-2-8 8z" /></svg>
                </div>
            </div> */}
        </>
    )
}

export default Sample
