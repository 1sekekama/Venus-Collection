import React from 'react'
import { ImageSlider } from '../Components'
import { images } from "../Constants"

const Hero = () => {
  return (
    
    <section className=''>
      <div className="responsive">
      
          <ImageSlider images= {images} autoSlide={true}/>
      </div>
    </section>

  )
}

export default Hero

