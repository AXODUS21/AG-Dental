"use client"
import React, { useEffect, useState } from 'react'

const Carousel = ({children: slides, autoSlide, autoSlideInterval = 6000}) => {
    const [current, setCurrent] = useState(0)

    const prev = () =>
      setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

    const next = () =>
       setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next,autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])
    
  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-in-out duration-500" style={{transform: `translateX(-${current * 100}%)`}}>{slides}</div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-gray-300 text-gray-800 hover:bg-white">
          <img
            src="/assets/icons/chevron.png"
            className="h-8 rotate-180"
            alt="chevron"
          />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-gray-300 text-gray-800 hover:bg-white">
          <img src="/assets/icons/chevron.png" className="h-8" alt="chevron" />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
                <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${current === i ? "p-2" : "bg-opacity-50"}`}>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel