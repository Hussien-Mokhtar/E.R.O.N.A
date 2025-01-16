// import Slider from "react-slick";
// import { useEffect, useRef, useState } from "react";
// import Home3Dynamic from "../DYNAMIC/Home3Dynamic";

// export default function Home3() {
//   let sliderRef = useRef(null);

//   const settings = {
//     infinite: true,
//     slidesToShow: 5,
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
//   const [homeSlider3, setHomeSlider3] = useState([]);
//   useEffect(() => {
//     fetch("https://ecom.quick-ad.net/public/api/four-brands")
//       .then((response) => response.json())
//       .then((data) => {
//         setHomeSlider3(data.brands);
//       }); 
//   }, []);


//   return (
//     <div className="">
//       <div className="container mx-auto  ">
//         <Slider ref={sliderRef} {...settings}>
//           {homeSlider3.map((h3) => {
//             return <Home3Dynamic key={h3.id} slider3={h3} />;
//           })}
//         </Slider>
//       </div>
//       <div className="flex justify-center items-center lg:text-4xl text-3xl font-bold my-24">
//         <div
//           data-aos="fade-up" data-aos-duration="3000"
//           className=" border-b-4 p-6 "
//         >
//           Trending product
//         </div>
//       </div>
//     </div>
//   );
// }
// import Slider from "react-slick";
// import { useEffect, useRef, useState } from "react";
// import one from "../assets/one.webp"
// import two from "../assets/two.webp"
// import three from "../assets/three.webp"
// import four from "../assets/four.webp"
// import fife from "../assets/fife.webp"
// import sex from "../assets/sex.webp"
// import seven from "../assets/seven.webp"
// import eight from "../assets/eight.webp"
// import nine from "../assets/nine.webp"
// import ten from "../assets/ten.webp"

// export default function Home3() {
//   let sliderRef = useRef(null);

//   const settings = {
//     infinite: true,
//     slidesToShow: 5,
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

//   const homeS3 = [
//     { id:1 , img:one , title1:"Embroidry t-shirt", price1:"$ 30.00" , price2:"$ 50.00" },
//     { id:2 , img:two , title1:"Knitted vist top", price1:"$ 22.00" },
//     { id:3 , img:three , title1:"Lyocell resort shirt", price1:"$ 42.00" },
//     { id:4 , img:four , title1:" Casual shirt", price1:"$ 22.00 "  },
//     { id:5 , img:fife , title1:" Classic top", price1:"$ 30.00" , price2:"$ 50.00" },
//     { id:6 , img:sex , title1:"Printed shirt", price1:"$ 18.00"  },
//     { id:7 , img:seven , title1:"Bomber jacket", price1:"$ 42.00" , price2:"$ 50.00" },
//     { id:8 , img:eight , title1:"Slim polo shirt", price1:"$ 30.00" , price2:"$ 50.00" },
//     { id:9 , img:nine , title1:"Jersey top", price1:"$ 29.00" , price2:"$ 39.00" },
//     { id:10 , img:ten , title1:"Stretch knit top", price1:"$ 30.00"  },
//   ];
//   return (
//     <div className="">
//       <div className="container mx-auto  ">
//         <Slider ref={sliderRef} {...settings}>
//           {homeS3.map((h3) => {
//             return <Home3Dynamic key={h3.id} slider3={h3} />;
//           })}
//         </Slider>
//       </div>
//       <div className="flex justify-center items-center lg:text-4xl text-3xl font-bold my-24">
//         <div
//           data-aos="fade-up" data-aos-duration="3000"
//           className=" border-b-4 p-6 "
//         >
//           Trending product
//         </div>
//       </div>
//     </div>
//   );
// }
