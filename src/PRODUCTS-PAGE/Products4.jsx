import { useState } from "react"
import { IoIosHeartEmpty } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import visa1 from "../assets/visa1.png"
import visa2 from "../assets/visa2.png"
import visa3 from "../assets/visa3.png"
import visa4 from "../assets/visa4.png"
import visa5 from "../assets/visa5.png"
import visa6 from "../assets/visa6.png"

export default function Products4() {
    const [count, setCount] = useState(1)

    const Plus= () =>{
        setCount(count + 1)
    } 
    const minus = () =>{
        {count > 1 && setCount(count-1)}
    } 

return (
    <>
    <div className="w-full lg:px-20 gap-10 grid lg:grid-cols-3 grid-cols-2 ">
            <button className="flex justify-center py-4 border border-gray-200 gap-8 hover:border-orange-500">
            <h1 onClick={minus}>
                <span className="lg:text-3xl text-3xl">-</span> </h1>

                <h4 className="lg:text-2xl text-xl">{count } </h4>
                
                <h1 onClick ={Plus} className="text-2xl">
                    <span className="">+</span> 
                    </h1>
                </button>

                <button className=' px-10 border-black border-[1px] font-bold text-sm hover:bg-black hover:text-white duration-500'>ADD TO CART</button>
                <button className='px-10 bg-black text-white font-bold text-sm hover:bg-[#f26440] hover:text-white duration-500  '>BUY IT NOW</button>

            </div>
            <div className="w-full lg:py-8 lg:px-20 flex items-center lg:gap-2 gap-1 text-sm font-bold text-gray-500 py-5">
                <IoIosHeartEmpty /> <span>WISHLIST</span>
                <CiShare2 className="ml-10"/> <span>SHARE</span>
                </div>
                <hr />

                <div className="w-full lg:py-8 lg:px-20 ">
                <h1 className="text-sm font-bold flex lg:gap-10 gap-8 ">Delivery: <span className="text-sm font-medium text-gray-500 "> Estimated delivery time: 5-7 days</span></h1>

                <h1 className="text-sm font-bold flex lg:gap-10 gap-8 ">Returns: <span className="text-sm font-medium text-gray-500"> Within 45 days of purchase</span></h1>

                <h1 className="text-sm font-bold flex lg:gap-20 gap-16 ">Sku: <span className="text-sm font-medium text-gray-500"> 445</span></h1>

                <div className="flex lg:pt-4 lg:w-18 w-14">
                <img src={visa1} alt="pay-img" />
                <img src={visa2} alt="pay-img" />
                <img src={visa3} alt="pay-img" />
                <img src={visa4} alt="pay-img" />
                <img src={visa5} alt="pay-img" />
                <img src={visa6} alt="pay-img" />

                </div>

                </div>


    </>
)}