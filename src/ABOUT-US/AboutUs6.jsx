import { FiTruck } from "react-icons/fi";
import { LuRepeat } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
export default function AboutUs6() {
  return (
    <>
       <div className=" container mx-auto px-4 grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 pt-10 pb-10">
        <div className=" flex flex-col justify-center items-center">
        <FiTruck className="text-orange-500 bg-gray-200 rounded-full p-8 text-8xl py-4 mb-6"/>
       <h5 className="font-bold text-xl py-2">FAST SHIPPING</h5>
       <p className="font-medium text-xl text-gray-500 leading-8">Free Shipping starts now! No <br />minimums. No coupon required.</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
        <LuRepeat  className="text-orange-500 bg-gray-200 rounded-full p-8 text-8xl py-4 mb-6"/>
       <h5 className="font-bold text-xl py-2">EASY RETURNS</h5>
       <p className="font-medium text-xl text-gray-500 leading-8"> Do everything with a good heart <br />and expect nothhing in return</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
        <FiDollarSign className="text-orange-500 bg-gray-200 rounded-full p-8 text-8xl py-4 mb-6"/>
       <h5 className="font-bold text-xl py-2">100% MONEY SECURE</h5>
       <p className="font-medium text-xl text-gray-500 leading-8 ">The money you make is a symbol <br />of the value you create.</p>
        </div>
       </div>
    </>
  )
}
