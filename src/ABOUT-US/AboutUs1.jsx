import { motion } from "framer-motion"
import background from "../assets/background.webp"
import Aos from "../LAYOUT/Aos"
export default function AboutUs1() {
  return (
    <>
    <div className='bg'>
      <motion.div className="bg"
      initial={{ x: '-150%' }}
     animate={{ x: 0 }}
      transition={{ duration: 1, ease: 'easeOut'  }} >
        <img src={background} alt="" className="w-full  "/>
        <div className="text-white">
        <h5 className=" bg-title flex flex-col text-xl"> HOME  - ABOUT US <span className="text-2xl font-bold mt-2">ABOUT US</span></h5>
        </div>
      </motion.div>
     </div>

     <motion.div className="flex flex-col justify-center items-center py-4"data-aos="fade-left" data-aos-duration="3000"> <Aos/>
     <h5 className="text-md text-gray-500 font-bold">Since 1982 our story</h5>
     <h1 className="text-5xl font-bold border-b-4 py-4">Our about story</h1>
     </motion.div>
     
     </>
  )
}
