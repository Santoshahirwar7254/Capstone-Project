import React from 'react'

const Design = () => {
  return (
    <div className="w-full flex justify-center mt-25 sm:mt-24 md:mt-32 px-4">

      <div className="flex items-center gap-3 sm:gap-6 md:gap-10">
        
        {/* Left Icon */}
        <img 
          src="https://cdn-icons-png.flaticon.com/128/11023/11023825.png"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 
          transition duration-500 hover:scale-125 -scale-x-100 
          hover:rotate-12 hover:drop-shadow-[0_0_10px_rgba(255,0,150,0.7)]"
        />

        {/* Text */}
        <div className="text-center group cursor-pointer">
          
          <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold 
          bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
          bg-[length:200%_200%] bg-clip-text text-transparent 
          transition-all duration-500 group-hover:animate-gradientMove">
            We Craft Your
          </h1>

          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-1
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
          bg-[length:200%_200%] bg-clip-text text-transparent 
          transition-all duration-500 group-hover:animate-gradientMove">
            Perfect Moments
          </h1>

        </div>

        {/* Right Icon */}
        <img 
          src="https://cdn-icons-png.flaticon.com/128/11023/11023825.png"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 
          transition duration-500 hover:scale-125 hover:-rotate-12 
          hover:drop-shadow-[0_0_10px_rgba(0,150,255,0.7)]"
        />

      </div>

    </div>
  )
}

export default Design