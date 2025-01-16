import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Home9Dynamic({ slider9 }) {
  return (
    <motion.div
      className=" parentt2 w-auto container px-4 py-20 flex flex-col justify-center items-center"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className=" relative flex justify-center items-center ">
        <img src={slider9.img} alt={slider9.img}  className="h-[15rem]"/>
      </div>

      <div className="">
        <h4 className=" font-bold lg:text-lg text-sm flex justify-center items-center">
          {slider9.title1}
        </h4>
        <h4 className=" text-orange-500 font-bold flex justify-center items-center gap-2">
          {slider9.price1} <del className=" text-black">{slider9.price2}</del>
        </h4>

        <div className=" title2 absolute opacity-0 gap-1 text-5xl lg:ml-2 ml-16 flex justify-center items-center">
          <FaRegHeart className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500 " />
          <FiShoppingBag className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500" />
          <IoEyeOutline className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500" />
        </div>
      </div>
    </motion.div>
  );
}
