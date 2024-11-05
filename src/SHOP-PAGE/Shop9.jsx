import fife from "../assets/fife.webp";
import three from "../assets/three.webp";
import sex from "../assets/shirtmen.webp";
import { useRef } from "react";
import Slider from "react-slick";
import Aos from "../LAYOUT/Aos";
import Shop9Dynamic from "../DYNAMIC/Shop9Dynamic";

export default function Shop9() {
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
    const sliderShop9 = [
      {id: 1,img: fife,title: "Embroidry t-shirt",price1: "$ 30.00",price2: "$ 50.00",},
      { id: 2, img: three, title: "Knitted vist top", price1: "$ 22.00" },
      { id: 3, img: sex, title: "Lyocell resort shirt", price1: "$ 42.00" },
    ];
  
  return (
    <div>
        
           <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-[85%]"> <Aos/>
        <Slider ref={sliderRef} {...settings}>
          {sliderShop9.map((sh9) => {
            return <Shop9Dynamic key={sh9.id} shop9={sh9} />;
          })}
        </Slider>
      </div>

    </div>
  )
}
