import { Navbar } from 'flowbite-react'
import eronalogo from "../assets/erona-logo.webp"
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../USE-CONTEXT/CartContext';

const MidNav = ({slider4}) => {

const {cart,setCart} = useContext(CartContext)

const totalPrice= cart.reduce((acc, curr)=> acc + curr.price1 , 0 );

const addToCart = ()=> {
  const tshirt = {price: slider4.price1}
setCart (curr => [...curr, tshirt]);
}

  return (
    <header>
       <Navbar className=' container mx-auto px-4 flex justify-between '>

      <Navbar.Brand >
        <span className=" w-[60%]"><img src={eronalogo} alt="Logo-img" className='hover:scale-105'/></span>
      </Navbar.Brand>
      <Navbar.Toggle />

 <Navbar.Collapse >
    <Navbar.Link> <h5 className='lg:text-[1rem] text-l font-bold hover:underline  hover:text-orange-500 duration-300'>
      <Link to="/">HOME</Link> </h5></Navbar.Link>
    <Navbar.Link> <h5 className='lg:text-[1rem] text-l font-bold hover:underline  hover:text-orange-500 duration-300'> <Link to="/shop">SHOP</Link></h5></Navbar.Link>
    <Navbar.Link> <h5 className='lg:text-[1rem] text-l font-bold hover:underline  hover:text-orange-500 duration-300'><Link to="/aboutus">ABOUT US</Link></h5></Navbar.Link>
    <Navbar.Link> <h5 className='lg:text-[1rem] text-l font-bold hover:underline  hover:text-orange-500 duration-300'><Link to="/blog">BLOGS</Link></h5></Navbar.Link>
    <Navbar.Link> <h5 className='lg:text-[1rem] text-l font-bold hover:underline  hover:text-orange-500 
    duration-300'><Link to="/contactus">CONTACT US</Link></h5></Navbar.Link>
    <Navbar.Link> <h5 className='lg:text-[1rem] text-l font-bold hover:underline  hover:text-orange-500 duration-300 bg-white'>

      </h5>
      </Navbar.Link>
 </Navbar.Collapse>

      <Navbar.Collapse>
      <div className="flex justify-between items-center gap-2 lg:text-[0.9rem] py-4 hover:underline  hover:text-orange-500 duration-300 bg-white cursor-pointer font-bold ">
       <IoPersonOutline className='text-md'/><span> <Link to="/login" className='text-md'>Login</Link> </span>
      </div>
      <div className="flex justify-between items-center gap-2 lg:text-[0.9rem] py-4 hover:underline  hover:text-orange-500 duration-300 bg-white cursor-pointer font-bold relative">
       <FaRegHeart className='text-md'/><span><Link to="/wishlist" className='text-md'>Wishlist</Link> <span  className='bg-red-600 text-white px-[0.4rem] absolute right-[52px] bottom-[1.9rem]  rounded-e-full rounded-s-full ' > {cart.length} </span></span>
      </div>

      <div className="flex justify-between items-center gap-2 lg:text-[0.9rem] py-4 hover:underline  hover:text-orange-500 duration-300 bg-white cursor-pointer font-bold relative">
       <MdOutlineShoppingBag className='text-md'/><span><Link to="/checkout1"  className='text-md'>Checkout </Link> <span className='bg-red-600 text-white px-[0.4rem] absolute right-[62px] bottom-[1.8rem]  rounded-e-full rounded-s-full '> {cart.length} </span></span>
      </div>

      </Navbar.Collapse>
    </Navbar>
    </header>
  )
}

export default MidNav;
