import React from 'react';
import ProductsCard from '../Components/ProductsCard';
import { electronicCards, homeCards, ladyCards, menCards, shoeCards } from "../Constants";
const Products = () => {
  return (
   <section
     
    className="max-container max-sm:mt-12 xl:mt-[15rem] lg:mt-[15rem] md:mt-[15rem] "
     >
   <div className="flex flex-col  justify-start gap-5">
    <h2 className="bg-[#757588] rounded-2xl text-center text-white text-4xl font-palanquin font-bold ">
    <span className='text-coral-red'>Shoes </span> And
    <span className='text-coral-red'> Sneakers </span>
    </h2> 

   </div>
   {/* shoes section */}
   <div id="home" className="mt-16 rounded-2xl  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-14">
    {shoeCards.map((shoeCard) => (
        <ProductsCard key={shoeCard.name} {...shoeCard}/>
    ))}
   </div>
   {/* mens collection section */}
   <h2 className="bg-[#757588] rounded-2xl mt-5 text-center text-white text-4xl font-palanquin font-bold">
    <span className='text-coral-red'> Men's </span> Collection
    </h2> 
   <div className="mt-16 rounded-2xl  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-14">
    {menCards.map((menCard) => (
        <ProductsCard key={menCard.name} {...menCard}/>
    ))}
   </div>
     
   {/* ladies collection section */}
   <h2 className="bg-[#757588] rounded-2xl mt-5 text-center text-white text-4xl font-palanquin font-bold">
    <span className='text-coral-red'> Abaya</span> And
    <span className='text-coral-red'> Hijab </span> Collection
    </h2> 
   <div className="mt-16 rounded-2xl  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-14">
    {ladyCards.map((ladyCard) => (
        <ProductsCard key={ladyCard.name} {...ladyCard}/>
    ))}
   </div>
   {/* electronic section */}
   <h2 className="bg-[#757588] rounded-2xl mt-5 text-center text-white text-4xl font-palanquin font-bold">
    <span className='text-coral-red'> Electronics</span>  Collection
    </h2> 
   <div className="mt-16 rounded-2xl  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-14">
    {electronicCards.map((electronicCard) => (
        <ProductsCard key={electronicCard.name} {...electronicCard}/>
    ))}
   </div>
   {/* ladies collection section */}
   <h2 className="bg-[#757588] rounded-2xl mt-5 text-center text-white text-4xl font-palanquin font-bold">
    <span className='text-coral-red'> Home Utensil</span> And
    <span className='text-coral-red'> Appliances </span> 
    </h2> 
   <div className="mt-16 rounded-2xl  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-14">
    {homeCards.map((homeCard) => (
        <ProductsCard key={homeCard.name} {...homeCard}/>
    ))}
   </div>
     
   </section>
  )
}

export default Products
