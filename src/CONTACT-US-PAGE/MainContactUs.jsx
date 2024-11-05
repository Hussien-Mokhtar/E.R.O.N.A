import ArrowTop from "../LAYOUT/ArrowTop";
import DownNav from "../LAYOUT/DownNav";
import Footer1 from "../LAYOUT/Footer1";
import MidNav from "../LAYOUT/MidNav";
import UpNav from "../LAYOUT/UpNav";
import ContactUs1 from "./ContactUs1";
import ContactUs2 from "./ContactUs2";
import ContactUs3 from "./ContactUs3";

export default function MainContactUs() {
  return (
    <>
    <ArrowTop/>
          <UpNav/>
      <MidNav/>
      <hr />
      <ContactUs1/>
      <ContactUs2/>
      <ContactUs3/>
      <hr />
      <DownNav/>

      <Footer1/>
    </>
  )
}
