import { useEffect, useRef, useState } from "react";
import Shop5Dynamic from '../DYNAMIC/Shop5Dynamic';

export default function Shop5() {
    const [shop5, setShop5] = useState([]);
    useEffect(() => {
      fetch("https://ecom.quick-ad.net/public/api/products")
        .then((response) => response.json())
        .then((data) => {
          setShop5(data.products); 
        }); 
    }, []);
  
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
