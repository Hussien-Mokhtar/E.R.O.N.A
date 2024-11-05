import { motion } from "framer-motion"
import background from "../assets/background.webp"
import{ useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import seven from "../assets/seven.webp"
import zoom2 from "../assets/zoom2.webp"
import zoom3 from "../assets/zoom3.webp"
import zoom4 from "../assets/zoom4.webp"
import zoom5 from "../assets/zoom5.webp"
import zoom6 from "../assets/zoom6.webp"
import Aos from "../LAYOUT/Aos";
import Products2 from "./Products2";
import Products3 from "./Products3";
import Products4 from "./Products4";
import Products5 from "./Products5";
import Products6 from "./Products6";

export default function Products1() {
    const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <>
        <motion.div className="bg lg:text-xl text-sm "
    initial={{ x: '-150%' }}
   animate={{ x: 0 }}
    transition={{ duration: 1, ease: 'easeOut'  }} >
      <img src={background} alt="" className="w-full  "/>
      <div className="text-white ">
      <h5 className=" bg-title flex flex-col "> HOME - PRODUCTS <span className=" font-bold mt-2 lg:text-4xl text-sm">PRODUCTS</span></h5>
      </div>
    </motion.div>

    <div className="container mx-auto px-4 pt-10 grid lg:grid-cols-3 grid-cols-1 w-full ">
      <div className=" lg:col-span-1" data-aos="fade-right" data-aos-duration="1000">
      <div className="slider-container w-[100%]  "
         data-aos="fade-right" data-aos-duration="2500"  ><Aos/>
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} >
        <div> <h3><img src={seven} alt="zoom-img" className="w-full h-[40rem] py-10 duration-200 cursor-zoom-in hover:scale-110 " /></h3> </div>
        <div> <h3><img src={zoom2} alt="zoom-img" className="w-full h-[40rem] py-10 duration-200 cursor-zoom-in hover:scale-110 " /></h3> </div>
        <div> <h3><img src={zoom3} alt="zoom-img" className="w-full h-[40rem] py-10 duration-200 cursor-zoom-in hover:scale-110 " /></h3> </div>
        <div> <h3><img src={zoom4} alt="zoom-img" className="w-full h-[40rem] py-10 duration-200 cursor-zoom-in hover:scale-110 " /></h3> </div>
        <div> <h3><img src={zoom5} alt="zoom-img" className="w-full h-[40rem] py-10 duration-200 cursor-zoom-in hover:scale-110 " /></h3> </div>
        <div> <h3><img src={zoom6} alt="zoom-img" className="w-full h-[40rem] py-10 duration-200 cursor-zoom-in hover:scale-110 " /></h3> </div>

      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true} className=" cursor-pointer">
        <div> <h3><img src={seven} alt="zoom-img" className="px-2" /></h3> </div>
        <div> <h3><img src={zoom2} alt="zoom-img" className="px-2" /></h3> </div>
        <div> <h3><img src={zoom3} alt="zoom-img" className="px-2" /></h3> </div>
        <div> <h3><img src={zoom4} alt="zoom-img" className="px-2" /></h3> </div>
        <div> <h3><img src={zoom5} alt="zoom-img" className="px-2" /></h3> </div>
        <div> <h3><img src={zoom6} alt="zoom-img" className="px-2" /></h3> </div>
      </Slider>
    </div>

    </div>
      
      
      <div className="w-full lg:col-span-2" data-aos="fade-left" data-aos-duration="1000">
      <Products2/>
      <Products3/>
      <Products4/>
      </div>
    </div>


    <div className="flex justify-center items-center lg:text-4xl text-3xl font-bold my-10">
        <div data-aos="fade-up" data-aos-duration="2000"
        className=" border-b-4 p-2 ">
        Trending product
        </div>
    </div>

    <div className="">

    <Products5/>
    <Products6/>

      </div>
    </>
  )
}
