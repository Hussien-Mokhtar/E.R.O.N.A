import { motion } from "framer-motion";
export default function Home1Dynamic({ slider1 }) {
  return (
    <>

      <motion.div >  
        <img
          src={slider1.photo}
          alt="background img"
          className=" w-full lg:h-[30rem] h-[20rem] mx-auto" 
        />
      </motion.div>

    </>
  );
}
