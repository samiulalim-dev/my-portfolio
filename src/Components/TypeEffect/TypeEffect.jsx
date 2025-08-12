import React from "react";
import { ReactTyped } from "react-typed";

const TypingEffect = () => {
  return (
    <div className="text-white text-xl sm:text-2xl py-6 font-semibold">
      <ReactTyped
        strings={[
          "Hi I'm Samiul Alim",
          "MERN Stack Web Developer",
          "Love to build scalable web apps",
          "Computer Science and Eng. Student",
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </div>
  );
};

export default TypingEffect;
