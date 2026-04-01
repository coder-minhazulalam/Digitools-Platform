import React from "react";
import NavItems from "./NavItems";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div
      className="w-11/12 md:w-full flex px-0 mx-auto md:m-0 md:px-[50px] sticky  top-0 justify-between items-center  py-2 bg-white
     shadow-md z-50"
    >
      {/*  */}

      <div className="dropdown md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>

        <ul className=" bg-white rounded-box w-52">
          <li>
            <NavItems />
          </li>
        </ul>
      </div>

      {/*  */}
      <h1 className="text-[40px] font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
        DigiTools
      </h1>
      <NavItems className="md:block"></NavItems>

      <div className="flex gap-5 items-center">
        <FaCartShopping className="hidden md:block h-[20px] w-[20px]" />

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
