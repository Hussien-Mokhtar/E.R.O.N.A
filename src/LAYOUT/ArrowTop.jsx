import { FaArrowUp } from "react-icons/fa";
export default function ArrowTop() {
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    }
    
  return (
    <>
            <h1 className=" z-10 bottom-1 right-4 fixed text-white bg-red-600 p-2 text-2xl cursor-pointer">
       <FaArrowUp  onClick={scrollToTop}/> </h1>

    </>
  )
}
