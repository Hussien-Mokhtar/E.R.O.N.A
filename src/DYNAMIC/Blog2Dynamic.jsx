import { motion } from "framer-motion"
import Aos from "../LAYOUT/Aos"
import { CiCalendar } from "react-icons/ci";

export default function Blog2Dynamic({blog2}) {
  return (
    <>
                    <motion.div className="container mx-auto px-6 pb-20 pt-8 "
           data-aos="fade-right" data-aos-duration="3000" > <Aos/>
      <img src={blog2.img} alt="Big story img" className="w-full hover:scale-105 duration-500" />
      <div className="flex py-4">
      <CiCalendar className="text-orange-500 font-extrabold text-2xl"/> <span className="font-bold text-xl"> {blog2.title1}</span>
      </div>
      <h1 className="font-bold text-2xl py-4"> {blog2.title2}</h1>
      <h5 className="text-gray-500 leading-8 text-xl font-bold"> {blog2.title3}</h5>
      </motion.div>
    </>
  )
}
