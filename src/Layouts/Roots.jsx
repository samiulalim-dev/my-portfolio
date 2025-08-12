import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const Roots = () => {
  return (
    <div className="relative w-full  bg-[#0a0a23]">
      <div
        className="absolute inset-0  pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div className=" ">
        <div className=" sticky  top-0 z-50">
          <Navbar></Navbar>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Roots;
