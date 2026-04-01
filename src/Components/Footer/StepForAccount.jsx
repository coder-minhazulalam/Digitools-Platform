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
            <button className="mt-5 px-6 py-4 mb-5 rounded-[25px]  bg-white text-[#4F39F6] ">
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
            <button className="mt-5 px-6 py-4 mb-5 rounded-[25px] bg-[#4F39F6] text-white ">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* ............................................... */}

      <div className="text-center flex flex-col items-center justify-center  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-10">
        <div className="mt-15 text-center">
          <h1 className="text-[40px] font-bold">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-[16px] text-gray-400">
            Join thousands of professionals who are already using Digitools to
            work smarter.<br></br>Start your free trial today.
          </p>
        </div>

        <div className="flex flex-row gap-3">
          <button className="mt-5 px-6 py-2 mb-5 rounded-[25px]  bg-white text-[#4F39F6]  ">
            Explore Products
          </button>

          <button className="mt-5 px-6 py-2 mb-5 text-white rounded-[25px] border border-solid border-white text-[#4F39F6]  ">
            View Pricing
          </button>
        </div>

        <p className="text-gray-400">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>

      {/* ----------  FOOTER --------------------- */}

      <footer className="bg-[#0B1220] text-gray-400 px-10 py-16">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
            <div className="col-span-2">
              <h2 className="text-white text-2xl font-bold mb-4">DigiTools</h2>
              <p className="text-sm leading-6">
                Premium digital tools for creators,
                <br />
                professionals, and businesses. Work smarter
                <br />
                with our suite of powerful tools.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-semibold mb-4">Social Links</h3>
              <div className="flex gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer">
                  <img src="/public/assets/Instagram.svg" alt="Instagram"></img>
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer">
                  <img src="/public/assets/Facebook.svg" alt="Facebook"></img>
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer">
                  <img src="/public/assets/fi_5968958.svg" alt="Twitter"></img>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-10"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2026 Digitools. All rights reserved.</p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="cursor-pointer hover:text-white">
                Privacy Policy
              </span>
              <span className="cursor-pointer hover:text-white">
                Terms of Service
              </span>
              <span className="cursor-pointer hover:text-white">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default StepForAccount;
