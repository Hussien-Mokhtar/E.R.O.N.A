import ArrowTop from "../LAYOUT/ArrowTop";
import DownNav from "../LAYOUT/DownNav";
import Footer1 from "../LAYOUT/Footer1";
import MidNav from "../LAYOUT/MidNav";
import UpNav from "../LAYOUT/UpNav";
import Products1 from "./Products1";

export default function MainProducts() {
  return (
    <>
      <UpNav/>
      <MidNav/>
      <hr />

      <Products1/>
      <hr />
      <DownNav/>

      <Footer1/>
      <ArrowTop/>
    </>
  )
}
