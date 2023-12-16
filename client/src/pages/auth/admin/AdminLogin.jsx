import React,{useState} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";


const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] =useState(false)
  const [error, setError]=useState({})
  const navigate = useNavigate();
  const { login } = useAuth();

  const baseURL = process.env.REACT_APP_BASE_URL;
  const loginURL = `${baseURL}/auth/login?type=company`;

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };





  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clickeedddddddddd")
    console.log(formData, "formdata")

    if (!validateForm()) {
      return;
    }
    setIsLoading(true)

    await Axios.post(loginURL, formData).then((res) => {
      console.log(res.data.data.tokens.access.token, "res token");
      console.log(res.data.data.user.companyProfile.id, "res id");

      if (res.status === 200) {
        login(res.data.data.tokens.access.token, res.data.data.user.companyProfile.id, "admin" );
        setIsLoading(false)
        Swal.fire({
          title: 'Success!',
          text: 'Login succesfull!!!!!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/dashboard/admin', { state: { formData: res.data.data} } )
          }
        }) 
      }else{
        setIsLoading(false)
        Swal.fire({
          title: 'Error!',
          text: 'Login failed!!!!!',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
      Swal.fire({
        title: 'Error!',
        text: 'Login failed!!!!!',
        icon: 'error',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          setFormData({
            email: "",
            password: "",
          })
          setIsLoading(false)
        }
      })

    })
  }



  return (
    <main className="w-full h-screen flex justify-center items-center">
      <form className="rounded-md w-[500px] p-5">
        <div className="logo flex justify-center items-center">
          <img src="https://tinyurl.com/3wuh45ve" alt="INSURE LOGO" />
        </div>
        <h1 className="font-bold mb-4 text-2xl lg:text-4xl">
            Welcome <span className="text-[--orange-bg]">Back</span> Admin
          </h1>
        <div className="flex flex-col w-full my-2">
          <input
            type="email"
            value={formData.email}  
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="px-2 py-3 my-2 rounded-[3px] border border-blue-500 focus:outline-none"
            placeholder="Enter email address"
            required
          />
          {error.email && <p className="text-red-500 text-[12px]">{error.email}</p>}
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>setFormData({ ...formData, password: e.target.value })}
            className={`px-2 py-3 my-2 rounded-[3px] border border-blue-500 focus:outline-none" ${error.email ? 'border-red-500' : ''}`}
            placeholder="Enter password"
          />
          {error.password && <p className="text-red-500 text-[12px]">{error.password}</p>}
        </div>
       
            <button
            onClick={handleSubmit}
            type="button"
            className={`w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8 ${error.password ? 'border-red-500' : ''}`}
            id="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        <Link to="/auth/admin/forgetpassword" className='text-[12px] mt-5 pl-2'>Forgot password?</Link>
        
      </form>
    </main>
  ); 
};

export default AdminLogin;
