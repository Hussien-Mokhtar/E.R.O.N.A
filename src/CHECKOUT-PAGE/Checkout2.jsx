import UpNav from "../LAYOUT/UpNav";
import MidNav from "../LAYOUT/MidNav";
import DownNav from "../LAYOUT/DownNav";
import { motion } from "framer-motion";
import background from "../assets/background.webp"
import { FaRegMap } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import Footer1 from "../LAYOUT/Footer1";
import AddressForm from "./AddressForm";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ArrowTop from "../LAYOUT/ArrowTop";
export default function Checkout2() {
  return (
    <>
     <UpNav />
      <MidNav />
      <hr />

      <motion.div
        className="bg lg:text-xl text-sm ">
        <img src={background} alt="" className="w-full  " />
        <div className="text-white ">
          <h5 className=" bg-title flex flex-col "> HOME - CHECKOUT<span className=" font-bold mt-2 lg:text-4xl text-sm"> CHECKOUT </span> </h5>
        </div>
      </motion.div>

      <div className="container mx-auto lg:px-40 grid lg:grid-cols-4 py-10">
        
      <div className="flex flex-col items-center gap-2 font-medium text-orange-500 ">
      <h5> <MdOutlineShoppingCart /> </h5>
                <h5 className='flex gap-2'>1- My Cart <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      <div className="flex flex-col items-center gap-2 font-medium text-orange-500">
      <h5> <FaRegMap /> </h5>
                <h5 className='flex gap-2'>2- Shipping info <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      <div className="flex flex-col items-center gap-2 font-medium ">
      <h5> <FiTruck /> </h5>
                <h5 className='flex gap-2'>3- Delivery info <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      <div className="flex flex-col items-center gap-2 font-medium ">
      <h5> <MdPayment /> </h5>
                <h5 className='flex gap-2'>4- Payment <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      </div>
      <div className=" lg:px-96 grid lg:grid-cols-2 grid-cols-1 gap-6 leading-8 ">

        <div className=" shadow-xl p-6 ">
            <input type="radio" /> <span className="text-gray-500">Adress :</span> <span>6 st october cairo giza</span>
            <h5 className="text-gray-500">Postal code :</h5>
            
            <h5 className="text-gray-500">City : <span className="text-black">Ataba</span></h5>
            <h5 className="text-gray-500">State : <span className="text-black">Cairo</span></h5>
            <h5 className="text-gray-500">Country : <span className="text-black">Egypt</span></h5>
            <h5 className="text-gray-500">Phone : <span className="text-black">02 01121816915</span></h5>

        </div>
        <div className=" shadow-xl flex items-center justify-center ">
            <h5><AddressForm/></h5>

        </div>
      </div>
      <div className="container mx-auto lg:px-60 lg:pt-8 grid grid-cols-2 py-8 ">
        <h5 ><Link to="/checkout1" className="flex items-center gap-2 font-bold text-lg"> <FaArrowLeftLong /> <span> Return to my cart</span> </Link></h5>
        <button className="hover:scale-105 duration-200 "> <Link to="/checkout3" className="bg-black text-white font-bold p-4 border-2 border-orange-500 rounded-tl-2xl rounded-br-2xl hover:bg-orange-500 hover:border-black text-sm">Continue to Delivery </Link> </button>
    </div>

    <hr />
      <DownNav />

      <Footer1/>
      <ArrowTop/>
    </>
  )
}
