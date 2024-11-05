import {  useNavigate } from 'react-router-dom';
import { MdLogout } from "react-icons/md";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            localStorage.removeItem('token');
            navigate('/login');
        }    };
    
    return (
        <>
             <div className="flex justify-between items-center gap-1 text-xl py-4 hover:underline  hover:text-orange-500 duration-300 bg-white cursor-pointer" >
       <MdLogout /><span ><h5 onClick={handleLogout}> Logout </h5></span>
      </div> 
      </>

    );
};
export default Logout;