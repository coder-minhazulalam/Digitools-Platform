import React from "react";
import NavItems from "./NavItems";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex px-[50px] sticky  top-0 justify-between items-center  py-2 bg-white shadow-md z-50">
      <h1 className="text-[40px] font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
        DigiTools
      </h1>
      <NavItems></NavItems>

      <div className="flex gap-5 items-center">
        <FaCartShopping className="h-[20px] w-[20px]" />

        <a
          href="/Login"
          className="duration-300 font-bold hover:bg-blue-200 hover:text-black p-3 rounded-2xl"
        >
          Login
        </a>
        <a
          href="/GetStarted"
          className=" bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:bg-blue-200 hover:text-white px-4 py-2 rounded-3xl"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;
