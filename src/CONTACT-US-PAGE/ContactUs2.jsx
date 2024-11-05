import contactus from "../assets/contact-us.webp"
import london from "../assets/london.png"
import france from "../assets/france.png"
import canada from "../assets/canada.png"
import england from "../assets/england.png"
import ContactUs2Dynamic from "../DYNAMIC/ContactUs2Dynamic"
import { useRef } from "react";
import Slider from "react-slick";

export default function ContactUs2() {
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
      const contact3 = [
        { id:1 , img:london , title1:" 425 Broad way 20th floor pharchard view,London", title2:"+91123 456 7890 support@store.com", title3:"London" },
        { id:2 , img:france , title1:" 27Eden walk eden center orchard view,Paris,France", title2:"+91123 456 7890 support@store.com" , title3:"France"  },
        { id:3 , img:canada , title1:"523 north stockport road bridge,toronto,Canada", title2:"+91123 456 7890 support@store.com" ,title3:"Canada"  },
        { id:4 , img:england , title1:" 048 Holburn street 20th floor camberley,England", title2:"+91123 456 7890 support@store.com" , title3:"England"},
      ]
  return (
    <>
      <div className="py-16">
            <img src={contactus} alt="contact-us img"/>
      </div>

      <div className="container mx-auto px-4  lg:-mt-[30rem] -mt-20 bg-white "
         data-aos="fade-left" data-aos-duration="3000" > 
        <h1 className="flex justify-center items-center lg:text-5xl text-2xl font-bold py-10">Get in touch</h1>
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
      {contact3.map((c2)=>{
    return <ContactUs2Dynamic key={c2.id} sliderc2={c2} /> 
})}
      </Slider>
    </div>

    </>
  )
}