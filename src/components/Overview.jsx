const Overview = () => {
  return (
    <div className=" relative bg-purple-800">
      <div className="relative z-10 mx-auto  max-w-7xl px-2 py-10  lg:px-0 lg:py-20">
        {/* heading */}
        <h2 className="mx-auto my-16 text-center text-2xl font-bold capitalize text-purple-100 lg:w-3/4 lg:text-6xl">
          Writing CSS is tough stuff!
        </h2>

        {/* description */}
        <div className="mx-auto space-y-3 lg:flex  lg:gap-8 lg:space-y-0">
          {/* left section */}
          <div className="space-y-8 rounded-lg bg-white p-4 text-lg leading-relaxed tracking-wide shadow-lg lg:w-2/3 lg:p-10">
            <p>
              Tailwind makes writing CSS easier and lets us customize our
              designs faster than any other CSS framework. If you want a CSS
              framework that has pre-built components, then Tailwind may not be
              for you. If you want a CSS framework that lets you design quickly
              and customize your site, then{" "}
              <strong className="text-teal-500">
                Tailwind is gonna be a lot of fun
              </strong>
              .
            </p>

            <p>
              After using Bulma to build{" "}
              <a
                href="https://scotch.io"
                className="text-teal-500 hover:underline"
              >
                Scotch.io
              </a>
              , my CSS files became littered with my own{" "}
              <code className="rounded-lg bg-gray-300 px-2 py-1 text-xs text-red-500">
                !important
              </code>{" "}
              classes to override the framework's styles. Tailwind doesn't have
              the{" "}
              <code className="rounded-lg bg-gray-300 px-2 py-1 text-xs text-red-500">
                !important
              </code>{" "}
              problem since all our elements are designed on the fly.{" "}
              <strong>Important Note:</strong> Tailwind lets us design quickly,
              but this doesn't mean that you don't need CSS knowledge however.
              To use Tailwind, you need to have a good understanding of CSS
              properties. In this course,{" "}
              <strong>
                we will learn Tailwind and we'll also learn CSS concepts
              </strong>{" "}
              to create good looking designs.{" "}
              <strong>Tailwind is the ultimate CSS shorthand</strong>, but we
              still need to learn the CSS, which we'll do in this course.
            </p>

            <p className=" rounded bg-gray-300 p-2 text-2xl  italic text-green-900">
              This isn't just a Tailwind course. This is also a "learn how to
              design with CSS" course.
            </p>

            <p>
              The hardest things about learning Tailwind is memorizing the
              classes and also knowing which classes go well together. We'll be
              writing a lot of Tailwind in this course so that the repetition
              will help us commit Tailwind classes to memory.
            </p>
          </div>

          {/* right section */}
          <div className="flex-grow space-y-4 lg:space-y-8">
            <div className="rounded-lg bg-purple-600 px-8 py-8 font-normal tracking-wider text-purple-100">
              What classes should I use?
            </div>
            <div className="rounded-lg bg-purple-600 px-8 py-8 font-normal tracking-wider text-purple-100">
              How do I make things look good?
            </div>
            <div className="rounded-lg bg-purple-600 px-8 py-8 font-normal tracking-wider text-purple-100">
              My design looks basic?
            </div>
            <div className="rounded-lg bg-purple-600 px-8 py-8 font-normal tracking-wider text-purple-100">
              How do I do responsive?
            </div>
            <div className="rounded-lg bg-purple-600 px-8 py-8 font-normal tracking-wider text-purple-100">
              Why does my typography look so bad?
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gray-200"></div>
    </div>
  );
};

export default Overview;
