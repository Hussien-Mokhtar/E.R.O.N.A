import { Sidebar } from "flowbite-react";
import {HiOutlineMinusSm,HiOutlinePlusSm,HiShoppingBag,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import Shop2CategoryDynamic from "../DYNAMIC/Shop2CategoryDynamic";
import { useEffect, useState } from "react";
import Shop4 from "./Shop4";
import Shop2Brands from "./Shop2Brands";
export default function Shop2() {
  const [cate, setCate] = useState([]);
  useEffect(() => {
    fetch("https://ecom.quick-ad.net/public/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCate(data.categories);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto mt-20  ">
        <Sidebar className=" lg:w-[85%] w-full lg:h-[125rem] h-[130rem]">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              
              <Sidebar.Collapse
                icon={HiShoppingBag}
                label="Categories"
                open={true} 
                renderChevronIcon={(theme, open) => {
                  const IconComponent = open
                    ? HiOutlineMinusSm
                    : HiOutlinePlusSm;

                  return (
                    <IconComponent
                      aria-hidden
                      className={twMerge(
                        theme.label.icon.open[open ? "on" : "off"] )}/>
                  ); }}
                className="text-xl font-bold" >
                {cate.map((sh2) => {
                  return <Shop2CategoryDynamic key={sh2.id} shop2={sh2} />; 
                })}
              </Sidebar.Collapse>
              <hr />
              {/* ------------------------------------ */}
              <Sidebar.Collapse
                icon={HiShoppingBag}
                label="Brands"
                open={true} 
                renderChevronIcon={(theme, open) => {
                  const IconComponent = open
                    ? HiOutlineMinusSm
                    : HiOutlinePlusSm;

                  return (
                    <IconComponent
                      aria-hidden
                      className={twMerge(
                        theme.label.icon.open[open ? "on" : "off"] )}/>
                  ); }}
                className="text-xl font-bold" >
               <Shop2Brands/>
              </Sidebar.Collapse>
              <hr />
              {/* ------------------------- */}

               <Shop4/>

            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      
    </>
  );
}