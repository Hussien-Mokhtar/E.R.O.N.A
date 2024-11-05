import ten from "../assets/ten.webp";
import zoom2 from "../assets/zoom2.webp";
import shirtmen from "../assets/shirtmen.webp";
import { useRef } from "react";
import Slider from "react-slick";
import Aos from "../LAYOUT/Aos";
import Shop8Dynamic from "../DYNAMIC/Shop8Dynamic";

export default function Shop8() {
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
    const sliderShop8 = [
      {id: 1,img: ten,title: "Embroidry t-shirt",price1: "$ 30.00",price2: "$ 50.00",},
      { id: 2, img: zoom2, title: "Knitted vist top", price1: "$ 22.00" },
      { id: 3, img: shirtmen, title: "Lyocell resort shirt", price1: "$ 42.00" },
    ];
  
  return (
    <div>
        
           <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-[85%]"> <Aos/>
        <Slider ref={sliderRef} {...settings}>
          {sliderShop8.map((sh8) => {
            return <Shop8Dynamic key={sh8.id} shop8={sh8} />;
          })}
        </Slider>
      </div>

    </div>
  )
}
