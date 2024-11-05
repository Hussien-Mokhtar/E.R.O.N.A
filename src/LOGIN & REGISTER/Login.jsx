import { Link } from "react-router-dom"
import login from "../assets/login-img.svg"
import DownNav from "../LAYOUT/DownNav"
import Footer1 from "../LAYOUT/Footer1"
import MidNav from "../LAYOUT/MidNav"
import UpNav from "../LAYOUT/UpNav"
import { motion } from "framer-motion"
import background from "../assets/background.webp"
import {  Card, Checkbox, Label, TextInput } from "flowbite-react";
import ArrowTop from "../LAYOUT/ArrowTop"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    fetch("https://ecom.quick-ad.net/public/api/auth/login-by-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then( async data => {
        
        if (data.status) {
          console.log("Success:", data);

          localStorage.setItem('token', data.token);
          navigate("/");
          setEmail("");
          setPassword("");
      

        } else {
          console.error("Error:", data.message);
          alert(data.message); 
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };
  return (
    <>
          <UpNav/>
      <MidNav/>
      <hr />
      <DownNav/>
      <motion.div className="bg lg:text-xl text-sm "
    initial={{ x: '-150%' }}
   animate={{ x: 0 }}
    transition={{ duration: 1, ease: 'easeOut'  }} >
      <img src={background} alt="" className="w-full  "/>
      <div className="text-white ">
      <h5 className=" bg-title flex flex-col "> HOME - LOGIN <span className=" font-bold mt-2 lg:text-4xl text-sm">LOGIN</span></h5>
      </div>
    </motion.div>

      <div className="container mx-auto px-4 pt-8 grid lg:grid-cols-2 grid-cols-1">
   <motion.div className=""             
              animate={{ y: [0, 20,0] }} 
              transition={{ duration: 3, repeat: Infinity }} >
   <img src={login} alt="Login-img" className="lg:w-full" />
   </motion.div>
   
        <Card className=" lg:w-[80%] lg:h-[80%] mt-10">
      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        <div> 
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" className="text-md"/>
          </div>
          <TextInput id="email1" type="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" className="text-md"/>
          </div>
          <TextInput id="password1" type="password" placeholder="Enter your password"  required onChange={(e) => setPassword(e.target.value)}/>
        </div>
        
<div className="flex justify-between">

<div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <div className="flex items-center gap-2">
          <Label className=" underline cursor-pointer hover:text-orange-500"> <Link to="/forget">Forgot password?</Link> </Label>
        </div>

</div>
        <button type="submit" className="bg-black hover:bg-orange-500 text-white py-4 rounded-md font-bold lg:text-xl mt-4">SIGN IN</button>
        <button type="submit" className="bg-black hover:bg-orange-500 text-white py-4 rounded-md font-bold lg:text-xl">Don't have account? <span className=" cursor-pointer hover:underline pl-2"><Link to="/register">Create account</Link></span>
        </button>



        
      </form>
    </Card>

      </div>
      <Footer1/>
      <ArrowTop/>
    </>
  )
}
