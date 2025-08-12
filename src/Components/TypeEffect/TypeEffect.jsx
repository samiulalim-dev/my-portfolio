import React from "react";
import { ReactTyped } from "react-typed";

const TypingEffect = () => {
  return (
    <div className="text-white  sm:text-lg py-6 font-semibold">
      <ReactTyped
        strings={[
          "Hi I'm Samiul Alim",
          "MERN Stack Web Developer",
          "Love to build scalable web apps",
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </div>
  );
};

export default TypingEffect;
