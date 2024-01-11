import GridContent from "./misc/GridContent";

const WhatYouLearn = () => {
  return (
    <div className="bg-gray-200 px-4 text-gray-700 lg:p-32">
      <div className=" lg:mx-auto lg:px-32">
        {/* heading */}
        <div className="relative">
          <h2 className="mb-10 text-center text-3xl font-bold capitalize text-purple-900 lg:text-6xl">
            What you'll learn in this course
          </h2>

          <div className="absolute bottom-0 right-0  h-2 w-1/3 translate-y-6 rounded bg-gradient-to-r from-blue-400 to-purple-600 "></div>
          <div className="absolute left-0 top-0  h-2 w-1/3 -translate-y-6 rounded bg-gradient-to-r from-purple-400 to-blue-600 "></div>
        </div>

        {/* grid */}
        <div className="mx-auto grid-cols-6 gap-8 space-y-4 py-10 lg:grid lg:space-y-0 lg:px-6">
          <GridContent
            main={"col-span-2"}
            h3={"How to use Tailwind classes"}
            p={`We'll dive into the most important Tailwind classes and use them a TON. There are a lot of useful classes like spacing, backgrounds, borders, shadows, and typography. We'll type the Tailwind classes many times over to ensure that repeitition is our greatest learning tool.`}
          />
          <GridContent
            main={"col-span-2"}
            h3={`Make good looking designs`}
            p={`There's a certain process to designing with Tailwind that we'll take to make our designs look good. Some easy to remember rules are all it takes to get a good design. We'll also talk about ideas and action items to take a good design and make it great.`}
          />
          <GridContent
            main={"col-span-2"}
            h3={`Why Tailwind is different/better`}
            p={`To be completely honest, I didn't like Tailwind at first. It felt like inline styles to me (and maybe still does). After using it more and more though, I've come to absolutely love it. I dread jumping into a project without Tailwind now.`}
          />
          <GridContent
            main={"col-span-3"}
            h3={`How to build this site (site-ception!)`}
            p={`The site you're on (BeginnerTailwind.com) is built with Tailwind and has 0 custom css.
            You can take all of the code from this site and use it for your own landing pages or sites! All the code is available to you with course purchase.`}
          />
          <GridContent
            main={"col-span-3"}
            h3={`A fun and methodical design process`}
            p={`I struggle with making things look good and don't consider myself a designer. What I try to do is have a formula for making things look good. I focus on design in this order: spacing, box properties, typography, fun element to pop. We'll talk about this all throughout the course.`}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatYouLearn;
