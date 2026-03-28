import React from "react";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Address = () => {
  return (
    <div className="flex flex-col items-center text-center md:text-left gap-1 p-6">

      {/* Image */}
      <div className="flex justify-center">
        <img
          className="w-40 h-40 md:w-52 md:h-52 object-contain"
          src="https://www.deskala.in/static/media/contactUsImage.4bf0f75669cd9eb293f10d21fc4c96f9.svg"
          alt="contact"
        />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold text-white">
        Santosh Ahirwar
      </h1>

      {/* Role */}
      <h4 className="text-lg font-semibold text-white">
        Software Developer
      </h4>

      {/* Email */}
      <div className="flex items-center gap-2 text-white">
        <MdEmail className="text-xl text-yellow-500" />
        <p>santoshahirwar7254@email.com</p>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2 text-white">
        <IoCallOutline className="text-xl text-yellow-500" />
        <p>9302903XXX</p>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 text-white">
        <CiLocationOn className="text-xl text-yellow-500" />
        <p>Khandwa Naka, Indore, Madhya Pradesh 452001</p>
      </div>

    </div>
  );
};

export default Address;