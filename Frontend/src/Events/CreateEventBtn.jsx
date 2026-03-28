import React, { useState } from 'react'
import CreateEvent from './CreateEvent'
import { ToastContainer } from "react-toastify";


const CreateEventBtn = ({ children, className }) => {
  const [open, setOpen] = useState(false)

  return (
    <>

      <button
        onClick={() => setOpen(true)}
        className={className}
      >
        {children}
      </button>

      {open && <CreateEvent close={() => setOpen(false)} />}
         
      <div className="fixed top-0 right-0 z-9999 pointer-events-none">
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          theme="dark"
        />
      </div>
    
    
    
    
    
        
         
         
         
    </>
  )
}

export default CreateEventBtn