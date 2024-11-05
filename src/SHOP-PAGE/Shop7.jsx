import seven from "../assets/seven.webp";
import eight from "../assets/eight.webp";
import nine from "../assets/nine.webp";
import { useRef } from "react";
import Slider from "react-slick";
import Aos from "../LAYOUT/Aos";
import Shop7Dynamic from "../DYNAMIC/Shop7Dynamic";

export default function Shop7() {
    let sliderRef = useRef(null);

    const settings = {
      infinite: true,
      slidesToShow: 3, 
      slidesToScroll: 1,
      autoplay: false,
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
    const sliderShop7 = [
      {id: 1,img: seven,title: "Embroidry t-shirt",price1: "$ 30.00",price2: "$ 50.00",},
      { id: 2, img: eight, title: "Knitted vist top", price1: "$ 22.00" },
      { id: 3, img: nine, title: "Lyocell resort shirt", price1: "$ 42.00" },
    ];
  
  return (
    <div>
        
           <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-[85%]"> <Aos/>
        <Slider ref={sliderRef} {...settings}>
          {sliderShop7.map((sh7) => {
            return <Shop7Dynamic key={sh7.id} shop7={sh7} />;
          })}
        </Slider>
      </div>

    </div>
  )
}
