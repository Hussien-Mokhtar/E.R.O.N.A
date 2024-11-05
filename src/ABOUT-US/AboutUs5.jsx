import team1 from "../assets/team1.webp"
import team2 from "../assets/team2.webp"
import team3 from "../assets/team3.webp"
import team4 from "../assets/team4.webp"
import { useRef } from "react";
import Aos from "../LAYOUT/Aos";
import Slider from "react-slick";
import AboutUs5Dynamic from "../DYNAMIC/AboutUs5Dynamic"

export default function AboutUs5() {
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
            slidesToShow: 4,
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
      const sliderAboutUs5 = [
        { id:1 , img:team1 , title1:" HARVEY JONES", title2:"Ceo & founder" },
        { id:2 , img:team2 , title1:" MORY ORLANDO", title2:"Marketing" },
        { id:3 , img:team3 , title1:" HARLIE PUTH", title2:"Designer & model"  },
        { id:4 , img:team4 , title1:"TRISTIN CHINEZE", title2:"Distribution" },
      ]
  return (
    <>
    <div className="container mx-auto px-4  "
    data-aos="fade-left" data-aos-duration="3000" > <Aos/>

 <Slider ref={slider => (sliderRef = slider)} {...settings}>
 {sliderAboutUs5.map((a5)=>{
return <AboutUs5Dynamic key={a5.id} sliderA5={a5} /> 
})}
 </Slider>
</div>
<hr className="my-24 "/>

<div className="flex flex-col justify-center items-center">
  <h5 className="text-xl text-gray-500 font-bold">Get in touch</h5>
  <h1 className="text-5xl font-bold border-b-4 py-4">Get in touch</h1>
</div>
</>
)
}
