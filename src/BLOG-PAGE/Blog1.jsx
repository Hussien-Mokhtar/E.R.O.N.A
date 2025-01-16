// import { useEffect, useState } from "react"
// import Blog1Dynamic from "../DYNAMIC/Blog1Dynamic"
// export default function Blog1() {
//       const [blogSlider, setBlogSlider] = useState([]);
//       useEffect(() => {
//         fetch("https://ecom.quick-ad.net/public/api/blogs")
//           .then((response) => response.json())
//           .then((data) => {
//             setBlogSlider(data.blogs);
//           });
//       }, []);
    
//   return (
//     <>

//     <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 ">
// {blogSlider.map((b1)=>{
//  return <Blog1Dynamic key={b1.id} blog1={b1}/>
// })}
//     </div>
//     </>
//   )
// }
import story1 from "../assets/story1.webp"
import story2 from "../assets/story2.webp"
import story3 from "../assets/story3.webp"
import story4 from "../assets/story4.webp"
import story5 from "../assets/story5.webp"
import Blog1Dynamic from "../DYNAMIC/Blog1Dynamic"
export default function Blog1() {
      const blogSlider=[
            { id:1 , img:story1 , title:"12 JUN,2025", title1:"Why do we use it?", title2:"As part of our mession create space for women to express their sensulity with our shame..." },
            { id:2 , img:story2 ,title:"12 JUN,2025", title1:"Why do we use it?",title2:"As part of our mession create space for women to express their sensulity with our shame..." },
            { id:3 , img:story3 ,title:"12 JUN,2025", title1:"Why do we use it?",title2:"As part of our mession create space for women to express their sensulity with our shame..." },
            { id:4 , img:story4 ,title:"12 JUN,2025", title1:" Why do we use it?",title2:"As part of our mession create space for women to express their sensulity with our shame..."},
            { id:5 , img:story5 ,title:"12 JUN,2025", title1:"Why do we use it?",title2:"As part of our mession create space for women to express their sensulity with our shame..." },
            { id:6 , img:story1 , title:"12 JUN,2025", title1:"Why do we use it?", title2:"As part of our mession create space for women to express their sensulity with our shame..." },
      ]
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
