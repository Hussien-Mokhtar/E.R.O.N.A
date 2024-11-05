import { useEffect, useState } from "react"
import Blog1Dynamic from "../DYNAMIC/Blog1Dynamic"
export default function Blog1() {
      const [blogSlider, setBlogSlider] = useState([]);
      useEffect(() => {
        fetch("https://ecom.quick-ad.net/public/api/blogs")
          .then((response) => response.json())
          .then((data) => {
            setBlogSlider(data.blogs);
          });
      }, []);
    
  return (
    <>

    <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 ">
{blogSlider.map((b1)=>{
 return <Blog1Dynamic key={b1.id} blog1={b1}/>
})}
    </div>
    </>
  )
}
