import React from 'react'

const Card = ({ image, name, bio }) => {
  return (
    <div className="w-[280px] sm:w-[320px] bg-white rounded-2xl shadow-xl p-6 text-center transition duration-500 hover:scale-105">
      
      <div className="w-20 h-20 mx-auto mb-4">
        <img
          src={image}
          alt="user"
          className="w-full h-full rounded-full object-cover border-4 border-blue-500"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">
        {name}
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        {bio}
      </p>

    </div>
  )
}

export default Card