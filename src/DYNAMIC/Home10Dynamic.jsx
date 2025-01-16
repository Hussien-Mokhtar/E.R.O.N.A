/* eslint-disable react/prop-types */
import { CiCalendar } from "react-icons/ci";
import { motion } from "framer-motion";

export default function Home10Dynamic({ slider10 }) {
  return (
    <>
      {/* <motion.div
        className="container mx-auto px-4 pb-20 flex flex-col justify-center items-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      > 
        <img
          src={slider10.meta_img}
          alt="Big story img"
          className=" w-full h-[12rem] hover:scale-105 duration-500"
        />
        <div className="flex py-4 gap-2">
          <CiCalendar className="text-orange-500 font-extrabold text-md mt-1" />
          <span className="font-bold text-md"> {slider10.title}</span>
        </div>
        <h1 className="font-bold text-xl py-4"> {slider10.slug}</h1>
        <h5 className="text-gray-500 leading-8 text-md font-bold">
          
          {slider10.short_description}
        </h5>
      </motion.div> */}
            <motion.div
        className="container mx-auto px-4 pb-20 flex flex-col "
        data-aos="fade-right"
        data-aos-duration="1000"> 
        <img
          src={slider10.img}
          alt="Big story img"
          className=" w-full h-[12rem] hover:scale-105 duration-500"/>

        <div className="flex py-2 gap-2">
          <CiCalendar className="text-orange-500 font-extrabold text-md mt-1" />
          <span className="font-bold text-md"> {slider10.title}</span>
        </div>
        <h1 className="font-bold text-xl py-4"> {slider10.title1}</h1>
        <h5 className="text-gray-500 leading-8 text-md font-bold">
          
          {slider10.title2}
        </h5>
      </motion.div>

    </>
  );
}
