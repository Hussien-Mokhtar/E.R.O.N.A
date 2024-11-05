
export default function Products3() {
  return (
    <>
    <div className="w-full  lg:px-20 ">
        <h5 className="flex flex-row lg:gap-6 font-bold lg:text-xl text-lg">Size :<span className="flex lg:gap-5 lg:ml-40 ml-20">
            <button className=" border border-gray-300 lg:py-2 px-4 hover:border-black duration-200 font-semibold hover:scale-105">S</button>
            <button className=" border border-gray-300 lg:py-2 px-4 hover:border-black duration-200 font-semibold hover:scale-105">M</button>
            <button className=" border border-gray-300 lg:py-2 px-4 hover:border-black duration-200 font-semibold hover:scale-105">L</button>
            <button className=" border border-gray-300 lg:py-2 px-4 hover:border-black duration-200 font-semibold hover:scale-105">XL</button>
        </span></h5>
        <h5 className="flex flex-row lg:gap-10 font-bold lg:text-xl text-xl lg:py-10 py-6">Color :<span className="flex gap-5 lg:ml-40 ml-20 ">
            <button className=" rounded-full bg-red-600 border border-gray-300 py-4 px-4 hover:border-black duration-200 font-semibold hover:scale-105 h"></button>
            <button className=" rounded-full bg-yellow-300 border border-gray-300 py-4 px-4 hover:border-black duration-200 font-semibold hover:scale-105 h"></button>
            <button className=" rounded-full bg-black border border-gray-300 py-4 px-4 hover:border-black duration-200 font-semibold hover:scale-105 h"></button>
        </span></h5>


    </div>
      
    </>
  )
}
