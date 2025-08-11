import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";

const Error = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#010212]">
      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content */}
      <div className="min-h-screen flex flex-col items-center justify-center  text-white px-4">
        {/* Error Code */}
        <motion.h1
          className="text-[6rem] md:text-[8rem] font-extrabold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg"
          style={{
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 50%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          404
        </motion.h1>

        {/* Title */}
        <div className="flex items-center justify-center space-x-2 ">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Oops! Page Not Found
          </h2>
          <FiAlertCircle color=" red" size={28} />
        </div>

        {/* Message */}
        <p className="text-center max-w-md text-gray-600 mb-8">
          The page you’re looking for doesn’t exist, has been removed, or is
          temporarily unavailable. Please click the button below to go back to
          the homepage.
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className=" px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
        >
          <FaHome className="mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
};
// w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow aos-init aos-animate

export default Error;
