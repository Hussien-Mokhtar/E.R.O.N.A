import AboutUs1 from "./AboutUs1";
import AboutUs2 from "./AboutUs2";
import AboutUs3 from "./AboutUs3";
import AboutUs4 from "./AboutUs4";
import AboutUs5 from "./AboutUs5";
import AboutUs6 from "./AboutUs6";
import Footer1 from "../LAYOUT/Footer1";
import UpNav from "../LAYOUT/UpNav";
import MidNav from "../LAYOUT/MidNav";
import DownNav from "../LAYOUT/DownNav";
import ArrowTop from "../LAYOUT/ArrowTop";

export default function MainAboutUs() {
  return (
    <>
    <ArrowTop/>
    
      <UpNav/>
      <MidNav/>
      <hr />

      <AboutUs1/>
      <AboutUs2/>
      <AboutUs3/>
      <AboutUs4/>
      <AboutUs5/>
      <AboutUs6/>
      <hr />

      <DownNav/>
      <Footer1/>
    </>
  )
}
