// import { useEffect, useRef, useState } from "react";
// import Shop5Dynamic from '../DYNAMIC/Shop5Dynamic';

// export default function Shop5() {
//     const [shop5, setShop5] = useState([]);
//     useEffect(() => {
//       fetch("https://ecom.quick-ad.net/public/api/products")
//         .then((response) => response.json())
//         .then((data) => {
//           setShop5(data.products); 
//         }); 
//     }, []);
  
//   return (
//     <div>
        
//            <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-[85%]">
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
//         {shop5.map((sh5) => {
//             return <Shop5Dynamic key={sh5.id} shop5={sh5} />;
//           })}

//         </div>
//       </div>

//     </div>
//   )
// }
import Shop5Dynamic from '../DYNAMIC/Shop5Dynamic';
import one from "../assets/one.webp"
import two from "../assets/two.webp"
import three from "../assets/three.webp"
import four from "../assets/four.webp"
import fife from "../assets/fife.webp"
import sex from "../assets/sex.webp"
import seven from "../assets/seven.webp"
import eight from "../assets/eight.webp"
import nine from "../assets/nine.webp"
import ten from "../assets/ten.webp"

export default function Shop5() {
const shop5 =[
    { id:1 , img:one , title1:"Embroidry t-shirt", price1:"$ 30.00" , price2:"$ 50.00" },
    { id:2 , img:two , title1:"Knitted vist top", price1:"$ 22.00" },
    { id:3 , img:three , title1:"Lyocell resort shirt", price1:"$ 42.00" },
    { id:4 , img:four , title1:" Casual shirt", price1:"$ 22.00 "  },
    { id:5 , img:fife , title1:" Classic top", price1:"$ 30.00" , price2:"$ 50.00" },
    { id:6 , img:sex , title1:"Printed shirt", price1:"$ 18.00"  },
    { id:7 , img:seven , title1:"Bomber jacket", price1:"$ 42.00" , price2:"$ 50.00" },
    { id:8 , img:eight , title1:"Slim polo shirt", price1:"$ 30.00" , price2:"$ 50.00" },
    { id:9 , img:nine , title1:"Jersey top", price1:"$ 29.00" , price2:"$ 39.00" },
    { id:10 , img:ten , title1:"Stretch knit top", price1:"$ 30.00"  },
    { id:11 , img:two , title1:"Knitted vist top", price1:"$ 30.00"  },
    { id:12 , img:fife , title1:"Classic top", price1:"$ 30.00"  },
    { id:13 , img:seven , title1:"Bomber jacket", price1:"$ 42.00" , price2:"$ 50.00" },
    { id:14 , img:eight , title1:"Slim polo shirt", price1:"$ 30.00" , price2:"$ 50.00" },
    { id:15 , img:nine , title1:"Jersey top", price1:"$ 29.00" , price2:"$ 39.00" },
]  
  return (
    <div>
        
           <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-[85%]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {shop5.map((sh5) => {
            return <Shop5Dynamic key={sh5.id} shop5={sh5} />;
          })}

        </div>
      </div>
 
    </div>
  )
}
