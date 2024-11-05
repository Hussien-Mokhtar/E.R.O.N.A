import { motion } from "framer-motion";
import background from "../assets/background.webp"
import { useRef } from "react";
import handbag from "../assets/handbag.webp"
import shosemen from "../assets/shosemen.webp"
import hatmen from "../assets/hatmen.webp"
import glasses from "../assets/glasses.webp"
import shortmen from "../assets/shortmen.webp"
import shirtmen from "../assets/shirtmen.webp"

export default function Shop1() {
    let sliderRef = useRef(null);
  
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const sliderShop1 = [
        {id: 1 , img: handbag , title:"Hand bag" },
        {id: 2 , img: shosemen , title:"Shose men" },
        {id: 3 , img: hatmen , title:"Casual hat" },
        {id: 4 , img: glasses , title:"Night glasses" },
        {id: 5 , img: shortmen , title:"Men wear" },
        {id: 6 , img: shirtmen , title:"Shirt men" },
        ];
  
  return (
    <>
      <motion.div className="bg lg:text-xl text-sm "
    initial={{ x: '-150%' }}
   animate={{ x: 0 }}
    transition={{ duration: 1, ease: 'easeOut'  }} >
      <img src={background} alt="" className="w-full  "/>
      <div className="text-white ">
      <h5 className=" bg-title flex flex-col "> HOME - SHOP <span className=" font-bold mt-2 lg:text-4xl text-sm">SHOP</span></h5>
      </div>
    </motion.div>

    </>
  )
}
