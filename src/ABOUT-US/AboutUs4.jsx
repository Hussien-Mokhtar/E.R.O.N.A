import aboutus1 from "../assets/about-us1.webp"
export default function AboutUs4() {
  return (
    <>
    <div className="flex justify-center items-center pt-40">
      <img src={aboutus1} alt="" className="w-4/5 py-5 hover:scale-105 duration-500"/>
    </div>

    <div className=" grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 ">

        <div className="text-center pt-2 ">
        <h1 className="text-xl font-bold">Fashion is what you’re offered four times a <br />
        yea by designers fashions fade</h1>
      <p className="pt-4 leading-6 font-bold text-gray-500">In early 1982, founder and creative direct or had the idea<br />to design a bag collection where comfort, fashion, and<br/>distinction are key.</p>
        </div>
        <div className="text-center pt-2">
        <h1 className="text-xl font-bold">I prefer to shock rather than to bore through <br />
        repetition style is eternal</h1>
      <p className="pt-4 leading-6 font-bold text-gray-500">I have always believed that fashion was not only to make<br />women more beautiful, but also to reassure them, give<br/>them confidence.</p>
        </div>
    </div>
    
    <div className="flex flex-col justify-center items-center py-20">
     <h5 className="text-md text-gray-500 font-bold">Highliy skilled</h5>
     <h1 className="text-5xl font-bold border-b-4 py-4">Meet our teams</h1>
     </div>

    </>
  )
}
