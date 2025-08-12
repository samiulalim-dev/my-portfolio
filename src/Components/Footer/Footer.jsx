import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" relative bg-gray-900 text-white mt-12 md:mt-24 py-10 px-6">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Copyright */}
        <p className="text-sm  z-10">
          &copy; {new Date().getFullYear()} Samiul Alim. All rights reserved.
        </p>

        {/* Center: Social Icons */}
        <div className="flex space-x-6 z-10 text-xl">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:samiulalim.dev@gmail.com"
            className="hover:text-[#f339002d] transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        {/* Decorative overlapping images */}
        <img
          src="https://i.ibb.co/zNk7XT4/Rectangle-97.png"
          alt="decorative wave 1"
          className="absolute bottom-[15px] sm:bottom-0 left-0 right-0 z-5 w-full opacity-60"
        />
        <img
          src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
          alt="decorative wave 2"
          className="absolute bottom-0 left-0 right-0  w-full z-5 opacity-80"
        />

        {/* Right: Made with love */}
        <p className="text-sm md:flex items-center z-10 hidden">
          Made with{" "}
          <span className="text-pink-500">
            {" "}
            <IoMdHeart />
          </span>{" "}
          by Samiul Alim
        </p>
      </div>
    </footer>
  );
};

export default Footer;
