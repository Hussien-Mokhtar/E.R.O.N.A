import ArrowTop from "../LAYOUT/ArrowTop";
import DownNav from "../LAYOUT/DownNav";
import Footer1 from "../LAYOUT/Footer1";
import MidNav from "../LAYOUT/MidNav";
import UpNav from "../LAYOUT/UpNav";
import TotalBlogs from "./TotalBlogs";

export default function MainBlog() {
  return (
    <>
    <ArrowTop/>
      <UpNav/>
      <MidNav/>
      <hr />
<TotalBlogs/>    

    <hr />
      <DownNav/>
    <Footer1/>
    </>
  )
}
