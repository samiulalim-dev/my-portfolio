import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const Roots = () => {
  return (
    <div className="relative w-full  overflow-hidden bg-[#010212]">
      <div
        className="absolute inset-0  pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div>
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Roots;
