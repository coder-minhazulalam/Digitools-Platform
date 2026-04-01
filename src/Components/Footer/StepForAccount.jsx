import React from "react";

const StepForAccount = () => {
  return (
    <>
      <div className="mt-15 text-center">
        <h1 className="text-[40px] font-bold">Get Started in 3 Steps</h1>
        <p className="text-[13px] text-gray-400">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="h-[300px]  mt-15 mb-20 flex flex-row space-x-5 items-center justify-center mx-auto">
        <div
          className="h-full relative flex flex-col items-center justify-center border border-solid border-amber-300 shadow-2xl
             rounded-2xl space-y-3 p-10"
        >
          <img
            src="/assets/user.png"
            alt="Step 1"
            className="w-20 h-20 p-2 mb-2 bg-gray-200 rounded-full"
          />
          <h1 className="text-white absolute flex justify-center items-center top-3 right-3 bg-[#4F39F6] rounded-full h-10 w-10 p-4 text-center">
            01
          </h1>
          <h2 className="text-lg font-semibold">Create an Account</h2>
          <p className="text-sm text-gray-600">
            Sign up for a free account to get started.
          </p>
        </div>

        <div
          className="h-full relative flex flex-col items-center justify-center border border-solid border-amber-300 shadow-2xl
             rounded-2xl space-y-3 p-10"
        >
          <img
            src="/assets/package.png"
            alt="Step 1"
            className="w-20 h-20 p-2 mb-2 bg-gray-200 rounded-full"
          />
          <h1 className="text-white absolute flex justify-center items-center top-3 right-3 bg-[#4F39F6] rounded-full h-10 w-10 p-4 text-center">
            02
          </h1>
          <h2 className="text-lg font-semibold">Choose Products</h2>
          <p className="text-sm text-gray-600 text-center">
            Browse our catalog and select the tools<br></br> that fit your
            needs.
          </p>
        </div>
        <div
          className="h-full relative flex flex-col items-center justify-center border border-solid border-amber-300 shadow-2xl
             rounded-2xl space-y-3 p-10"
        >
          <img
            src="/assets/rocket.png"
            alt="Step 1"
            className="w-20 h-20 p-4 mb-2 bg-gray-200 rounded-full"
          />
          <h1 className="text-white absolute flex jus    tify-center items-center top-3 right-3 bg-[#4F39F6] rounded-full h-10 w-10 p-4 text-center">
            03
          </h1>
          <h2 className="text-lg font-semibold">Start Creating</h2>
          <p className="text-sm text-gray-600 text-center">
            Download and start using your premium<br></br> tools immediately.
          </p>
        </div>
      </div>

      {/* ........................................... */}

      <div className="mt-15 text-center">
        <h1 className="text-[40px] font-bold">Simple, Transparent Pricing</h1>
        <p className="text-[16px] text-gray-400">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="h-[450px]  mt-15 mb-20 flex flex-row space-x-10 items-center justify-center mx-auto">
      
        <div className="h-full w-[350px] relative flex flex-col items-start justify-center  shadow-2xl rounded-2xl space-y-5 px-15 py-8">
          <h1 className="text-[30px] font-bold">Starter</h1>
          <p>Perfect for getting started</p>

          <h2 className="text-[40px] font-semibold">
            $0<span className="text-sm text-gray-600">/Month</span>
          </h2>
          <ul>
            <li>
              <span className="text-green-500">✔</span> Access to basic features
            </li>
            <li>
              <span className="text-green-500">✔</span> Limited support
            </li>
            <li>
              <span className="text-green-500">✔</span> Community access
            </li>
          </ul>

          <button className="mt-5 px-6 py-4 mb-5 rounded-[25px]   bg-[#4F39F6] text-white ">
            Get Started for Free
          </button>
        </div>

        <div className="h-full w-[350px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white relative flex flex-col   shadow-2xl rounded-2xl space-y-5 px-15 py-8">
          <h1 className="text-[30px] font-bold">Pro</h1>
          <p>Best for professionals</p>

          <h1 className="absolute -top-3 right-30 bg-[#FEF3C6] rounded-2xl px-3 text-black">
            Most Popular
          </h1>

          <h2 className="text-[40px] font-semibold">
            $29<span className="text-sm text-gray-200">/Month</span>
          </h2>
          <ul>
            <li>
              <span className="text-white-500">✔</span> Access to basic features
            </li>
            <li>
              <span className="text-white-500">✔</span> Limited support
            </li>
            <li>
              <span className="text-white-500">✔</span> Community access
            </li>
          </ul>

<div className="flex items-center justify-center">
              <button className="mt-5 px-6 py-4 mb-5 rounded-[25px]  bg-white text-[#4F39F6]  hover:bg-[#3a2ab8] transition duration-300">
            Start Pro Trial
          </button>
</div>

        </div>

        <div className="h-full w-[350px] relative flex flex-col  shadow-2xl rounded-2xl space-y-5 px-15 py-8">
          <h1 className="text-[30px] font-bold">Enterprise</h1>
          <p>For teams and businesses</p>

          <h2 className="text-[40px] font-semibold">
            $99<span className="text-sm text-gray-600">/Month</span>
          </h2>
          <ul>
            <li>
              <span className="text-green-500">✔</span> Access to basic features
            </li>
            <li>
              <span className="text-green-500">✔</span> Limited support
            </li>
            <li>
              <span className="text-green-500">✔</span> Community access
            </li>
          </ul>

        <div className="flex items-center justify-center">
        <button className="mt-5 px-6 py-4 mb-5 rounded-[25px] bg-[#4F39F6] text-white hover:bg-[#3a2ab8] transition duration-300">
            Contact Sales
        </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default StepForAccount;
