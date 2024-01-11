const Pricing = () => {
  return (
    <>
      {/* decoration */}
      <div className="asolute inset-x-0 top-0 h-32 bg-gray-300"></div>

      <div className=" relative items-center bg-blue-500 p-8 pb-2 pt-0 lg:mx-auto lg:flex">
        {/*  */}
        {/* only on mobile */}
        <div className="-translate-y-10  transform space-y-8 rounded-lg border-4 border-purple-800 bg-white p-4 py-16 text-center shadow-lg transition duration-500 hover:scale-105 lg:hidden lg:w-3/12">
          <h4 className="text-xl text-gray-400">
            Start Tailwind-<span className="italic">ing</span>!
          </h4>
          <p className="text-5xl  text-purple-800">
            <span className="line-through opacity-50">$125</span>{" "}
            <span className="text-gray-500">$</span>99
          </p>
          <button className="relative -left-1 -top-1 w-full  bg-gradient-to-br from-purple-500 to-purple-900 px-12 py-3 font-medium uppercase text-white transition-all before:absolute before:left-1 before:top-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:left-0 hover:top-0 before:hover:left-0 before:hover:top-0">
            Get Started
          </button>

          {/* decoration */}
          <div className="absolute inset-x-0 top-0 flex h-24 -translate-y-full transform items-end justify-center space-x-5">
            <div className="mb-12 h-12 w-2 origin-bottom -rotate-45 rounded bg-red-500"></div>
            <div className="mb-12 h-16 w-2  origin-bottom  rounded bg-green-500"></div>
            <div className="mb-12 h-12 w-2 origin-bottom  rotate-45 rounded bg-yellow-500"></div>
          </div>
        </div>

        {/* left */}
        <div className="space-y-4 p-4 text-center text-xl text-white lg:w-1/3 lg:text-right">
          <p>
            <strong className="text-2xl">75 videos</strong> at a smooth pace
          </p>
          <p>
            <strong className="text-2xl">9.25 hours</strong> of learning +
            building
          </p>
          <p>
            <strong className="text-2xl">Source code</strong> and CodePens
          </p>
        </div>

        {/* center */}
        <div className="transformspace-y-8 hidden space-y-8 rounded-lg border-4 border-purple-800 bg-white p-4 py-16 text-center shadow-lg transition duration-500 hover:scale-105 lg:block lg:w-3/12 lg:-translate-y-10">
          <h4 className="text-xl text-gray-400">
            Start Tailwind-<span className="italic">ing</span>!
          </h4>
          <p className="text-5xl  text-purple-800">
            <span className="line-through opacity-50">$125</span>{" "}
            <span className="text-gray-500">$</span>99
          </p>
          <button className="relative -left-1 -top-1 w-full  bg-gradient-to-br from-purple-500 to-purple-900 px-12 py-3 font-medium uppercase text-white transition-all before:absolute before:left-1 before:top-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:left-0 hover:top-0 before:hover:left-0 before:hover:top-0">
            Get Started
          </button>

          {/* decoration */}
          <div className="absolute inset-x-0 top-0 flex h-24 -translate-y-full transform items-end justify-center space-x-5">
            <div className="mb-12 h-12 w-2 origin-bottom -rotate-45 rounded bg-red-500"></div>
            <div className="mb-12 h-16 w-2  origin-bottom  rounded bg-green-500"></div>
            <div className="mb-12 h-12 w-2 origin-bottom  rotate-45 rounded bg-yellow-500"></div>
          </div>
        </div>

        {/* right */}
        <div className="space-y-4 p-4 text-center text-xl text-white lg:block lg:w-1/3 lg:text-left">
          <p>
            Use the code in <strong className="text-2xl">your projects</strong>
          </p>
          <p>
            Access to <strong className="text-2xl">Discord</strong> for support
          </p>
          <p>
            Lifetime <strong className="text-2xl">refund guarantee</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Pricing;
