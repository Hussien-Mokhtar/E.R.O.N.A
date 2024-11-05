export default function Home8Dynamic({ slider8 }) {
  return (
    <>
      <div className="container mx-auto px-4 flex flex-col justify-center items-center bg-gray-100 py-48">
        <img src={slider8.img} alt="img"
          className=" rounded-full w-28 h-28 border-8 mb-4 border-white p-2 "
        />
        <h5 className=" text-center text-gray-500 font-bold text-xl leading-10">
          {slider8.title1}
        </h5>
        <h5 className="text-orange-500 font-bold text-xl py-4 mt-8">
          {slider8.title2}
          <span className="text-black"> - {slider8.title3}</span>
        </h5>
      </div>
    </>
  );
}