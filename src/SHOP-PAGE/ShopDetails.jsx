import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Products4 from "../PRODUCTS-PAGE/Products4";
import Aos from "../LAYOUT/Aos";
import TimerCounter from '../LAYOUT/TimerCounter'
import UpNav from "../LAYOUT/UpNav"
import MidNav from "../LAYOUT/MidNav"
import DownNav from "../LAYOUT/DownNav"
import Footer1 from "../LAYOUT/Footer1"
export default function ShopDetails() {
  const par = useParams();
  const [shop5, setShop5] = useState([]);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    fetch(`https://ecom.quick-ad.net/public/api/products/product-details/${par.id}`)
      .then((response) => response.json())
      .then((data) => setShop5(data.product))
      .catch((error) => console.error("Error fetching data:", error));
  }, [par.id]);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <>
    <UpNav/>
    <MidNav/>
    <hr />
      {shop5.map((s) => (
        <div key={s.id} >
          <div className="container mx-auto px-4 grid lg:grid-cols-3 grid-cols-1 w-full ">
            <div className="lg:col-span-1" data-aos="fade-right" data-aos-duration="1000"><Aos/>
              <div className="slider-container w-[100%]" data-aos="fade-right" data-aos-duration="2500">
                <Slider asNavFor={nav2} ref={sliderRef1}>
                  {[...Array(6)].map((_, index) => (
                    <div key={index}>
                      <h3>
                        <img src={s.thumbnail_img} alt="zoom-img" className="w-full h-[40rem] py-10 duration-200 cursor-zoom-in hover:scale-110" />
                      </h3>
                    </div>
                  ))}
                </Slider>

                <Slider asNavFor={nav1} ref={sliderRef2} slidesToShow={5} swipeToSlide={true} focusOnSelect={true} className="cursor-pointer">
                  {[...Array(6)].map((_, index) => (
                    <div key={index}>
                      <h3>
                        <img src={s.thumbnail_img} alt="zoom-img" className="px-2" />
                      </h3>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="w-full lg:col-span-2" data-aos="fade-left" data-aos-duration="1000">
            <div className=' w-full py-8 px-20  '>
      <h5 className='lg:text-2xl text-sm py-4 font-bold'>{s.name}</h5>
      <h5 className='lg:flex lg:ml-0 ml-[-4rem]'>  <span className='pt-2 px-4 text-xl hidden sm:block '></span> <span className='pt-2 text-red-500 font-bold lg:text-xl text-sm lg:ml-0 ml-16'>22 sold in last 2 hours</span></h5>
      <h1 className='text-orange-500 lg:text-5xl text-4xl font-bold py-5'>$42.00</h1>
      <h5 className='py-4 lg:text-xl text-sm font-semibold'>Availability: <span className='text-gray-400'><input type="radio" className='text-green-500' defaultChecked/> 14 in stock</span></h5>
      <hr />
      <p className=' w-full py-6 text-sm font-semibold text-gray-400 leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting
    <br/>industry dummy text and typesetting industry</p>

<button className='bg-red-200 text-red-600 lg:text-[18px] text-[14px] font-bold py-4 lg:pl-2 lg:pr-20
lg:flex-row flex '>Hurry up! Sale ends in: <span className=' w-full '> <TimerCounter/> </span></button>
</div>

              <Products4 />
            </div>
          </div>
        </div>
      ))}
      <DownNav/>
      <Footer1/>
    </>
  );
}
