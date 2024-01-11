const NavBar = () => {
  return (
    <div className=" z-20 bg-gradient-to-r from-white to-gray-200">
      {/* Left */}
      <div className="container m-auto flex items-center justify-between px-5 py-6 text-gray-600 lg:px-0 ">
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <a
                href="#"
                className="text-2xl font-bold capitalize text-teal-500"
              >
                apewind
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hidden hover:text-gray-800 lg:inline-block"
              >
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray- hidden lg:inline-block">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray- hidden lg:inline-block">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Right */}
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#login">login</a>
            </li>
            <li>
              <a
                href="#sign-up"
                className="hidden rounded bg-purple-400 px-6 py-2 text-purple-100  shadow transition duration-500 hover:bg-purple-300 hover:text-purple-500 hover:shadow-2xl lg:inline-block"
              >
                signup
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
