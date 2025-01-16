import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

export default function Home6Dynamic({ slider6 }) {
  return (
    <div className=" parentt2 w-auto container px-2 py-20 flex flex-col justify-center items-center ">
      <div className=" relative flex justify-center items-center ">
        <img src={slider6.thumbnail_img} alt={slider6.name} className=" w-full h-[15rem]" />
      </div>
      <div className="">
        <h4 className=" font-bold lg:text-lg text-sm  flex justify-center items-center">
          {slider6.name}
        </h4>
        <h4 className=" text-orange-500 font-bold flex justify-center items-center">
          {slider6.price1} <del className=" text-black">{slider6.price2}</del>
        </h4>
        <div className="">
        </div>
        <div className=" title2 absolute opacity-0 gap-1 text-5xl flex justify-center items-center">
          <FaRegHeart className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500 " />
          <FiShoppingBag className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500" />
          <IoEyeOutline className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500" />
        </div>
      </div>
    </div>
  ); 
}
 