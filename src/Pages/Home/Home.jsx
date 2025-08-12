import React from "react";
import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import MyProjects from "../../Components/MyProjects/MyProjects";
import Contact from "../../Components/Contacts/Contacts";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Skills></Skills>
      </div>
      <div>
        <MyProjects></MyProjects>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
