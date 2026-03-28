import React from 'react'

const GalleryCard = ({ image, title }) => {
  return (
    <div className="relative 
      w-[320px] sm:w-[500px] md:w-[600px] 
      h-[260px] sm:h-[350px] md:h-[420px] 
      overflow-hidden rounded-2xl shadow-2xl group">

      {/* Image */}
      <img
        src={image}
        alt="gallery"
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 
      group-hover:opacity-100 transition duration-500 
      flex items-center justify-center">

        <h2 className="text-white text-xl sm:text-2xl font-bold tracking-wide">
          {title}
        </h2>

      </div>

    </div>
  )
}

export default GalleryCard