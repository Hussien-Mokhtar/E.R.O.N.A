import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.png";
import test4 from "../assets/test4.jpg";
import Home8Dynamic from "../DYNAMIC/Home8Dynamic";
import { useRef } from "react";

import Slider from "react-slick";

export default function Home8() {
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
  const sliderHome8 = [
    {id: 1,img: test1 ,title1:"it was popularised in the 1960s with the release of letraset sheets containing lorem lpsum passages, and more resently with desktop publishing software including versions.",title2: "Marsha mellow",title3: "Store customer",},
    {id: 2,img: test2,title1:"it was popularised in the 1960s with the release of letraset sheets containing lorem lpsum passages, and more resently with desktop publishing software including versions.",title2: "Chrisp. bacon",title3: "Store customer", },
    { id: 3, img: test3, title1:   "it was popularised in the 1960s with the release of letraset sheets containing lorem lpsum passages, and more resently with desktop publishing software including versions.", title2: "Aida bugg", title3: "Store customer",},
    { id: 4, img: test4, title1: " it was popularised in the 1960s with the release of letraset sheets containing lorem lpsum passages, and more resently with desktop publishing software including versions.", title2: "Marsha mellow", title3: "Store customer",},
  ];

  return (
    <>
      <div className="container mx-auto "
        data-aos="fade-left" data-aos-duration="1000"
      >
        <Slider ref={sliderRef} {...settings}>
          {sliderHome8.map((h8) => {
            return <Home8Dynamic key={h8.id} slider8={h8} />;
          })}
        </Slider>
      </div>
    </> 
  );
}