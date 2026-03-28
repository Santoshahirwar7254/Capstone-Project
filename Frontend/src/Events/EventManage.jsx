import React, { useState } from 'react'
import CreateEventBtn from './CreateEventBtn'
import ViewEventsBtn from './ViewEventsBtn'
import { IoClose } from "react-icons/io5";



const EventManage = ({ close }) => {
  const [events, setEvents] = useState([]);
  return (
    <div className="fixed inset-0 bg-black overflow-y-auto px-4">
                   <div className='fixed top-2 right-2 text-3xl'>
                    <button onClick={close}><IoClose /></button>
                   </div>
                     {/*  company   Logo Top Left */}
      <div className="fixed top-3 left-4 z-50 flex flex-col items-center">
        <img 
          src="https://tse1.mm.bing.net/th/id/OIP._WE2N64iO4fbb5Cgw57ChgHaEe?pid=ImgDet"
          alt="logo"
          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover shadow-md"
        />
        <h1 className="text-xs sm:text-sm font-bold text-yellow-500 mt-1">
          UTSAVCRAFT
        </h1>
      </div> 

      {/*  Dialogs */}
      <div className="text-center group mt-24 sm:mt-28 md:mt-32 cursor-pointer">
        
        <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold  bg-linear-to-r
                from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] 
                 bg-clip-text text-transparent transition-all duration-500 group-hover:animate-gradientMove">
                 “Har Khushi Ka Jashn
        </h1>

        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2
        bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 
        bg-[length:200%_200%] bg-clip-text text-transparent 
        transition-all duration-500 group-hover:animate-gradientMove">
          Perfect Planning Ke Saath”
        </h1>
      </div>

      {/* Event  Buttons Schdule events or view all events */}
      <div className="flex justify-center mt-16 sm:mt-20">
        <div className="w-full max-w-md">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <CreateEventBtn
              events={events}
              setEvents={setEvents}
               className="bg-linear-to-r from-purple-500 to-pink-500 
              text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
               >
                   Schedule Event
                </CreateEventBtn>
                {/* view Events */}
                <ViewEventsBtn 
                     events={events}
                     setEvents={setEvents}
                     className="bg-linear-to-r from-blue-500 to-cyan-500 
                     text-white py-3 rounded-lg font-semibold hover:scale-105 transition">
                       View Events
                </ViewEventsBtn>

              </div>
          </div>
      </div>

    </div>
  )
}

export default EventManage