import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import ClerkLogin from './ClerkLogin';

const Login = ({ close }) => {
  
  const [FormData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Handle input change
  const HandleLogin = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };
     
  // Handle submit
  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://capstone-project-jmh2.onrender.com/api/login",
        FormData,
        {
          validateStatus: () => true   // 
        }
      );

      // Now all responses come here (200, 401, 403)
      if (res.data.success) {
        toast.success(res.data.message);
        close(); 
      } else {
        toast.error(res.data.message);
      }

    } catch (err) {
      // fallback error
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Server Error");
      }
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center 
        justify-center bg-black/70 backdrop-blur-md">

      <div 
        className="relative w-full max-w-md bg-white/10
         backdrop-blur-lg p-6 rounded-xl text-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button 
          className="absolute top-3 right-3 text-white text-2xl"
          onClick={close}
        >
          <IoClose />
        </button>

        <h1 className="text-2xl text-center mb-4">
          Login Now
        </h1>

        <form onSubmit={HandleSubmit}>
          <div className="space-y-3">
               
            {/* Email */}
            <input 
              className="w-full p-2 bg-white/20 rounded placeholder-gray-300"
              type='email'
              name='email'
              value={FormData.email}
              onChange={HandleLogin}
              placeholder='Enter your email'
              required
            />

            {/* Password */}
            <input 
              className="w-full p-2 bg-white/20 rounded placeholder-gray-300"
              type='password'
              name='password'
              value={FormData.password}
              onChange={HandleLogin}
              placeholder='Enter your password'
              required
            />

            {/* Button */}
            <button className="w-full py-2 bg-purple-500 rounded hover:scale-105 transition">
              LOGIN
            </button>

          </div>
        </form>
        {/* clerk implementation */}
           <div className='my-4 text-center text-sm text-gray-300'> 
            OR continue with
           </div>
           <ClerkLogin close={close}/>
           
        <div className="mt-4 text-center text-sm">
          <p>If you don't have an account, sign up</p>
          <button className="underline font-bold text-blue-500">
            SIGNUP
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;