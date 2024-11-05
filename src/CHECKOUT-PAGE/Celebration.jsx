import { MdOutlineCelebration } from "react-icons/md";

const Celebration = () => {
  return (
    <div className="flex items-center justify-center lg:h-[30rem] h-[20rem] bg-gray-100">
      <h1 className="text-4xl font-bold text-yellow-600 animate-bounce">
      <div className="flex items-center justify-center py-10 text-5xl">
       <h1 className="flex items-center font-bold lg:text-6xl text-4xl"><span><MdOutlineCelebration /></span>Congratulation <span><MdOutlineCelebration /></span></h1>
      </div>

      </h1>
      <p className="text-lg mb-8">         
</p>
      <div className="confetti-container absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 100 }).map(( index) => (
          <div
            key={index}
            className={`confetti w-2 h-2 bg-red-500 rounded-full absolute animate-fall`}
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 2}s`,
              bottom: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Celebration;
