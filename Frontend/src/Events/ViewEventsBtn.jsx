import React, { useState } from 'react'
import ViewEvents from "./ViewEvents";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewEventsBtn = () => {
  const [viewOpen, setviewOpen] = useState(false);
  
  return (
    <>
      <button  
        onClick={() => setviewOpen(true)}
        className="bg-linear-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg w-full"
      >
        View Events
      </button>

      {viewOpen && (
        <ViewEvents close={() => setviewOpen(false)} />
      )}

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </>
  )
}

export default ViewEventsBtn