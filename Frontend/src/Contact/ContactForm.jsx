import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {

  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;

    setformData({
      ...formData,
      [name]: value
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const res = await axios.post(     ///api integrate
        "http://localhost:5000/api/contact",
        formData
      );

      toast.success(res.data.message || "Message sent successfully ");

      // reset form
      setformData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
      toast.error("All fields are required ");
    }
  };

  return (
    <div className="flex justify-center items-center p-6">

      {/*  Toast Container */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        theme="dark"
      />

      <form
        onSubmit={HandleSubmit}
        className="w-full max-w-md p-8 bg-yellow-100 rounded-2xl shadow-inner space-y-4"
      >

        <h1 className="text-2xl font-bold text-center text-yellow-700">
          Get in touch
        </h1>

        <h1 className="font-bold text-center text-yellow-700">
          We are here for you How can we help you
        </h1>

        <input
          className="w-full p-3 rounded-xl border border-yellow-300 text-black"
          placeholder="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={HandleChange}
        />

        <input
          className="w-full p-3 rounded-xl border border-yellow-300 text-black"
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={HandleChange}
        />

        <textarea
          className="w-full p-3 rounded-xl border border-yellow-300 h-32 text-black"
          placeholder="Enter Your Message Here"
          name="message"
          value={formData.message}
          onChange={HandleChange}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white p-3 rounded-xl hover:bg-yellow-600"
        >
          Submit
        </button>

      </form>

    </div>
  );
};

export default ContactForm;