import ArrowTop from "../LAYOUT/ArrowTop";
import DownNav from "../LAYOUT/DownNav";
import Footer1 from "../LAYOUT/Footer1";
import MidNav from "../LAYOUT/MidNav";
import UpNav from "../LAYOUT/UpNav";
import Blog1 from "./Blog1";
import TotalBlogs from "./TotalBlogs";

export default function MainBlog() {
  return (
    <>
    <ArrowTop/>
      <UpNav/>
      <MidNav/>
      <hr />
{/* <TotalBlogs/>     */}
<Blog1/>

    <hr />
      <DownNav/>
    <Footer1/>
    </>
  )
}
