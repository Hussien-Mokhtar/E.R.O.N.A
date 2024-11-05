import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import slider from "../assets/slider.webp";
import { Link } from "react-router-dom";
import DownNav from "../LAYOUT/DownNav";
import Footer1 from "../LAYOUT/Footer1";
import MidNav from "../LAYOUT/MidNav";
import UpNav from "../LAYOUT/UpNav";
import { motion } from "framer-motion";
import background from "../assets/background.webp";
import { useState } from "react";
import ArrowTop from "../LAYOUT/ArrowTop";

export default function Register() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); 
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      name,
      lastname,
      email,
      phone, 
      password,
    };

    if (!name || !lastname || !email || !phone || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("https://ecom.quick-ad.net/public/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);

      if (result.status) {
        alert("Registration successful!"); 
      } else {
        setErrorMessage(result.message); 
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      
      setName("");
      setLastName("");
      setEmail("");
      setPhone(""); 
      setPassword("");
    }
  };

  return (
    <>
      <UpNav />
      <MidNav />
      <hr />
      <DownNav />
      <motion.div className="bg lg:text-xl text-sm "
        initial={{ x: '-150%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }} >
        <img src={background} alt="" className="w-full" />
        <div className="text-white ">
          <h5 className=" bg-title flex flex-col "> HOME - REGISTER <span className=" font-bold mt-2 lg:text-4xl text-sm">REGISTER</span></h5>
        </div>
      </motion.div>

      <img src={slider} className="relative lg:h-[50rem]" />

      <div className="container mx-auto px-4 pt-4 grid lg:grid-cols-1 grid-cols-1 absolute lg:left-[28%] lg:top-[70%]">
        <div className="grid lg:grid-cols-1 lg:ml-[-60%] text-center ">
          <h5 className="lg:text-3xl font-bold pb-4">Create account</h5>
          <p className="lg:text-xl font-semibold pb-4 text-gray-500">Please register account detail</p>
        </div>

        <Card className="lg:w-[40%] lg:h-[80%] lg:py-20 ">
          <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <div>
              <div className="lg:mb-2 block">
                <Label htmlFor="name" value="First name" className="lg:text-md" />
              </div>
              <TextInput id="name" placeholder="First name" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <div className="lg:mb-2 block">
                <Label htmlFor="lastname" value="Last name" className="lg:text-md" />
              </div>
              <TextInput id="lastname" placeholder="Last name" required value={lastname} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
              <div className="lg:mb-2 block">
                <Label htmlFor="email" value="Your email" className="lg:text-md" />
              </div>
              <TextInput id="email" type="email" placeholder="Your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <div className="lg:mb-2 block">
                <Label htmlFor="phone" value="Your phone" className="lg:text-md" />
              </div>
              <TextInput id="phone" placeholder="Your phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <div className="lg:mb-2 block">
                <Label htmlFor="password" value="Your password" className="lg:text-md" />
              </div>
              <TextInput id="password" type="password" placeholder="Your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">I have read and agree with the <span className="hover:text-orange-500 hover:underline"> Terms & Condition.</span></Label>
              </div>
            </div>
            <button type="submit" className="bg-black hover:bg-orange-500 text-white lg:py-4 py-2 rounded-md font-bold lg:text-xl mt-4">CREATE</button>
            <button type="button" className="bg-black hover:bg-orange-500 text-white lg:py-4 py-2 rounded-md font-bold lg:text-xl">
              Already have account? <span className="cursor-pointer hover:underline pl-2"><Link to="/login">Login</Link></span>
            </button>
          </form>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>} 
        </Card>
      </div>

      <div className="lg:mt-0 mt-[160%]">
        <Footer1 />
        <ArrowTop />
      </div>
    </>
  );
}
