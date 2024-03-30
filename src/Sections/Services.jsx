import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import { services } from '../Constants'
const Services = () => {
  return (
    <>
    <h2  className="bg-[#757588] rounded-2xl mb-8 text-center text-white text-4xl font-palanquin font-bold">
    <span className='text-coral-red'> Services </span> We Provide
    </h2> 
    <div  className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
    </>
  )
} 

export default Services

   
