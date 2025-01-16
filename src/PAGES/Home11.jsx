// import menfashion from "../assets/menfashion.webp";
// import { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
// import Home4Dynamic from "../DYNAMIC/Home4Dynamic";
// import Home11Dynamic from "../DYNAMIC/Home11Dynamic";
// import { Link } from "react-router-dom";
// export default function Home11() {
//   let sliderRef = useRef(null);

//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
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
//   const [homeSlider11, setHomeSlider11] = useState([]);
//   useEffect(() => {
//     fetch("https://ecom.quick-ad.net/public/api/latest-products")
//       .then((response) => response.json())
//       .then((data) => {
//         setHomeSlider11(data.products);
//       }); 
//   }, []);




//   return ( 
//     <div className=" container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4  lg:mb-36 ">

//       <div className=" relative "
//        data-aos="fade-right" data-aos-duration="1000" >
        
//         <img
//           src={menfashion} alt="Men fashion img" className="py-8 h-full hover:scale-110 duration-500"/>

//         <div className=" absolute bottom-16 left-14">
//           <h5 className=" font-extrabold font-mono text-3xl">Men Fashion</h5>
//           <button className=" bg-orange-500 px-8 py-3 text-white rounded-lg  mt-4 hover:bg-black duration-500 hover:scale-110 font-bold">
//           <Link to="/shop">SHOP NOW</Link>
//           </button>
//         </div> 
//       </div>

//       <div className="lg:col-span-2">
//         <div className=" " data-aos="fade-left" data-aos-duration="1000">
//           <Slider ref={sliderRef} {...settings}>
            
//             {homeSlider11.map((h11) => {
//               return <Home11Dynamic key={h11.id} slider11={h11} />;
//             })}
//           </Slider> 
//         </div>
//       </div>
//     </div>
//   );
// }
import menfashion from "../assets/menfashion.webp";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Home11Dynamic from "../DYNAMIC/Home11Dynamic";
import { Link } from "react-router-dom";
import one from "../assets/one.webp"
import two from "../assets/two.webp"
import three from "../assets/three.webp"
import four from "../assets/four.webp"
import fife from "../assets/fife.webp"
import sex from "../assets/sex.webp"
import seven from "../assets/seven.webp"
import eight from "../assets/eight.webp"
import nine from "../assets/nine.webp"
import ten from "../assets/ten.webp"

export default function Home11() {
  let sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
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
  const homeS11 = [
    { id:1 , img:one , title1:"Embroidry t-shirt", price1:"$ 30.00" , price2:"$ 50.00" },
    { id:2 , img:two , title1:"Knitted vist top", price1:"$ 22.00" },
    { id:3 , img:three , title1:"Lyocell resort shirt", price1:"$ 42.00" },
    { id:4 , img:four , title1:" Casual shirt", price1:"$ 22.00 "  },
    { id:5 , img:fife , title1:" Classic top", price1:"$ 30.00" , price2:"$ 50.00" },
    { id:6 , img:sex , title1:"Printed shirt", price1:"$ 18.00"  },
    { id:7 , img:seven , title1:"Bomber jacket", price1:"$ 42.00" , price2:"$ 50.00" },
    { id:8 , img:eight , title1:"Slim polo shirt", price1:"$ 30.00" , price2:"$ 50.00" },
    { id:9 , img:nine , title1:"Jersey top", price1:"$ 29.00" , price2:"$ 39.00" },
    { id:10 , img:ten , title1:"Stretch knit top", price1:"$ 30.00"  },
  ];
  return ( 
    <div className=" container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4  lg:mb-36 ">

      <div className=" relative "
       data-aos="fade-right" data-aos-duration="1000" >
        
        <img
          src={menfashion} alt="Men fashion img" className="py-8 h-full hover:scale-110 duration-500"/>

        <div className=" absolute bottom-16 left-14">
          <h5 className=" font-extrabold font-mono text-3xl">Men Fashion</h5>
          <button className=" bg-orange-500 px-8 py-3 text-white rounded-lg  mt-4 hover:bg-black duration-500 hover:scale-110 font-bold">
          <Link to="/shop">SHOP NOW</Link>
          </button>
        </div> 
      </div>

      <div className="lg:col-span-2">
        <div className=" " data-aos="fade-left" data-aos-duration="1000">
          <Slider ref={sliderRef} {...settings}>
            
            {homeS11.map((h11) => {
              return <Home11Dynamic key={h11.id} slider11={h11} />;
            })}
          </Slider> 
        </div>
      </div>
    </div>
  );
}
