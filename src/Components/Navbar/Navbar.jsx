import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../../assets/myLogo.png";
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
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className=" text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
        <div className="flex justify-between h-20 items-center">
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
            {links.map(({ href, label }) => {
              const isActive = activeHash === href;
              return (
                <a
                  key={href}
                  href={href}
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
      {isOpen && (
        <div className="md:hidden px-4 py-4 space-y-4 font-semibold flex flex-col text-lg">
          {links.map(({ href, label }) => {
            const isActive = activeHash === href;
            return (
              <a
                key={href}
                href={href}
                className={`relative transition-colors
              ${
                isActive
                  ? "text-indigo-400 after:scale-x-20"
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
