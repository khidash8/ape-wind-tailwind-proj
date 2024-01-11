import SmileCard from "./misc/SmileCard";

const WhatWeBuild = () => {
  return (
    <div className=" bg-gray-300 px-4 py-10 text-center text-gray-600 lg:mx-auto lg:p-32 lg:px-32">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="mb-6 text-2xl font-bold capitalize text-gray-700 lg:text-5xl">
          What we'll build in this course
        </h2>

        <p className="mb-10 text-lg lg:text-xl">
          These components are things you'll have to create in every project.
        </p>

        <div className="container mx-auto grid grid-cols-1 gap-5 lg:grid-cols-3">
          <SmileCard description={`Buttons`} bgColor={`bg-red-500`} />
          <SmileCard description={`Cards`} bgColor={`bg-blue-500`} />
          <SmileCard description={`Forms`} bgColor={`bg-green-500`} />
          <SmileCard description={`Header`} bgColor={`bg-purple-500`} />
          <SmileCard description={`Navigation`} bgColor={`bg-pink-500`} />
          <SmileCard description={`Hero`} bgColor={`bg-yellow-500`} />
          <SmileCard description={`Grids`} bgColor={`bg-orange-500`} />
          <SmileCard description={`Newsletter`} bgColor={`bg-indigo-500`} />
        </div>
      </div>
    </div>
  );
};

export default WhatWeBuild;
