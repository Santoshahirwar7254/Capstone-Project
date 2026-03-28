import React, { useState } from 'react'
import EventManage from './EventManage';

const EventDesign = ({ isModalOpen }) => {
  
  const [Emanage, setEmanage] = useState(false); 

  if (isModalOpen) return null;

  return (
    <>
      {/* Normal Flow Content  */}
      {!Emanage && (
        <div className="w-full py-20 flex flex-col items-center justify-center text-center space-y-6">

          <h1 className="text-3xl sm:text-4xl font-bold text-white animate-pulse tracking-wide">
            Let’s schedule something amazing!
          </h1>

          <button
            onClick={() => setEmanage(true)}
            className="relative px-6 py-3 text-lg font-semibold text-white 
            bg-gradient-to-r from-purple-500 to-pink-500 
            rounded-full overflow-hidden
            transition-all duration-300 
            hover:scale-110 hover:shadow-2xl"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 
            hover:opacity-100 transition duration-300 blur-xl"></span>

            <span className="relative z-10 font-bold">
              Schedule Your Events
            </span>
          </button>

        </div>
      )}

      {/*  Modal   */}
      {Emanage && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto p-6">
          <EventManage close={()=> setEmanage(false)}/>
        </div>
      )}
    </>
  )
}

export default EventDesign;