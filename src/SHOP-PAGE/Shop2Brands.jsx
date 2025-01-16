// import { useEffect, useState } from "react";
// import ShopBrandsDynamic from "../DYNAMIC/ShopBrandsDynamic";
// export default function Shop2Brands() {
//   // --------------brands-------------
//   const [shopBrands, setShopBrands] = useState([]);
//   useEffect(() => {
//     fetch("https://ecom.quick-ad.net/public/api/featured-brands")
//       .then((response) => response.json())
//       .then((data) => {
//         setShopBrands(data.Brands);
//       });
//   }, []);

//   return (
//     <>
//       <div className="container mx-auto mt-10 flex flex-col justify-center gap-3">
//                 {shopBrands.map((brand1) => {
//                   return <ShopBrandsDynamic key={brand1.id} shop2Brands={brand1} />; 
//                   })}
//       </div>
      
//     </>
//   );
// }
import { useEffect, useState } from "react";
import ShopBrandsDynamic from "../DYNAMIC/ShopBrandsDynamic";
export default function Shop2Brands() {
  // --------------brands-------------
  const [shopBrands, setShopBrands] = useState([]);
  useEffect(() => {
    fetch("https://ecom.quick-ad.net/public/api/featured-brands")
      .then((response) => response.json())
      .then((data) => {
        setShopBrands(data.Brands);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto mb-4 flex flex-col justify-center gap-3">
        <h1 className="lg:py-0 pb-4">(15) Products</h1>
      </div>
      
    </>
  );
}