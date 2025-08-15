import React, { useEffect, useState } from "react";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../../assets/myLogo.png";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const [activeHash, setActiveHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
    {
      href: "https://github.com/samiulalim-dev/",
      target: "_blank",
      label: (
        <span className="flex items-center gap-1">
          Resume <FaArrowDown />
        </span>
      ),
    },
  ];

  return (
    <nav
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
      className=" text-white bg-[#0a0a23]  w-full"
    >
      <div className="sm:w-11/12  sm:mx-auto px-4 sm:px-0">
        <div className="flex justify-between h-18 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center ">
            <img src={logo} alt="Logo" className="w-16  h-auto py-5" />
            <span
              className="text-2xl font-bold  bg-gradient-to-r from-[#6366f1] to-[#a855f7]
                   bg-clip-text text-transparent select-none"
            >
              samiul Alim
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            {links.map(({ href, label, target }) => {
              const isActive = activeHash === href;
              return (
                <a
                  key={href}
                  href={href}
                  target={target || "_self"}
                  rel={target === "_blank" ? "noopener noreferrer" : undefined}
                  className={`relative transition-colors
              ${
                isActive
                  ? "text-indigo-400 after:scale-x-100"
                  : "text-white hover:text-indigo-400 after:scale-x-0 hover:after:scale-x-100"
              }
              after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full
              after:bg-gradient-to-r after:from-[#6366f1] after:to-pink-500
              after:origin-left after:transition-transform after:duration-300
              `}
                >
                  {label}
                </a>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden px-6 py-6 space-y-4 font-semibold flex flex-col text-lg "
          >
            {links.map(({ href, label, target }) => {
              const isActive = activeHash === href;
              return (
                <a
                  key={href}
                  href={href}
                  target={target || "_self"}
                  rel={target === "_blank" ? "noopener noreferrer" : undefined}
                  className={`relative transition-colors duration-300
              ${
                isActive
                  ? "text-indigo-400 after:scale-x-100"
                  : "text-white hover:text-indigo-400 after:scale-x-0 hover:after:scale-x-100"
              }
              after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full
              after:bg-gradient-to-r after:from-[#6366f1] after:to-pink-500
              after:origin-left after:transition-transform after:duration-300
            `}
                >
                  {label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
