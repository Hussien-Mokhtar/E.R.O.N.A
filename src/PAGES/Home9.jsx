import Womenfashion from "../assets/womenfashion.webp";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Home9Dynamic from "../DYNAMIC/Home9Dynamic";
import { Link } from "react-router-dom";

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

  const [homeSlider9, setHomeSlider9] = useState([]);
  useEffect(() => {
    fetch("https://ecom.quick-ad.net/public/api/best-selling-products")
      .then((response) => response.json())
      .then((data) => {
        setHomeSlider9(data.products);
      }); 
  }, []);


  return (
    <div className=" container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4 mb-36">

      <div className="lg:col-span-2 lg:order-first order-last">
        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {homeSlider9.map((h9) => {
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
