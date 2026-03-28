import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi"  //3 line  icons
import { IoClose } from "react-icons/io5" // close icons
import Login from './Login'
import Signups from './Signups'

const Buttons = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {/*  Desktop Buttons */}
      <div className="hidden md:flex absolute top-5 right-5 gap-4 z-50">
        
        <button
          onClick={() => {
            setShowSignup(true);
            setShowLogin(false);
          }}
          className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full"
        >
          SIGNUP
        </button>

        <button
          onClick={() => {
            setShowLogin(true);
            setShowSignup(false);
          }}
          className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full"
        >
          LOGIN
        </button>
      </div>

      {/*  Mobile Hamburger */}
      {!openMenu && (
        <div className="md:hidden fixed top-5 right-5 z-50">
          <HiMenu 
            size={28} 
            className="text-white cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        </div>
      )}

      {/*  Mobile Sidebar */}
      {openMenu && (
        <div className="fixed top-0 right-0 h-full w-[70%] bg-black/90 z-50 flex flex-col items-center justify-center gap-6">

          {/* Close */}
          <IoClose 
            size={30} 
            className="absolute top-5 right-5 text-white cursor-pointer"
            onClick={() => setOpenMenu(false)}
          />

          {/* Signup */}
          <button
            onClick={() => {
              setShowSignup(true);
              setShowLogin(false);
              setOpenMenu(false); //  close sidebar
            }}
            className="px-6 py-3 bg-purple-500 text-white rounded-full"
          >
            SIGNUP
          </button>

          {/* Login */}
          <button
            onClick={() => {
              setShowLogin(true);
              setShowSignup(false);
              setOpenMenu(false); //  close sidebar
            }}
            className="px-6 py-3 bg-pink-500 text-white rounded-full"
          >
            LOGIN
          </button>

        </div>
      )}

      {/*  CENTER MODALS */}
      {showLogin && (
        <Login close={() => setShowLogin(false)} />
      )}

      {showSignup && (
        <Signups close={() => setShowSignup(false)} />
      )}
    </>
  )
}

export default Buttons