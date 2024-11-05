import { Accordion } from "flowbite-react";

export default function Faqs2Dynamic({faqs2}) {
  return (
    <>
    <div className="border-b-2 ">
        <Accordion collapseAll className="border-none ">
         <Accordion.Panel>
        <Accordion.Title className="bg-white hover:text-orange-500 duration-200 text-xl">{faqs2.question}</Accordion.Title>
        
        <Accordion.Content >
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
          • {faqs2.answer}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      </Accordion>

    </div>
    </>
  )
}
