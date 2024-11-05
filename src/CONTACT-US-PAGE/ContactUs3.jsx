import { useState } from "react";

export default function ContactUs3() {
      // --------M A P--------//
  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '56%',
  };
  const iframeStyle = {
    border: '0',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); 
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const handleMessage = async (e) => {
      e.preventDefault();
      const data = {
        name,
        email,
        phone, 
        message,
      };  

      try {
          const response = await fetch("https://ecom.quick-ad.net/public/api/contact-form", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ data: formData })
          });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          const responseData = await response.json();
      setSuccessMessage("Your message has been sent successfully!"); 
      setErrorMessage(""); 
      } catch (error) {
        setErrorMessage('Error sending message: ' + error.message); 
        console.error('Error fetching data:', error); 
      } finally {
        
        setName("");
        setEmail("");
        setPhone(""); 
        setMessage("");
      }
    };

  return (
    <>
    <div className='container mx-auto px-4 text-3xl lg:py-20 py-12 flex justify-center items-center font-extrabold bg-gray-100 w-[100%] mt-8'>
      <h1 className='border-b-4 '>Keep in touch with us</h1>
    </div>

    <div class=" container mx-auto px-4 gap-4 my-24 bg-gray-100 py-28 w-[100%] ">

<div class="  grid lg:grid-cols-2 grid-cols-1 lg:ml-10 font-bold " >

    <form onSubmit={handleMessage} action="" className=' grid grid-cols-1  '>
<div className="">
<input type="text" placeholder='Your full name' required value={name}
                    onChange={(e) => setName(e.target.value)}  className='border-gray-300 bg-gray-100 
lg:pr-48 pr-28 py-4 text-lg'/>
<div className="">
<input type="email" placeholder='Your email adress' required value={email}
                    onChange={(e) => setEmail(e.target.value)}  className='border-gray-300 bg-gray-100 
lg:pr-48 pr-28 py-4 text-lg'/>

</div>
<div className="">
<input type="text" placeholder='Your mobile number' required value={phone}
                    onChange={(e) => setPhone(e.target.value)}  className='border-gray-300 bg-gray-100 
lg:pr-48 pr-28 py-4 text-lg'/>

</div>
<div className="flex justify-center items-center p-4 ">
<input type="checkbox" /> <span className='px-4 text-gray-500 '>I accept the terms & conditions and I understand that my data will be <br />hold securely in accordance with the privacy policy.</span>
</div>

</div>

<div className=" font-bold font-mono text-3xl lg:ml-10 col-span-2 grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1">
    <input type="text" placeholder='Your message here..' className=' lg:pr- pr-32 lg:pb-72 pb-20  bg-gray-100 border-gray-300 text-xl  ' required value={message}
                    onChange={(e) => setMessage(e.target.value)} />

    <div className="text-2xl py-6 px-6 ">
    <button className=' py-2 border-2 border-solid border-gray-300 p-8 text-orange-500 font-bold hover:text-white hover:bg-orange-500 duration-700 '>SEND MESSAGE</button>
    </div>
</div>
    </form>
</div>
</div>

<div style={containerStyle} >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.9429413703674!2d-7.959050374605585!3d37.17782694632407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab161c81fb0ff%3A0x867380c80c46b1d!2sAmendoeira%20Organics!5e0!3m2!1sar!2seg!4v1725176879177!5m2!1sar!2seg"
                style={iframeStyle}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map" className="pb-8"></iframe>
            </div>
</>  
)}