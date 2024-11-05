import baby from "../assets/baby.webp";
import CounterHome5 from "./CounterHome5";
export default function Home5() {
  return (
    <div className=" w-full relative">
      <div className=" w-full h-[500px]" 
      data-aos="fade-left" data-aos-duration="1000">
        <img src={baby} alt="Deal img" className=" w-full h-full" />
      </div>
      <div className=" absolute lg:top-16 top-20 lg:left-16 left-0 bg-orange-500 w-fit p-10 flex flex-col justify-center items-center"
       data-aos="fade-right" data-aos-duration="1000">
        <h5 className="text-yellow-300 text-xl">
          Best brand selling for clothes
        </h5>
        <h1 className="text-white lg:text-5xl text-4xl">Deal of the day</h1>

        <div className=" flex gap-2 mt-5">
          <CounterHome5/>
        </div>

        
        <button className="bg-black text-white font-bold text-xl mt-5 flex justify-center items-center px-8 py-4 hover:bg-white hover:text-black hover:scale-110 duration-500">
          SHOP COLLECTION
        </button>
      </div>
    </div>
  );
}
