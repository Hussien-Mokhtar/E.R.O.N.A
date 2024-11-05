
export default function Home7() {
  return (
    <>
      <div className="flex w-[90%] mx-auto lg:flex-row flex-col justify-between items-center mt-28 pb-8">

        <h1 className=" lg:text-5xl text-3xl mb-3 font-bold" 
          data-aos="fade-right" data-aos-duration="1000"
        >
          Subscribe newsletter
        </h1>

        <form data-aos="fade-left" data-aos-duration="1000">
          <div className=" flex justify-center items-center gap-1 ">
            <input
              type="text"
              placeholder="Enter your email"
              required
              className="w-full bg-gray-200 border-hidden py-3 font-bold text-xl lg:pr-20"
            />
            <button className=" bg-orange-500 text-white py-3 font-bold px-2 lg:text-xl text-lg ">
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
      
    </>
  );
}