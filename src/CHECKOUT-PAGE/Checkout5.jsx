import UpNav from "../LAYOUT/UpNav";
import MidNav from "../LAYOUT/MidNav";
import DownNav from "../LAYOUT/DownNav";
import background from "../assets/background.webp"
import { FaRegMap } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import Footer1 from "../LAYOUT/Footer1";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Celebration from "./Celebration";
import ArrowTop from "../LAYOUT/ArrowTop";
export default function Checkout5() {
  return (
    <>
                 <UpNav />
      <MidNav />
      <hr />
      <div
        className="bg lg:text-xl text-sm ">
        <img src={background} alt="" className="w-full  " />
        <div className="text-white ">
          <h5 className=" bg-title flex flex-col "> HOME - CHECKOUT<span className=" font-bold mt-2 lg:text-4xl text-sm"> CHECKOUT </span> </h5>
        </div>
      </div>

      <div className="container mx-auto lg:px-40 grid lg:grid-cols-4  py-10">
        
      <div className="flex flex-col items-center gap-2 font-medium text-orange-500 ">
      <h5> <MdOutlineShoppingCart /> </h5>
                <h5 className='flex gap-2'>1- My Cart <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      <div className="flex flex-col items-center gap-2 font-medium text-orange-500">
      <h5> <FaRegMap /> </h5>
                <h5 className='flex gap-2'>2- Shipping info <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      <div className="flex flex-col items-center gap-2 font-medium text-orange-500">
      <h5> <FiTruck /> </h5>
                <h5 className='flex gap-2'>3- Delivery info <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      <div className="flex flex-col items-center gap-2 font-medium text-orange-500">
      <h5> <MdPayment /> </h5>
                <h5 className='flex gap-2'>4- Payment <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      </div>

      <Celebration/>

      <div className="container mx-auto lg:px-80 lg:pt-8 grid grid-cols-1 pb-8">
        <h5 ><Link to="/shop" className="flex items-center justify-center gap-2 font-bold text-lg"> <FaArrowLeftLong /> <span> Return to Shop</span> </Link></h5>
        <button className="hover:scale-105 duration-200 "></button>
    </div>
    <hr />
      <DownNav />

      <Footer1/>
      <ArrowTop/>

    </>
  )
}