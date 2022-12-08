import React from "react";
import About from "../../components/About/About";
import Choose from "../../components/Choose/Choose";
import ContactUs from "../../components/ContactUs/ContactUs";

import Fams from "../../components/Fam/Fams";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/Hero/Hero";
import Heros from "../../components/Hero/Heros";
import NavBar from "../../components/Navbar/NavBar";
import Partners from "../../components/Partners/Partners";
import Service from "../../components/Service/Service";
import ImageSlick from "../../components/Slick/ImageSlick";
import Trust from "../../components/Trust/Trust";
import Zoomer from "../../components/ZoomSlider/Zoomer";

const HomePage = () => {
  return (
    <div>
      {/* <Zoomer /> */}
      <Hero />
      <Partners />
      <About />
      <Choose />
      <Service />
      <ContactUs />
      {/* <ImageSlick /> */}

      <Fams />
      <Trust />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
