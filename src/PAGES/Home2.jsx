// import { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
// import Home2Dynamic from "../DYNAMIC/Home2Dynamic";

// export default function Home2() {
//   let sliderRef = useRef(null);

//   const settings = { 
//     infinite: true,
//     slidesToShow: 4,
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
//   const [homeSlider2, setHomeSlider2] = useState([]);
//   useEffect(() => {
//     fetch("https://ecom.quick-ad.net/public/api/four-categories")
//       .then((response) => response.json())
//       .then((data) => {
//         setHomeSlider2(data.categories);
//       });
//   }, []);


//   return (
//     <div className=" container mx-auto text-sm md:text-2xl lg:text-3xl xl:text-4xl w-full text-center">
//       <div className="flex justify-center items-center lg:text-4xl text-2xl font-bold my-20">
//         <div
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           className="border-b-4 p-6"
//         >
//           Featuer category
//         </div>
//       </div>

//       <div className="" data-aos="fade-right" data-aos-duration="1000">
//         <Slider ref={sliderRef} {...settings}>
//           {homeSlider2.map((h2) => {
//             return <Home2Dynamic key={h2.id} slider2={h2} />;
//           })}
//         </Slider>
//       </div>
//     </div>
//   );
// }
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Home2Dynamic from "../DYNAMIC/Home2Dynamic";
import purple from "../assets/purple.png"
import children from "../assets/children.png"
import boy from "../assets/boy.png"
import shose from "../assets/shosemen.webp"
import man from "../assets/man_dp3.jpg"

export default function Home2() {
  let sliderRef = useRef(null);

  const settings = { 
    infinite: true,
    slidesToShow: 4,
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
  const homeS2 = [
    { id: 1, img: purple, title: "Wome wear",count: "15+Items" },
    { id: 2, img: children, title: "Kids wear",count: "15+Items"  },
    { id: 3, img: boy, title: "Boys wear",count: "15+Items" },
    { id: 4, img: shose, title: "Shose men",count: "15+Items" },
    { id: 5, img: man, title: "Men wear",count: "15+Items" },
  ];
  return (
    <div className=" container mx-auto text-sm md:text-2xl lg:text-3xl xl:text-4xl w-full text-center">
      <div className="flex justify-center items-center lg:text-4xl text-2xl font-bold my-20">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="border-b-4 p-6">
          Featuer category
        </div>
      </div>

      <div className="" data-aos="fade-right" data-aos-duration="1000">
        <Slider ref={sliderRef} {...settings}>
          {homeS2.map((h2) => {
            return <Home2Dynamic key={h2.id} slider2={h2} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
