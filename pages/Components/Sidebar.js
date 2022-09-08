import React from "react";
import { TiClipboard } from "react-icons/Ti";
import { MdPeopleOutline } from "react-icons/Md";
import { AiOutlineDollar } from "react-icons/Ai";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gradient-to-t from-indigo-50 to-blue-500">
      <div className="">
        <div className="py-3 my-10 flex justify-around">
          <h1 className="text-2xl w-full text-center font-semibold text-white">
            NVSL - IMS
          </h1>
        </div>
        <div className="p-4 space-y-2">
          <div className="">
            <div className="flex p-3 text-white  space-x-4 0 hover:bg-gray-50 hover:text-black hover:rounded-full  cursor-pointer  ">
              <TiClipboard className=" text-white text-2xl hover:text-black" />
              <p className=" ">Dashbord</p>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-white  space-x-4 0 hover:bg-gray-50 hover:text-black hover:rounded-full  cursor-pointer  ">
              <MdPeopleOutline className=" text-white text-2xl hover:text-black" />
              <p className=" ">Partner</p>
            </div>
          </div>
          <div className="w-80">
            <div className="flex p-3 text-black  space-x-4 0 bg-blue-50 rounded-l-full cursor-pointer ">
              <AiOutlineDollar className=" text-black text-2xl" />
              <p className=" ">Invoice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
