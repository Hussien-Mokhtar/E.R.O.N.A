import { Footer } from "flowbite-react";
import {  BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import eronalogo from "../assets/erona-logo.webp"
import visa1 from "../assets/visa1.png"
import visa2 from "../assets/visa2.png"
import visa3 from "../assets/visa3.png"
import visa4 from "../assets/visa4.png"
import visa5 from "../assets/visa5.png"
import visa6 from "../assets/visa6.png"
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import Aos from "../LAYOUT/Aos"
import { Link } from "react-router-dom";
export default function Footer1() {
  return (
    <>
    <div className="" data-aos="fade-right" data-aos-duration="3000" > <Aos/>
    <Footer >
      <div className="w-full ">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-5 shadow-md ">
          <div>
            <img src={eronalogo} alt="Logo" className="w-3/5 pb-6"/>            
            <Footer.LinkGroup col>
              <Footer className=" shadow-none lg:text-xl text-sm">The middle of text all the lorem Ipsum generators on the internet tend to repeat predefined chunks embarrassing hidden in the middle of text...</Footer>
              <Footer className="shadow-none lg:text-xl text-sm font-bold text-black">Payment by</Footer>
<div className="grid lg:grid-cols-4 grid-cols-3 ">
              <img src={visa1} alt="payment-img" className="lg:w-16 w-12 "/>
              <img src={visa2} alt="payment-img" className="lg:w-16 w-12 "/>
              <img src={visa3} alt="payment-img" className="lg:w-16 w-12 "/>
              <img src={visa4} alt="payment-img" className="lg:w-16 w-12 "/>
              <img src={visa5} alt="payment-img" className="lg:w-16 w-12 "/>
              <img src={visa6} alt="payment-img" className="lg:w-16 w-12 "/>

</div>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Infomation" className="lg:text-xl text-sm font-meduim text-black"/>
            <Footer.LinkGroup col className="lg:text-xl text-sm">
              <Footer.Link ><Link to="/aboutus">About us</Link></Footer.Link>
              <Footer.Link ><Link to="/contactus">Contact us</Link></Footer.Link>
              <Footer.Link > <Link to="/products">Products</Link> </Footer.Link>
              <Footer.Link > <Link to="/faqs">Faqs</Link> </Footer.Link>
              <Footer.Link >Privacy policy</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="My account" className="lg:text-xl text-sm font-meduim text-black"/>
            <Footer.LinkGroup col className="lg:text-xl text-sm">
              <Footer.Link href="#">My account</Footer.Link>
              <Footer.Link href="#">My adress</Footer.Link>
              <Footer.Link href="#">My wishlist</Footer.Link>
              <Footer.Link href="#"><Link to="/maincart">My cart</Link></Footer.Link>
              <Footer.Link href="#">Order history</Footer.Link>
              <Footer.Link href="#">Faq's</Footer.Link>

            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Followed by :" className="lg:text-xl text-sm font-meduim text-black"/>
            <Footer.LinkGroup col className="lg:text-xl text-sm">
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Instagram</Footer.Link>
              <Footer.Link href="#">Youtube</Footer.Link>
              <Footer.Link href="#">Linkedin</Footer.Link>

            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Contact us" className="lg:text-xl text-sm font-medium text-black"/>
            <Footer.LinkGroup col className="lg:text-xl text-sm">
              <Footer.Link href="#">
                <div className="flex justify-start items-center gap-3">
                <IoLocationOutline className="text-5xl"/> <span>
              145 Sector ernesto  ballesteros s/n., alicante, com San Gianleonardo Incrocio 68639</span> 
                </div>
              </Footer.Link>
              <Footer.Link href="#">   
                <div className="flex justify-start items-center gap-3">
                <LuPhoneCall className="text-2xl"/> <span>
                      (+040) 095 050 050 / (+040) 095 030 320</span>
                </div>       
                      </Footer.Link>

              <Footer.Link href="#">
                <div className="flex justify-start items-center gap-3">
                <MdMailOutline className="text-2xl"/> <span>
                      demoinfo@gmail.com / info850@gmail.com</span>

                </div>
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
<hr />

        <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between ">
          <Footer.Copyright href="#" by="Copyright © 2024 by spacingtech"  />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>

    </div>
    </>
  )
}
