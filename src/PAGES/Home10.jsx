import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Home10Dynamic from "../DYNAMIC/Home10Dynamic";

export default function Home10() {
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

  const [homeBlogSlider, setHomeBlogSlider] = useState([]);
  useEffect(() => {
    fetch("https://ecom.quick-ad.net/public/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        setHomeBlogSlider(data.blogs);
      });
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="">
        <div className="flex justify-center items-center lg:text-4xl text-3xl font-bold my-24">
          <div
            data-aos="fade-up" data-aos-duration="1000"
            className=" border-b-4 p-6 " >
            Follow Our Latest Blog
          </div>
        </div>
      </div>

      <div className=" container mx-auto ">
        <Slider ref={sliderRef} {...settings}>
          {homeBlogSlider.map((h10) => {
            return <Home10Dynamic key={h10.id} slider10={h10} />;
          })}
        </Slider>
      </div>
    </div>
  );
}