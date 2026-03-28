import React, { useState } from 'react'
import Signups from './Signups'
import { ToastContainer } from "react-toastify";

const SignupButtons = () => {
  const [Register, setRegister] = useState(false)

  return (
    <div className=" z-50">

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        theme="dark"
      />

      {!Register && (
        <button 
          className="px-4 py-2 sm:px-6 sm:py-3 
          bg-gradient-to-r from-purple-500 to-pink-500 
          text-white font-semibold rounded-full 
          shadow-lg transition duration-300 
          hover:scale-105 hover:shadow-xl"
          onClick={()=>setRegister(true)} 
        >
          SIGNUP
        </button>
      )}

      {Register && <Signups close={() => setRegister(false)}/>}

    </div>
  )
}

export default SignupButtons