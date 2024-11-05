import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import Home3Dynamic from "../DYNAMIC/Home3Dynamic";

export default function Home3() {
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
  const [homeSlider3, setHomeSlider3] = useState([]);
  useEffect(() => {
    fetch("https://ecom.quick-ad.net/public/api/four-brands")
      .then((response) => response.json())
      .then((data) => {
        setHomeSlider3(data.brands);
      }); 
  }, []);


  return (
    <div className="">
      <div className="container mx-auto  ">
        <Slider ref={sliderRef} {...settings}>
          {homeSlider3.map((h3) => {
            return <Home3Dynamic key={h3.id} slider3={h3} />;
          })}
        </Slider>
      </div>
      <div className="flex justify-center items-center lg:text-4xl text-3xl font-bold my-24">
        <div
          data-aos="fade-up" data-aos-duration="3000"
          className=" border-b-4 p-6 "
        >
          Trending product
        </div>
      </div>
    </div>
  );
}
