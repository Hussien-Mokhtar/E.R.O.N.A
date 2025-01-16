// import Womenfashion from "../assets/womenfashion.webp";
// import { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
// import Home9Dynamic from "../DYNAMIC/Home9Dynamic";
// import { Link } from "react-router-dom";

// export default function Home9() {
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

//   const [homeSlider9, setHomeSlider9] = useState([]);
//   useEffect(() => {
//     fetch("https://ecom.quick-ad.net/public/api/best-selling-products")
//       .then((response) => response.json())
//       .then((data) => {
//         setHomeSlider9(data.products);
//       }); 
//   }, []);


//   return (
//     <div className=" container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4 mb-36">

//       <div className="lg:col-span-2 lg:order-first order-last">
//         <div className="">
//           <Slider ref={sliderRef} {...settings}>
//             {homeSlider9.map((h9) => {
//               return <Home9Dynamic key={h9.id} slider9={h9} />;
//             })}
//           </Slider>
//         </div>
//       </div>

//       <div className=" relative " data-aos="fade-left" data-aos-duration="1000">
        
//         <img src={Womenfashion} alt="Women fashion img" className="py-8 h-full"
//         />
//         <div className=" absolute bottom-16 left-14 lg:order-last order-first">
//           <h5 className=" font-extrabold font-mono text-3xl">Women Fashion</h5>
//           <button className=" bg-orange-500 px-8 py-3 text-white rounded-lg  mt-4 hover:bg-black duration-500 hover:scale-110 font-bold">
//           <Link to="/shop">SHOP NOW</Link>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import Womenfashion from "../assets/womenfashion.webp";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Home9Dynamic from "../DYNAMIC/Home9Dynamic";
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

export default function Home9() {
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

  const homeS9 = [
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
    <div className=" container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4 mb-36">

      <div className="lg:col-span-2 lg:order-first order-last">
        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {homeS9.map((h9) => {
              return <Home9Dynamic key={h9.id} slider9={h9} />;
            })}
          </Slider>
        </div>
      </div>

      <div className=" relative " data-aos="fade-left" data-aos-duration="1000">
        
        <img src={Womenfashion} alt="Women fashion img" className="py-8 h-full"
        />
        <div className=" absolute bottom-16 left-14 lg:order-last order-first">
          <h5 className=" font-extrabold font-mono text-3xl">Women Fashion</h5>
          <button className=" bg-orange-500 px-8 py-3 text-white rounded-lg  mt-4 hover:bg-black duration-500 hover:scale-110 font-bold">
          <Link to="/shop">SHOP NOW</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
