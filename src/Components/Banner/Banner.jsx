import React from "react";
import { BsStars } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { MdContactMail } from "react-icons/md";
import myPhoto from "../../assets/myPhoto.png";
import coding from "../../assets/Coding.json";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Lottie from "lottie-react";
import TypingEffect from "../TypeEffect/TypeEffect";
const Banner = () => {
  return (
    <section id="home" className="  py-10 md:py-20 ">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        {/* relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 */}
        <div className="text-white shadow-2xl">
          <div className=" badge backdrop-blur-xl border border-white/10 bg-black/40 shadow-lg shadow-white/10 mb-6 px-4 py-5 rounded-full">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
              <BsStars className=" text-[#6366f1] mr-2" />
              Ready to Innovate
            </span>
          </div>
          <div className="  mb-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">
              MERN Stack
            </h1>
            <span className=" text-4xl md:text-6xl font-bold drop-shadow-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Developer
            </span>
          </div>
          <div>
            <TypingEffect></TypingEffect>
          </div>
          <p className="text-lg text-gray-400 md:text-xl mb-8 drop-shadow-md max-w-lg">
            MERN Stack Developer building smart & scalable web applications.
          </p>
          <div className="flex gap-4">
            <a
              href="#portfolio"
              className="px-6 py-2 sm:py-3 rounded-lg bg-black relative
             before:absolute before:inset-0 before:rounded-lg before:p-[2px]
             before:bg-gradient-to-r before:from-indigo-500 before:to-pink-500
             before:-z-10
             shadow-lg shadow-indigo-500/30 hover:shadow-pink-500/40
             transition-all duration-300 flex items-center gap-2"
            >
              View Projects <FiExternalLink />
            </a>
            <a
              href="#portfolio"
              className="px-4 py-2 sm:py-3 rounded-lg bg-black relative
             before:absolute before:inset-0 before:rounded-lg before:p-[2px]
             before:bg-gradient-to-r before:from-indigo-500 before:to-pink-500
             before:-z-10
             shadow-lg shadow-indigo-500/30 hover:shadow-pink-500/40
             transition-all duration-300 flex items-center gap-2"
            >
              Contacts <MdContactMail />
            </a>
          </div>
          <div className=" flex items-center gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/samiul-alim-cse/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:py-3 rounded-lg bg-black relative
             before:absolute before:inset-0 before:rounded-lg before:p-[2px]
             before:bg-gradient-to-r before:from-indigo-500 before:to-pink-500
             before:-z-10 text-blue-600
             shadow-lg shadow-indigo-500/30 hover:shadow-pink-500/40
             transition-all duration-300 flex items-center gap-2"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/samiulalim-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:py-3 rounded-lg bg-black relative
             before:absolute before:inset-0 before:rounded-lg before:p-[2px]
             before:bg-gradient-to-r before:from-indigo-500 before:to-pink-500
             before:-z-10
             shadow-lg shadow-indigo-500/30 hover:shadow-pink-500/40
             transition-all duration-300 flex items-center gap-2"
              aria-label="LinkedIn"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <Lottie className="w-72 md:w-116" animationData={coding}></Lottie>
          {/* <img
            src={myPhoto}
            alt="Profile"
            className="w-72 md:w-96 rounded-full shadow-lg object-cover"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
