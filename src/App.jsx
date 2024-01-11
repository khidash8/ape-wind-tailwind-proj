import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import AboutMe from "./components/AboutMe";
import WhatYouLearn from "./components/WhatYouLearn";
import WhatWeBuild from "./components/WhatWeBuild";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Overview />
      <AboutMe />
      <WhatYouLearn />
      <WhatWeBuild />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
