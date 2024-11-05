import { motion } from "framer-motion";
export default function Home2Dynamic({ slider2 }) {
  return (
    <>
      <motion.div
        className="parentt w-auto container px-4 py-4 flex items-center h-64 
    duration-500"
        data-aos="fade-right"
        data-aos-duration="1000"
      >  
        <img
          src={slider2.banner}
          alt={slider2.title}
          className=" w-[100%] lg:h-[20rem] h-[15rem] mx-auto" 
        />
        <div className=" title  ">
          <h5> SHOP NOW</h5>
        </div>
      </motion.div>
      <span className="flex justify-around items-center text-xl mt-9">
        <h2>{slider2.name}</h2>
        <h3 className=" text-orange-500">{slider2.slug}</h3>
      </span>
    </>
  );
}
