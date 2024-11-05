import  { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
export default function UpNav() {
  const testData =  [
    {
        review: <h5> <span className=' cursor-pointer text-lg'>Free shipping + Free return for above united states</span></h5>,
    },
    {
        review: <h5 className="text-black"> <span className=' cursor-pointer text-lg'>Free shipping + Free return for above united states</span></h5>,
    },
]
    const [selected, setSelected] = useState(0);
    const tLength = testData.length

  return (
    <>
<div className=" lg:flex lg:flex-row lg:justify-around w-full flex flex-col items-center xl:text-l text-sm bg-orange-500 text-white py-3 font-bold">
<div className="">
    <h5> 
        <div className="flex justify-between items-center gap-4 ">
        <FaArrowLeft onClick={() => {
                selected == 0 ? setSelected(tLength - 1) : setSelected((res) => res - 1); }}/> 

               <marquee scrollamount="10">
              <span className="xl:text-lg text-sm text-center hover:underline "       
                transition={{ duration: 3, repeat: Infinity }} >
          {testData[selected].review}</span>
              </marquee> 

              <FaArrowRight onClick={() => {
                selected == (tLength - 1) ? setSelected(0) : setSelected((res) => res + 1)
              }}/>

        </div>
    </h5>
</div>

  </div>
</>
  )
}