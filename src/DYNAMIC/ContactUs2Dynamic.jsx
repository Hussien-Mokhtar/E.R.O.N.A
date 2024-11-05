
export default function ContactUs2Dynamic({sliderc2}) {
  return (
   <>
    <div className='container mx-auto px-8 flex flex-col justify-center items-center  bg-white lg:py-8 py-2 '>
            <img src={sliderc2.img} alt="img" className="  lg:w-28 w-16 lg:h-20 h-14 mb-4 p-2 "/>
        <h5 className="text-gray-500  text-center lg:text-xl text-sm leading-10">{sliderc2.title1}</h5>
       <h5 className="text-gray-500  lg:text-2xl text-sm lg:py-4 lg:mt-4 text-center">{sliderc2.title2} <br /> should </h5>
        <span className="text-orange-500 hover:underline underline-offset-8 duration-500
         font-bold lg:text-xl text-sm "> {sliderc2.title3}</span>      
    </div>
    </>
  )
}
