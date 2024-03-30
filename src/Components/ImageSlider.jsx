
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";

const ImageSlider = ({images,autoSlide=false,autoSlideInterval=5000}) => {
  const [currentIndex,setCurrentIndex]=useState(0);
  
  const prevSlide = () =>
    setCurrentIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
  const nextSlide = () =>
    setCurrentIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
  
    // autoSlide function
useEffect(() => {
  if (!autoSlide) return; 
  const slideInterval = setInterval(nextSlide, autoSlideInterval);
  return () => clearInterval(slideInterval);
}, [nextSlide]);

    return (
    <section className=' relative overflow-hidden'>
    <div  className="flex transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
    {images.map((image)=>(
      <img key={image} src={image.url} className='object-contain'/>
    ))}
   
    </div>
    <div className="absolute inset-0 flex items-center justify-between p-4 z-[1]
        font-extrabold">
           <button onClick={prevSlide} className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white ">
            <ChevronLeft size={40} />
            </button>
            <button onClick={nextSlide} className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white ">
            <ChevronRight size={40}/>
           </button>
       </div>
       
       <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
        {images.map((_,indicator)=>(
          <div className={`transition-all w-3 h-3  rounded-full 
          ${currentIndex===indicator? "bg-white" : "bg-[grey]"}
          `}>

          </div>
        ))}

        </div>

        </div>

    </section>
  )
}

export default ImageSlider
