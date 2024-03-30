import { star } from "../assets/icons";

const ProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full hover:p-[0.08rem] hover:shadow-3xl hover:rounded-2xl '>
    <a href="#">
      <img src={imgURL} alt={name} className='w-[252px] h-[252px] rounded-3xl ' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating icon' width={18} height={18} />
        <p className='font-montserrat text-l leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal'>
        {price}
      </p>
      </a>
    </div>
  );
};

export default ProductsCard;