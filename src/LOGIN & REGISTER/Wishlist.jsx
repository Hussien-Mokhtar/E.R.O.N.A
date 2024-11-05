import UpNav from "../LAYOUT/UpNav";
import MidNav from "../LAYOUT/MidNav";
import DownNav from "../LAYOUT/DownNav";
import { motion } from "framer-motion";
import background from "../assets/background.webp";
import Footer1 from "../LAYOUT/Footer1";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Wishlist() {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        const loadedWishlist = savedWishlist ? JSON.parse(savedWishlist) : [];
        setWishlist(loadedWishlist);
    }, []);

    const navigate = useNavigate();
    navigate("/login");


    return (
        <>
            <UpNav />
            <MidNav />
            <hr />
            <DownNav />
            <motion.div className="bg lg:text-xl text-sm "
                initial={{ x: '-150%' }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}>
                <img src={background} alt="" className="w-full" />
                <div className="text-white">
                    <h5 className="bg-title flex flex-col "> HOME - WishList <span className="font-bold mt-2 lg:text-4xl text-sm">WishList</span></h5>
                </div>
            </motion.div>

            <div className="text-center pt-20 text-3xl font-semibold">
                {wishlist.length < 0 ? (
                    wishlist.map((item, index) => (
                        item && item.id ? (
                            <div key={item.id}>{item.name}</div>
                        ) : (
                            <div key={index}></div>
                        )
                    ))
                ) : (
                    <h1>Your wishlist is empty <span className="underline hover:underline hover:text-orange-500 duration-300"> <Link to="/shop">return to store</Link> </span></h1>
                    
                )}
            </div>
            <Footer1 />
        </>
    );
}
