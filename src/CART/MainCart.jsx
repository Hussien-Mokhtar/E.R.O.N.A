import UpNav from "../LAYOUT/UpNav";
import MidNav from "../LAYOUT/MidNav";
import DownNav from "../LAYOUT/DownNav";
import { motion } from "framer-motion";
import background from "../assets/background.webp";
import Footer1 from "../LAYOUT/Footer1";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";

export default function MainCart() {
    const [mainCart ,setMainCart] = useState([]);

    useEffect(() => {
        const savedMainCart = localStorage.getItem('MainCart');
        const loadedMainCart = savedMainCart ? JSON.parse(savedMainCart) : [];
        setMainCart(loadedMainCart);
    }, []);

    return (
        <>
            <UpNav />
            <MidNav />
            <hr />

            <motion.div className="bg lg:text-xl text-sm "
                initial={{ x: '-150%' }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}>
                <img src={background} alt="" className="w-full" />
                <div className="text-white">
                    <h5 className="bg-title flex flex-col "> HOME - Cart <span className="font-bold mt-2 lg:text-4xl text-sm">Cart</span></h5>
                </div>
            </motion.div>

            <div className="text-center pt-20 text-3xl font-semibold">
                {MainCart.length < 0 ? (
                    MainCart.map((item, index) => (
                        item && item.id ? (
                            <div key={item.id}>{item.name}</div>
                        ) : (
                            <div key={index}></div>
                        )
                    ))
                ) : (
                    
                    <h1 className="flex flex-col gap-4 pb-4">
                        <h5 className="flex justify-center items-center text-4xl text-gray-500"><FiShoppingBag/></h5>
                         Your Cart is empty <span className="underline hover:underline hover:text-orange-500 duration-300"> <Link to="/shop"><button className="bg-[#f26440] text-white py-4 px-4 hover:bg-black duration-200">CONTINUE SHOPPING</button></Link> </span></h1>
                )}
            </div>
            <hr />
            <DownNav />

            <Footer1 />
        </>
    );
}
