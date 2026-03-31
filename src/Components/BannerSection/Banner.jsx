import React from "react";

const Banner = () => {
  return (
    <div className="flex py-10 gap-[200px] items-center px-50">
      <div className="flex flex-col gap-5 w-[600px] p-5 ">
        <div className="flex gap-2 bg-[#E1E7FF] text-[#333] rounded-2xl p-2 w-[300px]">
          <img src="/assets/Group 5.svg" alt="Group 5" />
          <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </p>
        </div>

        <h1 className="text-[60px] font-bold text-black">
          Supercharge Your Digital Workflow
        </h1>

        <p className="text-lg text-gray-600">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>

        <div className="flex gap-3 mt-5">
          <div>
            <button className="py-3 px-6 text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  rounded-3xl
                  hover:scale-105 duration-300 hover:shadow-lg hover:from-[#3b2fd6] hover:to-[#7e12d4] ">
              Explore Products
            </button>
          </div>
          <div>
            <button className="py-3 px-6 flex gap-2 border border-solid border-[#9514FA] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent rounded-3xl transition-all duration-300 ease-in-out
      hover:bg-[#9514FA]  hover:scale-105 ">
              <img src="/assets/Play.svg" alt="Play" /> Watch Demo
            </button>
          </div>
        </div>
      </div>

      <div>
        <img
          src="/assets/banner.png"
          alt="hero"
          className="w-[400px] h-[500px] mt-10"
        />
      </div>
    </div>
  );
};

export default Banner;
