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
import Checkout4Dynamic from "../DYNAMIC/Checkout4Dynamic";
import visa1 from "../assets/visa1.png"
import visa2 from "../assets/visa2.png"
import visa3 from "../assets/visa3.png"
import visa4 from "../assets/visa4.png"
import visa5 from "../assets/visa5.png"
import visa6 from "../assets/visa6.png"
import ArrowTop from "../LAYOUT/ArrowTop";
export default function Checkout4() {
    const check4 = [
        { id: 1, title1: "Product", title2: "Total" },
        { id: 2, title1: "Product img", title2: "$214.20" },
        { id: 3, title1: "Subtotal", title2: "$214.20" },
        { id: 4, title1: "Tax", title2: "$0.00" },
        { id: 5, title1: "Total Sgipping", title2: "$25.00" },
        { id: 6, title1: "Total", title2: "$239.20" },
    ]
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

<div className="container mx-auto lg:px-10 grid lg:grid-cols-2 grid-cols-1 py-6">
    <div className="">
    <h5 className="lg:ml-8 font-bold py-4">Select a payment option :</h5>
    <div className="flex ">
    <img src={visa1} alt="" />   
    <img src={visa2} alt="" />
    <img src={visa3} alt="" />
    <img src={visa4} alt="" />
    <img src={visa5} alt="" />
    <img src={visa6} alt="" />
    </div>
    </div>
<div className="py-4 font-medium">
<h5 className="lg:ml-40 ml-32 lg:py-4 ">Summary </h5>
        {check4.map((ch4) => {
      return <Checkout4Dynamic checkout4={ch4} />
     })}
     <form action="">
     <div className="grid lg:grid-cols-2 grid-cols-2 py-4">
     <input type="text" placeholder="Have coupon code? Enter here.." required/><span className="bg-black text-white p-2 rounded-md w-20"><input type="submit" required/></span>
     </div>
     </form>
</div>
</div>
      <div className="container mx-auto lg:px-60 lg:pt-8 grid grid-cols-2 pb-8">
        <h5 ><Link to="/checkout3" className="flex items-center gap-2 font-bold text-lg"> <FaArrowLeftLong /> <span> Return to Dleviry</span> </Link></h5>
        <button className="hover:scale-105 duration-200 "> <Link to="/checkout5" className="bg-black text-white font-bold p-4 border-2 border-orange-500 rounded-tl-2xl rounded-br-2xl hover:bg-orange-500 hover:border-black text-sm">Complete order</Link> </button>
    </div>
    <hr />
      <DownNav />

      <Footer1/>
      <ArrowTop/>

    </>
  )
}