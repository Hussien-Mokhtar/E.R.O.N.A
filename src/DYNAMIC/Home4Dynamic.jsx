import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { CartContext } from '../USE-CONTEXT/CartContext';
import { useContext } from "react";

export default function Home4Dynamic({ slider4 }) {
  
  const{cart,setCart,number}= useContext(CartContext) 
  
  const addToCart = ()=> {
    const tshirt = {price: slider4.price1}
  setCart (curr => [...curr, tshirt]);
 }
  return (
    <div className=" parentt2 w-auto container px-4 py-20 flex flex-col justify-center items-center ">
      <div className=" relative flex justify-center items-center  ">
        <img src={slider4.thumbnail_img} alt={slider4.name} className="h-[15rem]"/>
      </div>
      <div className="">
        <h4 className=" font-bold lg:text-lg text-sm flex justify-center items-center">
          {slider4.name}
          {number}
        </h4>
        <h4 className=" text-orange-500 font-bold flex justify-center items-center">
          {slider4.price1} <del className=" text-black">{slider4.price2}</del>
        </h4>
        <div className=" title2 absolute opacity-0 gap-1 lg:text-5xl text-6xl lg:ml-0 ml-16  flex justify-center items-center">
          <FaRegHeart className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500 " />
          <FiShoppingBag onClick={addToCart} className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500" />
          <IoEyeOutline className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500" />
        </div>
        
      </div>
    </div>
  );
}
