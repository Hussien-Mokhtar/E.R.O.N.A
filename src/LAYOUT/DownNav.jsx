import { FiTruck } from "react-icons/fi";
import { LuHeadphones } from "react-icons/lu";
import { MdOutlinePercent } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FiUnlock } from "react-icons/fi";
export default function DownNav() {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:py-2 text-xl font-medium '>

      <div className="flex justify-around items-center border-r-2 lg:p-1  ">
      <FiTruck className=" text-orange-500 hidden sm:block"/><span className="hidden sm:block">Free Shopping</span>
      </div>
      <div className=" flex justify-around items-center border-r-2 lg:p-1  ">
      <FiLock  className="  text-orange-500 hidden sm:block"/><span className="hidden sm:block">Secure Payment</span>
      </div>
      <div className=" flex justify-around items-center  border-r-2 lg:p-1  ">
      <LuHeadphones  className=" text-orange-500 hidden sm:block"/><span className="hidden sm:block">24/7 Support</span>
      </div>
      <div className=" flex lg:justify-around justify-center items-center border-r-2 p-5  ">
      <MdOutlinePercent  className=" text-orange-500 "/><span>Festival Offer</span>
      </div>
      <div className="flex justify-around items-center ">
      <FiUnlock  className=" text-orange-500 hidden sm:block"/><span className="hidden sm:block">Refound policy</span>
      </div>

    </div>
  )
}
