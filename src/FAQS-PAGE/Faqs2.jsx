import { Accordion } from "flowbite-react";
import { useEffect, useState } from "react";
import Faqs2Dynamic from "../DYNAMIC/Faqs2Dynamic";
export default function Faqs2() {
    const [ask,setAsk] =useState([])
    useEffect(()=>{
 fetch("https://ecom.quick-ad.net/public/api/faq").then ((res)=>{
    return res.json()
 })
 .then ((data)=>{
    setAsk(data.data)
 })
    },[])
  return (
    <>
    <div className=" text-left w-full border-l-2 pl-6" >
        <h1 className="text-4xl font-medium py-12">Shopping Information</h1>
        <Accordion className="border-none" >
      <Accordion.Panel >
        <Accordion.Title className="text-orange-500 bg-white text-xl">How can I contact you?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
          • We do have restock notifications! If a product is coming back in stock, simply click on the size ofthe product you're wanting to be notified of and a button should appear that says once somecome back in stock, it will send you an email to notify you
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>

        {ask.map((f2)=>{
         return <Faqs2Dynamic key={f2.id} faqs2={f2}/>
        })}
    </div>

    
    </>
  )
}
