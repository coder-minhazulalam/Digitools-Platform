import React from "react";

const Banner = () => {
  return (
    <>

    <div className="flex flex-col md:flex-row py-10 gap-[10px] items-center px-30">
      <div className="flex flex-col gap-2 w-[600px] p-5 ">
        <div className="flex gap-2 bg-[#E1E7FF] text-[#333] rounded-2xl px-2 w-[300px]">
          <img src="/assets/Group 5.svg" alt="Group 5" />
          <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </p>
        </div>

        <h1 className="text-[40px] font-bold text-black">
          Supercharge Your Digital Workflow
        </h1>

        <p className="text-[18px] text-gray-600">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>

        <div className="flex gap-3 mt-5">
          <div>
            <button className="py-2 px-4 text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  rounded-3xl
                  hover:scale-105 duration-300 hover:shadow-lg hover:from-[#3b2fd6] hover:to-[#7e12d4] ">
              Explore Products
            </button>
          </div>
          <div>
            <button className="py-2 px-4 flex gap-2 border border-solid border-[#9514FA] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent rounded-3xl transition-all duration-300 ease-in-out
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
          className="w-[400px] h-[450px] mt-10 shadow-2xl rounded-3xl"
        />
      </div>
    </div>

    {/* -------------  */}
    <div className="p-5 mb-10 mt-10 flex  space-x-15 items-center bg-[#3b2fd6] justify-center py-10">
      <div className="p-10  text-white text-center ">
           <h1 className="text-[45px] font-bold">50K+</h1>  
           <p className="text-gray-300 ">Active Users</p> 
        </div>
      <div className=" h-13 w-[1px] bg-gray-300"></div>
        <div className="p-10 text-white text-center ">
           <h1 className="text-[45px] font-bold">200+</h1>  
           <p className="text-gray-300 ">Premium Tools</p> 
        </div>
      <div className=" h-13 w-[1px] bg-gray-300"></div>
        <div className="p-10 text-white text-center">
           <h1 className="text-[45px] font-bold">4.9</h1>  
           <p className="text-gray-300 ">Rating</p> 
        </div>

    </div>




    </>
    



  );
};

export default Banner;
