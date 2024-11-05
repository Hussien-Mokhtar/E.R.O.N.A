import test1 from "../assets/test1.jpg"
import test2 from "../assets/test2.jpg"
import test3 from "../assets/test3.png"
import test4 from "../assets/test4.jpg"
import { motion } from "framer-motion"
import { useRef } from "react";
import Aos from "../LAYOUT/Aos";
import Slider from "react-slick";
import AboutUs3Dynamic from "../DYNAMIC/AboutUs3Dynamic"

export default function AboutUs3() {
    let sliderRef = useRef(null);
    const play = () => {
      sliderRef.slickPlay();
    };
    const pause = () => {
      sliderRef.slickPause();
    };
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, 
    };
    const sliderAboutUs3 = [
        { id:1 , img:test1 , title1:" WE LOVE OUR CLINTES", title2:"The best thing about shopping is that one can return the purchase if something does not work the way it should.", title3:"MIRANDA JOY" },
        { id:2 , img:test2 , title1:" WE LOVE OUR CLINTES", title2:"The best thing about shopping is that one can return the purchase if something does not work the way it should." , title3:"JOSEPH JON"  },
        { id:3 , img:test3 , title1:" WE LOVE OUR CLINTES", title2:"The best thing about shopping is that one can return the purchase if something does not work the way it should." ,title3:"MARIANA JEM"  },
        { id:4 , img:test4 , title1:" WE LOVE OUR CLINTES", title2:"The best thing about shopping is that one can return the purchase if something does not work the way it should." , title3:"JACK MARK"},
      ]

  return (
    <>
              <motion.div className="container mx-auto px-4  "
         data-aos="fade-left" data-aos-duration="3000" > <Aos/>
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
      {sliderAboutUs3.map((a3)=>{
    return <AboutUs3Dynamic key={a3.id} sliderA3={a3} /> 
})}
      </Slider>
    </motion.div>

    </>
  )
} 
