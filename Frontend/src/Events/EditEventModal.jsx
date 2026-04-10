import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";

const EditEventModal = ({ close, eventData, onUpdate }) => {

  const [formData, setFormData] = useState({
    title: eventData.title || "",
    description: eventData.description || "",
    date: eventData.date?.slice(0, 10) || "",
    time: eventData.time || "",
    location: eventData.location || "",
    price: eventData.price || "",
    category: eventData.category || "other",
    capacity: eventData.capacity || "",
    organizerName: eventData.organizerName || "",
    contactEmail: eventData.contactEmail || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(      ///edit events api integration
        `https://capstone-project-jmh2.onrender.com/api/update/${eventData._id}`,
        formData
      );

      if (res.data.success) {
        toast.success(res.data.message || "Event Updated");

        onUpdate(formData);   // UI update
        close();
      } else {
        toast.error(res.data.message);
      }

    } catch (err) {
      console.log(err);
      toast.error("Update failed ");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-3">
      
      <div className="w-full max-w-xl bg-gray-900 p-6 rounded-xl text-white">

        {/* HEADER */}
        <div className="flex justify-between mb-4">
          <h1 className="text-xl font-bold">Edit Event</h1>
          <button onClick={close}><IoClose /></button>
        </div>

        <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-3">

          <input 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          placeholder="Title" 
          className="input" />

          <input 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              placeholder="Location" 
              className="input" 
            />

          <input 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            className="input" 
          />

          <input 
          type="time" 
          name="time" 
          value={formData.time} 
          onChange={handleChange} 
          className="input"
           />

          <input 
             name="price" 
             value={formData.price} 
             onChange={handleChange} 
             placeholder="Price" 
             className="input" 
            />

          <input 
             name="capacity" 
             value={formData.capacity} 
             onChange={handleChange} 
             placeholder="Capacity" 
             className="input" 
            />

          <input 
              name="organizerName" 
              value={formData.organizerName} 
              onChange={handleChange} 
              placeholder="Organizer" 
              className="input" 
            />

          <input 
             name="contactEmail" 
             value={formData.contactEmail} 
             onChange={handleChange} 
             placeholder="Email" 
             className="input"
           />

          <select name="category" value={formData.category} onChange={handleChange} className="input col-span-2">
            <option>Music</option>
            <option>Tech</option>
            <option>Wedding</option>
            <option>Seminar</option>
            <option>other</option>
          </select>

          <textarea name="description" value={formData.description} onChange={handleChange} className="input col-span-2" />

          <button className="col-span-2 bg-yellow-500 py-2 rounded hover:bg-yellow-600">
            Update Event
          </button>

        </form>

      </div>

      <style>{`
        .input {
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          background: #1f2937;
          color: white;
          border: 1px solid #374151;
        }
      `}</style>

    </div>
  );
};

export default EditEventModal;