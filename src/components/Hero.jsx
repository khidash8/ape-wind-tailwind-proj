import RainbowCircle from "./misc/RainbowCircle";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-300">
      <div className="container z-10 mx-auto px-6 py-24 text-center lg:px-0 ">
        {/* Decoration */}
        <RainbowCircle
          className={"absolute right-52 top-0 hidden md:top-52 lg:block"}
        />
        <RainbowCircle className={"absolute left-0 top-52 lg:top-0"} />

        {/* heading */}
        <h1 className="mb-4 text-4xl font-extrabold lg:text-6xl">
          <span className="to bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
            Beginner
          </span>
          <span> </span>
          <span className="to bg-gradient-to-r from-teal-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            Tailwind
          </span>
        </h1>
        {/* paragraph */}
        <p className="mb-12 text-xl text-gray-600 lg:text-3xl">
          Make good looking designs quickly. All without a single line of custom
          CSS.
        </p>

        {/* button */}
        {/* <a
            href="/"
            className="hover:shadow-4xl mb-12 inline-block rounded bg-gray-200 px-8 py-2 font-serif text-xl tracking-wide shadow-2xl  transition duration-300 hover:scale-105 hover:bg-[#FF90E8] hover:text-black"
            >
            Get Course
          </a> */}
        <a
          href="/"
          className="relative -left-1 -top-1 w-full transform bg-gradient-to-br from-purple-500 to-purple-900 px-12 py-3 font-medium uppercase text-white transition-all before:absolute before:left-1 before:top-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:left-0 hover:top-0 before:hover:left-0 before:hover:top-0"
        >
          Get Course
        </a>
        <div className="relative mx-auto mt-12 flex flex-col space-y-8  rounded-lg text-amber-900 lg:w-3/4 lg:border-4 lg:border-purple-400 lg:shadow-xl">
          {/* stats */}
          <div className="transform border-t-4 border-yellow-500 bg-yellow-100 p-4 shadow-xl lg:absolute lg:right-0 lg:top-0 lg:-translate-y-4 lg:translate-x-4">
            <p>
              <strong>We'll create BeginnerTailwind.com</strong>{" "}
              <span className="text-yellow-700">
                (it's the site you're on now)
              </span>
            </p>
            <p>We'll do it all without a single line of custom CSS!</p>
          </div>
          {/* image */}
          <img
            src="https://i.imgur.com/wysbBMS.png"
            alt="hero"
            className="rounded-lg  border-4 border-purple-400 shadow-xl lg:border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
