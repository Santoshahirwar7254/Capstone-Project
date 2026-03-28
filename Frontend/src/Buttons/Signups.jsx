import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import axios from "axios";

const Signups = ({ close }) => {

  const [Formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: ""
  })

  const HandleChange = (e) => {
    const { name, value } = e.target
    setFormdata({ ...Formdata, [name]: value })
  };

  const HandleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        "https://capstone-project-x3g1.onrender.com/api/signup",
        Formdata,
        {
          validateStatus: () => true   
        }
      )

      //fix starting
      if (res.data.success) {
        toast.success(res.data.message || "Signup Success")

        //  delay so toast show properly
        setTimeout(() => {
          close()
        }, 1500)

      } else {
        toast.error(res.data.message)
      }
      //  FIX END

    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message)
      } else {
        toast.error("Server Error")
      }
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center 
                 bg-linear-to-r bg-black/50 z-50 backdrop-blur-md">

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg 
                      p-6 rounded-xl text-white shadow-lg transition">

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white text-2xl"
          onClick={close}
        >
          <IoClose />
        </button>

        <h1 className="text-2xl text-center mb-4">Signup Now</h1>

        {/* signup form */}
        <form onSubmit={HandleSubmit}>
          <div className="space-y-3">

            {/* name */}
            <input
              className="w-full p-2 bg-white/20 rounded placeholder-gray-300"
              type="text"
              name="name"
              value={Formdata.name}
              onChange={HandleChange}
              placeholder="Enter your name"
              required
            />

            {/* email */}
            <input
              className="w-full p-2 bg-white/20 rounded placeholder-gray-300"
              type="email"
              name="email"
              value={Formdata.email}
              onChange={HandleChange}
              placeholder="Enter your email"
              required
            />

            {/* password */}
            <input
              className="w-full p-2 bg-white/20 rounded placeholder-gray-300"
              type="password"
              name="password"
              value={Formdata.password}
              onChange={HandleChange}
              placeholder="Enter your Password"
              required
            />

            {/* submit  */}
            <button className="w-full py-2 bg-purple-500 rounded hover:scale-105 transition">
              Submit
            </button>

          </div>
        </form>

        <div className="mt-4 text-center text-sm">
          <p>If you are already Sign</p>
          <button className="underline font-bold text-blue-500">Login</button>
        </div>

      </div>
    </div>
  )
}

export default Signups;