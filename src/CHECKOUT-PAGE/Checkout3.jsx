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
import ArrowTop from "../LAYOUT/ArrowTop";
export default function Checkout3() {
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

      <div className="container mx-auto lg:px-40 grid lg:grid-cols-4 py-10">
        
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
      <div className="flex flex-col items-center gap-2 font-medium ">
      <h5> <MdPayment /> </h5>
                <h5 className='flex gap-2'>4- Payment <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      </div>

      <div className="container mx-auto lg:px-80 grid grid-cols-1 py-8">
        <div className="py-8 font-bold">
            <h5> <Link to="/products">Products</Link></h5>
        </div>
        <div className="container mx-auto lg:px-44 grid grid-cols-2 border-2 py-6 font-bold gap-2">
        <h5 className="lg:ml-[-10rem]">Choose Delivery Type</h5>
        <h5 className="border-2 py-2 lg:w-44 text-center"><input type="radio" /> <Link to="/">Home Delivery</Link> </h5>
        </div>
      </div>

      <div className="container mx-auto lg:px-60 lg:pt-8 grid grid-cols-2 pb-8">
        <h5 ><Link to="/checkout2" className="flex items-center gap-2 font-bold lg:text-lg text-sm"> <FaArrowLeftLong /> <span> Return to my Shipping</span> </Link></h5>
        <button className="hover:scale-105 duration-200 "> <Link to="/checkout4" className="bg-black text-white font-bold p-4 border-2 border-orange-500 rounded-tl-2xl rounded-br-2xl hover:bg-orange-500 hover:border-black text-sm">Continue to Payment</Link> </button>
    </div>

    <hr />
      <DownNav />

      <Footer1/>
      <ArrowTop/>

    </>
  )
}
