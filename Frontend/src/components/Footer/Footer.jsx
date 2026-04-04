import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-10 mt-20">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Logo  */}
        <div>
        <img 
        src="https://tse1.mm.bing.net/th/id/OIP._WE2N64iO4fbb5Cgw57ChgHaEe?pid=ImgDet&w=182&h=109&c=7&dpr=1.3&o=7&rm=3"
        alt="logo"
         className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-md"
         />
          <h1 className="text-2xl font-bold text-yellow-500 mb-3">
            UTSAVCRAFT
          </h1>
          {/* service events statement  */}
          <p className="text-sm">
            We craft unforgettable events with creativity, passion, and perfection.
          </p>
        </div>

        {/*  Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li
                className="hover:text-purple-400 cursor-pointer">
                Signup
            </li>
            <li 
               className="hover:text-purple-400 cursor-pointer">
               Login
            </li>
            <li 
                className="hover:text-purple-400 cursor-pointer">
                Events
            </li>
            <li 
               className="hover:text-purple-400 cursor-pointer">
               Testimonials
            </li>
            <li 
            className="hover:text-purple-400 cursor-pointer">
            Contact</li>
          </ul>
        </div>

        {/*  Contacts   */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Contact Us
          </h2>
          <p className="text-sm"> Khandwa Naka indore, India</p>
          <p className="text-sm">santoshahirwar7254@gmail.com</p>
          <p className="text-sm mb-3"> +91 98765 XXXX</p>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
            <FaXTwitter className="hover:text-blue-400 cursor-pointer transition"  />
          </div>
        </div>

      </div>

      {/*  Bottom   conatainer */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} UTSAVCRAFT. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer