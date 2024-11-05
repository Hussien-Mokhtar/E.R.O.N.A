import { motion } from "framer-motion"
import background from "../assets/background.webp"
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import Faqs2 from "./Faqs2";
export default function Faqs1() {
  return (
    <>
    <motion.div className="bg"
    initial={{ x: '-150%' }}
   animate={{ x: 0 }}
    transition={{ duration: 2, ease: 'easeOut'  }} >
      <img src={background} alt="" className="w-full  "/>
      <div className="text-white">
      <h5 className=" bg-title flex flex-col lg:text-xl text-sm"> HOME - FAQS <span className="lg:text-4xl text-2xl font-bold mt-2">FAQS</span></h5>
      </div>
    </motion.div>
     
     <div className="container mx-auto px-4 text-center grid lg:grid-cols-3 grid-cols-1 w-full lg:pt-8 pt-8 ">

    <div className=" ">
        <h5 className="text-orange-500 text-xl font-semibold">MOST COMMON</h5>
        <h1 className="font-semibold text-4xl pt-8">Popular <br /> questions</h1>

        <h5 className="pt-10 font-semibold text-xl">ASK US ANYTHING</h5>
        <p className="flex justify-center items-center py-2 font-normal text-xl"><FiPhoneCall />
        <span className=" hover:text-orange-400 duration-500 pl-2"> +00-1234567890</span></p>
        <p className="flex justify-center items-center font-normal text-xl"> <MdOutlineMailOutline />
         <span className=" hover:text-orange-400 duration-500 pl-2"> demo@support.com</span></p>

         <h5 className="py-3 mt-10 text-xl font-semibold text-gray-800">MY ACCOUNT</h5>
         <h5 className="text-xl font-semibold text-gray-800">COMPANY POLICIES</h5>
         <h5 className="py-3 text-xl font-semibold text-gray-800">PAYMENT OPTIONS</h5>
         <h5 className="text-xl font-semibold text-gray-800">TERM AND CONDITIONS</h5>

        </div>
    <div className="col-span-2 flex text-left">
     <Faqs2/>
    </div>
   
    </div>

</>
)
}
