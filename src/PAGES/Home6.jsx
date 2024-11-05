import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Home6Dynamic from "../DYNAMIC/Home6Dynamic";
import Aos from "../LAYOUT/Aos";

export default function Home6() {
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
  const [homeSlider6, setHomeSlider6] = useState([]);
  useEffect(() => {
    fetch("https://ecom.quick-ad.net/public/api/hot-offer-products")
      .then((response) => response.json())
      .then((data) => {
        setHomeSlider6(data.products);
      }); 
  }, []);


  return (
    <div className=" container mx-auto">
      <div className="flex justify-center items-center text-4xl font-bold my-24">
        <div data-aos="fade-up" data-aos-duration="1000" className=" border-b-4 p-6 "
        >
          Feature products
        </div>
      </div>

      <div data-aos="fade-left" data-aos-duration="1000"><Aos/>
        <Slider ref={sliderRef} {...settings}>
          {homeSlider6.map((h6) => {
            return <Home6Dynamic key={h6.id} slider6={h6} />;
          })}
        </Slider>
      </div>
    </div>
  );
}