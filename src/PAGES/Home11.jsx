import menfashion from "../assets/menfashion.webp";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Home4Dynamic from "../DYNAMIC/Home4Dynamic";
import Home11Dynamic from "../DYNAMIC/Home11Dynamic";
import { Link } from "react-router-dom";
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
  const [homeSlider11, setHomeSlider11] = useState([]);
  useEffect(() => {
    fetch("https://ecom.quick-ad.net/public/api/latest-products")
      .then((response) => response.json())
      .then((data) => {
        setHomeSlider11(data.products);
      }); 
  }, []);




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
            
            {homeSlider11.map((h11) => {
              return <Home11Dynamic key={h11.id} slider11={h11} />;
            })}
          </Slider> 
        </div>
      </div>
    </div>
  );
}
