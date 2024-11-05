import { motion } from "framer-motion";
import shirt from "../assets/shirtmen.webp"
import collection from "../assets/collection.webp"
export default function Shop4() {
  return (
    <>
    
      <motion.div
         animate={{ y: [0, -30, 0] }}transition={{ duration: 2, repeat: Infinity }} className=" relative">
        <div className="container mx-auto px-8 my-20 lg:w-60 w-full ">

            <img variant="top" src={shirt} className=" border-[8px] border-white pb-12 "/>
         
            <div className=" absolute bottom-2 left-16 text-center">
            <h5 className="font-extrabold lg:ml-0 ml-16">Men Shirt</h5>
              <h5 className="text-[#ff6d00] font-bold lg:ml-0 ml-8">$22.00</h5>
            </div>

        </div>
      </motion.div>

<motion.div className="lg:py-20" animate={{ y: [0, 30, 0] }}transition={{ duration: 2, repeat: Infinity }} >
<img src={collection} alt="collection" className="lg:w-44 lg:ml-10 py-6 w-full"/>

</motion.div>
    </>
  );
}
