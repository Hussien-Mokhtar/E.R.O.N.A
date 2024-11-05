import { motion } from "framer-motion"
import background from "../assets/background.webp"
import Aos from "../LAYOUT/Aos"
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
export default function ContactUs1() {
  return (
    <>
              
      <motion.div className="bg"
      initial={{ x: '-150%' }}
     animate={{ x: 0 }}
      transition={{ duration: 2, ease: 'easeOut'  }} >
        <img src={background} alt="" className="w-full  "/>
        <div className="text-white">
        <h5 className=" bg-title flex flex-col lg:text-xl text-sm"> HOME  - CONTACT US <span className="lg:text-4xl text-2xl font-bold mt-2">CONTACTUS</span></h5>
        </div>
      </motion.div>
     
     <motion.div className="flex justify-center items-center text-4xl font-bold my-20" >
     <div data-aos="fade-up" data-aos-duration="3000" className="border-b-4 " > Quick support </div> <Aos/>
        </motion.div>

    <div className=" container mx-auto px-4 grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 pt-10">

        <div className=" flex flex-col justify-center items-center">
        <IoLocationOutline className="text-orange-500 bg-gray-200 rounded-full p-10 text-9xl py-4 mb-6"/>
       <p className="font-medium text-xl text-gray-500 leading-8">14 Ringe lane, las vegas, <br />nv, 89156 united states</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
        <LuPhoneCall  className="text-orange-500 bg-gray-200 rounded-full p-10 text-9xl py-4 mb-6"/>
       <p className="font-medium text-xl text-gray-500 leading-8"> +00-1234567890 <br />(+1)54626541 00</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
        <MdOutlineMailOutline className="text-orange-500 bg-gray-200 rounded-full p-10 text-9xl py-4 mb-6"/>
       <p className="font-medium text-xl text-gray-500 leading-8">demo@support.com <br />support@yourmail.com</p>
        </div>
       </div>
    </>
  )
}
