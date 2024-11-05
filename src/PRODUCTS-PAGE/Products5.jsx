import elhaam from "../assets/elhaam.jpeg"
import { TbIroning1 } from "react-icons/tb";
import { TbBleachOff } from "react-icons/tb";
import { TbWashDrycleanOff } from "react-icons/tb";
export default function Products5() {
    return (
    <>
    <hr />
<div className="container mx-auto px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">

        <img src={elhaam} alt="" className="rounded-full"/>
        <div className="">
            <h5 className="lg:text-2xl text-xl font-semibold ">Product Specifications</h5>
            <p className="py-6 text-gray-500 text-xl leading-8">Care for fiber: 30% more recycled polyester. We <br /> label garments manufactured using <br />environmentally friendly technologies and raw <br /> materials with the Join Life label.</p>

            <h1 className="lg:text-2xl text-xl font-semibold pb-4">Washing Instructions</h1>
            <p className="flex items-center gap-2 lg:text-2xl text-xl text-gray-500">
                <TbIroning1 /><span>Iron maximum 100ºC.</span> </p>
            <p className="flex items-center py-4 gap-2 lg:text-2xl text-xl text-gray-500"> 
                <TbBleachOff /><span> Do not bleach/bleach.</span> </p>
            <p className="flex items-center gap-2 lg:text-2xl text-xl text-gray-500">
                <TbWashDrycleanOff  /><span>Do not dry clean.</span> </p>

        </div>

        <div className=" ">
            <h5 className="lg:text-2xl text-xl font-semibold">Material</h5>
            <p className="py-6 text-gray-500 text-xl leading-8">The Green to Wear 2.0 standard aims to minimize <br /> the environmental impact of textile production. To <br />this end, we have developed Inditex's The List <br />program.</p>

            <h1 className="lg:text-2xl text-xl font-semibold pb-4">Washing Instructions</h1>
            <p className="flex items-center gap-2 lg:text-2xl text-xl text-gray-500">
                Model is 1.84 m wearing </p>
            <p className="flex items-center py-4 gap-2 lg:text-2xl text-xl text-gray-500"> 
            Size M </p>
            </div>

    </div>
    <hr />


    </>
)
}
