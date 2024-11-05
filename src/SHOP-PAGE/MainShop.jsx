import UpNav from "../LAYOUT/UpNav"
import MidNav from "../LAYOUT/MidNav";
import DownNav from "../LAYOUT/DownNav";
import Shop1 from './Shop1'
import Footer1 from "../LAYOUT/Footer1";
import ShopTotal from "./ShopTotal";
import ArrowTop from "../LAYOUT/ArrowTop";

export default function MainShop() {
  return (
    <>
      <UpNav/>
      <hr />
      <MidNav/>

      <Shop1/>
      <ShopTotal/>
      <hr />
      <DownNav/>

    <Footer1/>
    <ArrowTop/>
    </>
  )
}
