// import Aos from "../LAYOUT/Aos"
// import { CiCalendar } from "react-icons/ci";
// import { FaRegHeart } from "react-icons/fa";
// import { FiShoppingBag } from "react-icons/fi";
// import { IoEyeOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

// export default function Blog1Dynamic({blog1 }) {
//   return (
//     <>
//         <Link to={`/blogdetails/${blog1.id}`}>

//            <div className="parentt2 container mx-auto px-4 pb-20 pt-8 text-center"
//            data-aos="fade-right" data-aos-duration="3000" > <Aos/>
//       <img src={blog1.meta_img} alt="Big story img" className="lg:w-full lg:h-[18rem] hover:scale-105 duration-500" />
//       <div className=" title2 absolute opacity-0 gap-1 text-5xl lg:ml-2 lg:mb-6 flex justify-center items-center ">
//           <FaRegHeart className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500 " />
//           <FiShoppingBag className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500" />
//           <IoEyeOutline className=" bg-white p-3 hover:bg-orange-500 hover:text-white duration-500" />
//         </div>

//       <div className="flex py-4 justify-center items-center ">
//       <CiCalendar className="text-orange-500 font-extrabold text-xl "/> <span className="font-bold text-sm"> {blog1.title}</span>
//       </div>
//       <h1 className="font-bold text-sm py-2"> {blog1.slug}</h1>
//       <h5 className="text-gray-500 leading-8 text-sm font-bold"> {blog1.short_description}</h5>
//       </div>
// </Link>
//     </>
//   )
// }
import Aos from "../LAYOUT/Aos"
import { CiCalendar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Blog1Dynamic({blog1 }) {
  return (
    <>
        <Link to={`/blogdetails/${blog1.id}`}>

           <div className="parentt2 container mx-auto px-4 pb-20 pt-8"
           data-aos="fade-right" data-aos-duration="3000" > <Aos/>
      <img src={blog1.img} alt="Big story img" className="lg:w-full lg:h-[18rem] hover:scale-105 duration-500" />

      <div className="flex py-4  ">
      <CiCalendar className="text-orange-500 font-extrabold text-xl "/> <span className="font-bold text-sm"> {blog1.title}</span>
      </div>
      <h1 className="font-bold text-sm py-2"> {blog1.title1}</h1>
      <h5 className="text-gray-500 leading-8 text-sm font-bold"> {blog1.title2}</h5>
      </div>
</Link>
    </>
  )
}
