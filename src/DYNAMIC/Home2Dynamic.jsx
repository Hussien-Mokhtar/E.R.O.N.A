import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Home2Dynamic({ slider2 }) {
  return (
    <> 
      {/* <motion.div
        className="parentt w-auto container px-4 py-4 flex items-center h-64 
    duration-500"
        data-aos="fade-right" data-aos-duration="1000" >  
        <img
          src={slider2.banner}
          alt={slider2.title}
          className=" w-[100%] lg:h-[20rem] h-[15rem] mx-auto" 
        />
        <div className=" title ">
          <h5> <Link to="/shop">SHOP NOW</Link></h5>  
        </div>
      </motion.div>
      <span className="flex justify-around items-center text-xl mt-9">
        <h2>{slider2.name}</h2>
        <h3 className=" text-orange-500">{slider2.slug}</h3>
      </span> */}
            <motion.div
        className="parentt w-auto container px-4 py-4 flex items-center lg:h-[20rem] 
    duration-500 "
        data-aos="fade-right" data-aos-duration="1000" >  
        <img
          src={slider2.img}
          alt={slider2.title}
          className=" rounded-2xl w-[100%] lg:h-[17rem] h-[15rem] mx-auto " 
        />
        <div className=" title ">
          <h5> <Link to="/shop">SHOP NOW</Link></h5>  
        </div>
      </motion.div>
      <span className="flex justify-around items-center text-xl mt-6">
        <h2>{slider2.title}</h2>
        <h3 className=" text-orange-500">{slider2.count}</h3>
      </span>

    </>
  );
}
