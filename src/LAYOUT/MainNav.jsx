import { useEffect } from "react";
import UpNav from "../LAYOUT/UpNav"
import MidNav from "../LAYOUT/MidNav";
import DownNav from "../LAYOUT/DownNav";
import MainHome from "../PAGES/MainHome";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer1 from "./Footer1";

export default function MainNav() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <UpNav/>
      <MidNav/>
      <hr />
      <MainHome />
      <DownNav/>

      <Footer1/>
    </>
  );
}
