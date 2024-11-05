
export default function Shop1Dynamic({shop1}) {
  return (
    <>
                    <div className=" relative ">
          <img src={shop1.img} alt={shop1.title} className="w-[85%] py-10 hover:scale-105 duration-200" />
          <div className=" absolute lg:bottom-16 bottom-14 lg:left-2 left-6 bg-white lg:py-2 py-1 lg:px-12 px-6 font-bold text-sm shadow-lg ">
            <h5>{shop1.title}</h5>
          </div>
        </div>

    </>
  )
}
