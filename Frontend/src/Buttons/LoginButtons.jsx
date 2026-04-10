import React, { useState } from 'react'
import Login from './Login'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const LoginButtons = () => {
  const [LoginButton, setLoginButton] = useState(false)

  return (
    <div className=' z-50'>
      
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        theme="dark"
      />

      {!LoginButton && (
        <button 
          onClick={()=>setLoginButton(true)}
          className="px-4 py-2 sm:px-6 sm:py-3 
          bg-linear-to-r from-purple-500 to-pink-500
          text-white font-semibold rounded-full 
          shadow-lg transition duration-300 
          hover:scale-105 hover:shadow-xl"
        >
          LOGIN
        </button>
      )}

      {LoginButton && <Login close={()=>setLoginButton(false)}/>}

    </div>
  )
}

export default LoginButtons