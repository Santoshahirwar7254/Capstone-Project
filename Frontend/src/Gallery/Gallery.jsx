import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'

const Gallery = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const images = [
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      title: "Wedding Event"
    },
    {
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      title: "Corporate Event"
    },
    {
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      title: "Birthday Party"
    },
    {
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
      title: "Concert Night"
    },
    {
        image: "https://th.bing.com/th/id/OIP.pPl4aH0Q6bKYGMLNEZDRRwHaE8?w=247&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        title: "Wedding Event"
      },
      {
        image: "https://th.bing.com/th/id/OIP.YNYmaDbH0AXoK1Sa6DnJOwHaE8?w=241&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        title: "Wedding Event"
      },
      {
        image: "https://th.bing.com/th/id/OIP.OV7Bqn2A1oZvAmCVydlK8QHaE8?w=288&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        title: "Wedding Event"
      },
      {
        image: "https://th.bing.com/th/id/OIP.kxhdXScQ2DD3SkGlEC3njgHaHa?w=192&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        title: "Tech Event"
      },
      {
        image: "https://th.bing.com/th/id/OIP.HYC8CmDgrniS1WGbWocIfwHaE6?w=292&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        title: "Wedding Event"
      },
      {
        image: "https://th.bing.com/th/id/OIP.A23g_z-aOXrPM-2h2mi2AgHaE8?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        title: "Night Party"
      },
      {
        image: "https://th.bing.com/th/id/OIP.da2iwcgPD7sBuPGspUbTAQHaFS?w=244&h=176&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        title: "Live Concert"
      },

  ];

  //  AUTO CHANGE  & FADE
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 400);

    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-16 flex flex-col items-center">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-white mb-10">
      Event Highlights
      </h2>

      {/*  Fade Image */}
      <div className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
        <GalleryCard
          image={images[currentIndex].image}
          title={images[currentIndex].title}
        />
      </div>

      {/*  Dots */}
      <div className="flex gap-3 mt-6">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
              ${index === currentIndex 
                ? "bg-purple-500 scale-125" 
                : "bg-gray-400"}
            `}
          ></div>
        ))}
      </div>

    </div>
  )
}

export default Gallery