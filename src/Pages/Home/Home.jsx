import React from "react";
import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import MyProjects from "../../Components/MyProjects/MyProjects";
import Contact from "../../Components/Contacts/Contacts";

const Home = () => {
  return (
    <div>
      <div data-aos="fade-up">
        <Banner></Banner>
      </div>
      <div data-aos="fade-up">
        <About></About>
      </div>
      <div data-aos="zoom-up" data-aos-delay="200" data-aos-duration="1500">
        <Skills></Skills>
      </div>
      <div data-aos="fade-up">
        <MyProjects></MyProjects>
      </div>
      <div data-aos="fade-up">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
