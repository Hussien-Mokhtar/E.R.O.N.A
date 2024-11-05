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

export default function ForgetPassword() {
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
      <h5 className=" bg-title flex flex-col "> HOME - ACCOUNT <span className=" font-bold mt-2 lg:text-4xl text-sm">ACCOUNT</span></h5>
      </div>
    </motion.div>

      <div className="container mx-auto px-4 pt-8 grid lg:grid-cols-2 grid-cols-1">
      <motion.div className=""             
              animate={{ y: [0, 20,0] }} 
              transition={{ duration: 3, repeat: Infinity }} >
   <img src={login} alt="Login-img" className="lg:w-full" />
   </motion.div>

        <Card className=" lg:w-[80%] lg:h-[90%] mt-10">
            <div className="flex flex-col justify-center items-center">
                <h5 className="lg:text-4xl text-2xl font-bold pb-6">Reset Password</h5>
                <p className="text-center text-xl text-gray-500 pb-4">Please enter the email address that you used to register, and we will send you a link to reset your password via Email.</p>
            </div>
      <form className="flex flex-col gap-4">
        <div> 
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email address" className="text-md"/>
          </div>
          <TextInput id="email1" type="email" placeholder="Email address" required />
        </div>
       
        
<div className="flex justify-between">

<div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <div className="flex items-center gap-2">
          <Label className=" underline cursor-pointer hover:text-orange-500"> <Link to="/login">Cancel</Link> </Label>
        </div>

</div>
        <button type="submit" className="bg-black hover:bg-orange-500 text-white py-4 rounded-md font-bold lg:text-xl mt-4">SUBMIT</button>
        
      </form>
    </Card>

      </div>
      <Footer1/>
      <ArrowTop/>
    </>
  )
}
