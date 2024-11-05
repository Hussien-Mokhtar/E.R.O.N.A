import { Sidebar } from "flowbite-react";
import {HiOutlineMinusSm,HiOutlinePlusSm,HiShoppingBag,} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export default function Shop3() {
return (
    <>
    <Sidebar.Collapse
        icon={HiShoppingBag}
        label="Color"
        renderChevronIcon={(theme, open) => {
        const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

        return (
            <IconComponent
            aria-hidden
            className={twMerge(theme.label.icon.open[open ? "on" : "off"])}/>
        ); }}
        className="text-xl font-bold" >
        <div className="text-sm flex justify-between gap-6">
        0 selected <span className="text-gray-500 underline">Reset</span>
        </div>
        <div className="grid grid-cols-7 gap-1  hover:scale-100">
        <button className="bg-black rounded-full w-6">.</button>
        <button className="bg-[burlywood] rounded-full w-6"></button>
        <button className="bg-[chocolate] rounded-full w-6"></button>
        <button className="bg-[crimson] rounded-full w-6"></button>
        <button className="bg-[darkkhaki] rounded-full w-6"></button>
        <button className="bg-[darkred] rounded-full w-6"></button>
        <button className="bg-[darkseagreen] rounded-full w-6"></button>
        <button className="bg-[gold] rounded-full w-6 text-[gold]">.</button>
        <button className="bg-[indianred] rounded-full w-6"></button>
        <button className="bg-[khaki] rounded-full w-6"></button>
        <button className="bg-[lightblue] rounded-full w-6"></button>
        <button className="bg-[lightcoral] rounded-full w-6"></button>
        <button className="bg-[lightsalmon] rounded-full w-6"></button>
        <button className="bg-[lightsteelblue] rounded-full w-6"></button>
        <button className="bg-[navy] rounded-full w-6">.</button>
        <button className="bg-[olive] rounded-full w-6"></button>
        <button className="bg-[olivedrab] rounded-full w-6"></button>
        <button className="bg-[orange] rounded-full w-6"></button>
        <button className="bg-[royalblue] rounded-full w-6"></button>
        <button className="bg-[salmon] rounded-full w-6"></button>
        <button className="bg-[sienna] rounded-full w-6"></button>
        <button className="bg-[skyblue] rounded-full w-6"></button>
        <button className="bg-[slateblue] rounded-full w-6"></button>
        <button className="bg-[steelblue] rounded-full w-6"></button>
        <button className="bg-[teal] rounded-full w-6"></button>
        <button className="bg-[yellow] rounded-full w-6 text-[yellow]">.</button>
        </div>
    </Sidebar.Collapse>
    <hr />
      {/* ------------------------- */}

    <Sidebar.Collapse
        icon={HiShoppingBag}
        label="Size"
        renderChevronIcon={(theme, open) => {
        const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
        return (
            <IconComponent
            aria-hidden
            className={twMerge(theme.label.icon.open[open ? "on" : "off"])} />
        ); }}
        className="text-xl font-bold" >
        <div className="text-sm flex justify-between gap-6">
        0 selected <span className="text-gray-500 underline">Reset</span>
        </div>

        <div className="flex justify-between text-gray-500 font-[font-custom-stack-body]">
        <div className=""> <input type="checkbox" /> <span>S</span> </div>
        <div className="">(15)</div>
        </div>

        <div className="flex justify-between text-gray-500 font-[font-custom-stack-body]">
        <div className=""> <input type="checkbox" /> <span>M</span> </div>
        <div className="">(15)</div>
        </div>

        <div className="flex justify-between text-gray-500 font-[font-custom-stack-body]">
        <div className=""> <input type="checkbox" /> <span>L</span> </div>
        <div className="">(15)</div>
        </div>

        <div className="flex justify-between text-gray-500 font-[font-custom-stack-body]">
        <div className=""> <input type="checkbox" /> <span>XL</span> </div>
        <div className="">(15)</div>
        </div>
    </Sidebar.Collapse>
    <hr />
      {/* ------------------------- */}

    <Sidebar.Collapse
        icon={HiShoppingBag}
        label="Availability"
        renderChevronIcon={(theme, open) => {
        const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
        return (
            <IconComponent
            aria-hidden
            className={twMerge(theme.label.icon.open[open ? "on" : "off"])} />
        ); }}
        className="text-xl font-bold" >
        <div className="text-sm flex justify-between gap-6">
        1 selected <span className="text-gray-500 underline">Reset</span>
        </div>

        <div className="flex justify-between text-gray-500 ">
        <div className=""> <input type="checkbox" /> <span>In stock</span> </div>
        <div className="">(15)</div>
        </div>

        <div className="flex justify-between text-gray-400 ">
        <div className=""> <input type="checkbox" disabled /> <span>Out of stock</span> </div>
        <div className="">(15)</div>
        </div>
    </Sidebar.Collapse>
    </>
);
}
