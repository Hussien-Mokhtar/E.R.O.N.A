
export default function AboutUs3Dynamic({sliderA3}) {
  return (
    <div className='container mx-auto px-1 flex flex-col justify-center items-center bg-gray-100 pb-20 mt-40 '>
        
            <img src={sliderA3.img} alt="img" className=" rounded-full w-28 h-28 border-8 mb-4 border-white p-2 "/>
        <h5 className=" text-center font-bold text-xl leading-10">{sliderA3.title1}</h5>
       <h5 className="text-gray-500 font-bold text-xl py-4 mt-4 text-center">The best thing about shopping is that <br /> one can return the purchase if <br /> something does not work the way it <br /> should </h5>
        <span className="text-black font-bold text-xl"> {sliderA3.title3}</span>      
    </div>
  )
}
