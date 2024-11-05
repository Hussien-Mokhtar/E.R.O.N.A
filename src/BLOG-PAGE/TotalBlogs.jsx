import Blog1 from './Blog1'
import { motion } from "framer-motion"
import background from "../assets/background.webp"
import BlogCategory from '../DYNAMIC/BlogCategory';
import { useEffect, useState } from 'react';
import BlogSearch from './BlogSearch';
export default function TotalBlogs() {
    const [blogCategories, setBlogCategories] = useState([]);
    useEffect(() => {
      fetch("https://ecom.quick-ad.net/public/api/blogs/count/category")
        .then((response) => response.json())
        .then((data) => {
          setBlogCategories(data.categories);
        });
    }, []);

// ------------------------

  return (
    <>
          <motion.div className="bg"
      initial={{ x: '-150%' }}
     animate={{ x: 0 }}
      transition={{ duration: 2, ease: 'easeOut'  }} >
        <img src={background} alt="" className="w-full  "/>
        <div className="text-white">
        <h5 className=" bg-title flex flex-col text-xl"> HOME  - NEWS <span className="text-4xl font-bold mt-2">NEWS</span></h5>
        </div>
      </motion.div>

<h1 className='container mx-auto font-bold text-2xl lg:pt-20 lg:ml-28 ml-20'>Search</h1>

<div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 lg:mt-4 ">

<form action="" className='grid lg:grid-cols-2 grid-cols-1 '>
  <div className="pt-3 grid grid-cols-1 lg:h-8 lg:w-[20rem] ">
  <BlogSearch/>

    <div className="">
    <h1 className='container mx-auto font-bold text-xl pt-20 lg:text-left text-center '>Categories</h1>
    {blogCategories.map((b3) => {
              return <BlogCategory key={b3.id} blog3={b3} />;
            })}

    </div>
  </div>

  <div className="lg:w-[50rem] lg:mt-[-40%]">
    <Blog1 />
  </div>
</form>

</div>
    </>
  )
}
