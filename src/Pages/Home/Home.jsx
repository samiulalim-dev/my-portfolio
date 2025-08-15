import React from "react";
import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import MyProjects from "../../Components/MyProjects/MyProjects";
import Contact from "../../Components/Contacts/Contacts";
import Education from "../../Components/Educations/Educations";

const Home = () => {
  return (
    <div>
      <div data-aos="fade-up">
        <Banner></Banner>
      </div>
      <div data-aos="fade-up">
        <About></About>
      </div>
      <div data-aos="fade-up">
        <Skills></Skills>
      </div>
      {/* <div data-aos="fade-up">
        <Education></Education>
      </div> */}
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
