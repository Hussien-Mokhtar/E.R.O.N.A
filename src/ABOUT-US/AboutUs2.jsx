import aboutus from "../assets/about-us.webp"
export default function AboutUs2() {
  return (
    <>
    <div className="flex justify-center items-center">
      <img src={aboutus} alt="" className="w-4/5 py-5 hover:scale-105 duration-500"/>
    </div>

    <div className=" grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 ">

        <div className="text-center pt-2 ">
        <h1 className="text-xl font-bold">5,000+ Happy customer</h1>
      <p className="pt-4 leading-6 font-bold text-gray-500">The customer's perception is your reality.<br />Your most unhappy customers are your<br/>greatest source of learning</p>
        </div>
        <div className="text-center pt-2">
        <h1 className="text-xl font-bold">29+ Awards won</h1>
      <p className="pt-4 leading-6 font-bold text-gray-500">Awards can give you a tremendous amount<br />of encouragement to keep getting better,<br/>no matter how young or old you are.</p>
        </div>
        <div className="text-center pt-2">
        <h1 className="text-xl font-bold">40 years of experiences</h1>
      <p className="pt-4 leading-6 font-bold text-gray-500">The major problem is that we tend to live<br />our life in our head, in our thoughts, cut off<br/>from our actual experience.</p>
        </div>

        
    </div>
    </>
  )
}
