import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Shop5Dynamic({shop5}) {
  
  return (
    <>
    
    <Link to={`/shopdetails/${shop5.id}`}> 
    
      <div className=" parentt2 px-4 pt-20 flex flex-col justify-center items-center ">
        <div className=" relative flex justify-center items-center ">
          <img src={shop5.thumbnail_img} alt={shop5.name} className=" h-[15rem]" />
          
        </div>
        <div className="">
          <h4 className=" font-bold text-center text-sm flex justify-center items-center pb-4">
            {shop5.name}
          </h4>
          <h4 className=" text-orange-500 font-bold flex justify-center items-center">
            {shop5.price1} <del className=" text-black">{shop5.price2}</del>
          </h4>
          <div className=" title2 absolute opacity-0  gap-1 text-5xl  flex justify-center items-center">
            <FaRegHeart className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500 " />
            <FiShoppingBag className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500" />
            <IoEyeOutline className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500" />
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}
