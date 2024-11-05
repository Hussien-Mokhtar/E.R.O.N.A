
export default function AboutUs5Dynamic({sliderA5}) {
  return (
    <div className="">
            <div className=' container mx-auto px-4 flex flex-col justify-center items-center '>
      <img src={sliderA5.img} alt={sliderA5.title1} className=" hover:scale-105 duration-500 "/>
      <h1 className='text-xl font-bold pt-5 text-center'>{sliderA5.title1}</h1>
      <h5 className='text-gray-500 font-bold text-center'>{sliderA5.title2}</h5>
    </div>

    </div>
  )
}
