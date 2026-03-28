import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import  { toast } from "react-toastify";

const CreateEvent = ({ close }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    price: "",
    category: "other",
    capacity: "",
    organizerName: "",
    contactEmail: "",
  });

  const handleChange = (e) => {     
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {    //form handling
    e.preventDefault();
    try{
      const res = await axios.post(   ///create api integration
        "https://capstone-project-x3g1.onrender.com/api/create",
        formData
      );
      console.log("response", res.data);
      if(res.data.success){
        toast.success(res.data.message);
        close();
      }else{
        toast.error(res.data.message);
      }
    }catch(err){
      console.log("error:", err.response|| err.message);
      toast.error(err.response?.data?.message || "server error");
    }
  };
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-3">
      
      {/* MAIN CARD */}
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[55%] bg-linear-to-br
       from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-5 sm:p-8 overflow-y-auto max-h-[90vh]">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-3xl font-bold text-white">
            Craft Your Plans
          </h1>
          {/* close icon */}
          <button onClick={close} className="text-white text-2xl hover:text-red-400 transition">
            <IoClose />
          </button>
        </div>

        {/* Create event FORM */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* event title */}
          <input 
             name="title" 
             placeholder="Event Title"
             onChange={handleChange} 
             className="input" 
          />
              {/* event location */}
          <input 
               name="location" 
               placeholder="Location" 
               onChange={handleChange} 
               className="input" 
            />
                {/* event date */}
          <input 
               type="date" 
               name="date" 
               onChange={handleChange} 
               className="input"
            />
                   {/* event time */}
          <input 
                type="time" 
                name="time" 
                onChange={handleChange} 
                className="input" 
            />
                    {/* event price & Budget */}
          <input 
                type="number" 
                name="price" 
                placeholder="Price" 
                onChange={handleChange} 
                className="input" 
          />
                {/* event member capacity */}
          <input 
                type="number" 
                name="capacity" 
                placeholder="Capacity" 
                onChange={handleChange} 
                className="input" 
            />
                   {/* event organizer name */}
          <input 
                name="organizerName" 
                placeholder="Organizer Name" 
                onChange={handleChange} 
                className="input"  
            />
                  {/* organizer contact email */}
          <input 
               type="email" 
               name="contactEmail" 
               placeholder="Contact Email" 
               onChange={handleChange} 
               className="input" 
            />
                           {/* choose the category which type of event  */}
          <select name="category" onChange={handleChange} className="input sm:col-span-2">
            <option value="Music">Music</option>
            <option value="Tech">Tech</option>
            <option value="Wedding">Wedding</option>
            <option value="Seminar">Seminar</option>
            <option value="other">Other</option>
          </select>
                      {/* event full detail description */}
          <textarea 
                name="description" 
                placeholder="Event Description" 
                rows="4" onChange={handleChange} 
                className="input sm:col-span-2 resize-none" 
          />
                       {/* event form submiting button */}
          <button 
            type="submit" 
            className="sm:col-span-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition">
            Create Event
          </button>
        </form>
      </div>

      {/* INPUT  style */}
      <style>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          background: #1f2937;
          color: white;
          border: 1px solid #374151;
          outline: none;
          transition: 0.3s;
        }
        .input::placeholder {
          color: #9ca3af;
        }
        .input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59,130,246,0.3);
        }
      `}</style>
    </div>
  );
};

export default CreateEvent;