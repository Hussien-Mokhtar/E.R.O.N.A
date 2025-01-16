//   import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
// import Home1Dynamic from "../DYNAMIC/Home1Dynamic";

// export default function Home1() {
//   let sliderRef = useRef(null);

//   const settings = {
//     infinite: true,
//     slidesToShow: 1, 
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   const [homeSlider1, setHomeSlider1] = useState([]);
//   useEffect(() => {
//     fetch("https://ecom.quick-ad.net/public/api/limit-sliders")
//       .then((response) => response.json())
//       .then((data) => {
//         setHomeSlider1(data.data);
//       });
//   }, []);

//   return (
//     <div className="w-full h-auto relative">
//       <div className=" " data-aos="fade-right" data-aos-duration="1000">
//         <Slider ref={sliderRef} {...settings}>
//           {homeSlider1.map((h1) => {
//             return <Home1Dynamic key={h1.id} slider1={h1} />;
//           })}
//         </Slider>
//       </div>

//       <motion.div
//         className="w-full flex flex-col lg:justify-end justify-center items-center absolute left-[50%] top-[30%]  translate-x-[-50%] translate-y-[-50%]  text-sm md:text-2xl lg:text-3xl xl:text-4xl "
//         initial={{ opacity: 0, x: "-150%" }}
//         animate={{ opacity: 1, x: "-50%" }}
//         transition={{ duration: 1, ease: "easeOut" }}>

//         <h5 className="text-orange-500 font-medium mb-2 text-center ">
//           Prefect Design Every Cloth 2024
//         </h5>

//         <h1 className=" font-extrabold lg:mb-5 ">UNIQUE FASHION</h1>

//         <button
//           className=" bg-orange-500 text-white lg:p-4 flex font-bold
//     hover:bg-black hover:scale-110 duration-500 " >
//           SHOP COLLECTION
//         </button>
//       </motion.div>
//     </div>
//   );
// }
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Home1Dynamic from "../DYNAMIC/Home1Dynamic";
import slider from "../assets/slider.webp"
export default function Home1() {
  let sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const homeS1 = [
    {id:1,img:slider},{id:1,img:slider},{id:1,img:slider},

]
  return (
    <div className="w-full h-auto relative">
      <div className=" " data-aos="fade-right" data-aos-duration="1000">
        <Slider ref={sliderRef} {...settings}>
          {homeS1.map((h1) => {
            return <Home1Dynamic key={h1.id} slider1={h1} />;
          })}
        </Slider>
      </div>

      <motion.div
        className="w-full flex flex-col lg:justify-end justify-center items-center absolute left-[50%] top-[30%]  translate-x-[-50%] translate-y-[-50%]  text-sm md:text-2xl lg:text-3xl xl:text-4xl "
        initial={{ opacity: 0, x: "-150%" }}
        animate={{ opacity: 1, x: "-50%" }}
        transition={{ duration: 1, ease: "easeOut" }}>

        <h5 className="text-orange-500 font-medium mb-2 text-center ">
          Prefect Design Every Cloth 2024
        </h5>

        <h1 className=" font-extrabold lg:mb-5 ">UNIQUE FASHION</h1>

        <button
          className=" bg-orange-500 text-white lg:p-4 flex font-bold
    hover:bg-black hover:scale-110 duration-500 " >
          SHOP COLLECTION
        </button>
      </motion.div>
    </div>
  );
}
