import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

export default function Shop7Dynamic({shop7}) {
  return (
    <>
      <div className=" parentt2 w-auto container px-4 py-20 flex flex-col justify-center items-center ">
        <div className=" relative flex justify-center items-center ">
          <img src={shop7.img} alt={shop7.title} className=" w-full" />
        </div>
        <div className="">
          <h4 className=" font-bold text-xl flex justify-center items-center">
            {shop7.title}
          </h4>
          <h4 className=" text-orange-500 font-bold flex justify-center items-center">
            {shop7.price1} <del className=" text-black">{shop7.price2}</del>
          </h4>
          <div className=" title2 absolute opacity-0  gap-1 text-5xl  flex justify-center items-center">
            <FaRegHeart className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500 " />
            <FiShoppingBag className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500" />
            <IoEyeOutline className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500" />
          </div>
        </div>
      </div>
    </>
  );
}
