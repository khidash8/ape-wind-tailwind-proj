import MeImg from "../assets/myself.jpg";

const AboutMe = () => {
  return (
    <div className="bg-gray-200 pb-12 lg:text-center">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-2 ">
        <h2 className="mt-2 text-center text-3xl font-bold text-teal-600 lg:text-5xl">
          A Little About Me
        </h2>

        <img
          src={MeImg}
          alt="khidash muhammed"
          className="m-auto inline-block h-64 w-64 rounded-full text-center shadow-2xl"
        />

        <p className="rounded bg-white p-2 py-5 text-lg shadow-lg lg:px-10 lg:text-2xl lg:leading-loose">
          Hello, I'm{" "}
          <a
            href="https://www.facebook.com/khidash1"
            className="text-blue-500 hover:underline"
          >
            Khidash Muhammed
          </a>
          , a 29-year-old aspiring <strong>front-end developer</strong> with a
          passion for crafting engaging and user-friendly web experiences.
          Recently, I successfully{" "}
          <strong>completed the React.js course with Meta</strong>, equipping
          myself with the latest skills in this dynamic JavaScript library. As a{" "}
          <strong>fresh talent in the field</strong>, I am eager to apply my
          knowledge and contribute to innovative projects.
          {/* {" "}
          <span className="text-teal-500">
            I thrive on staying abreast of emerging technologies and trends to
            deliver cutting-edge solutions
          </span>
          . With a solid foundation in React.js, I am poised to embark on a
          fulfilling journey in the world of web development,{" "}
          <span className="text-red-500">
            bringing creativity and dedication to every project I undertake
          </span>
          . */}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
