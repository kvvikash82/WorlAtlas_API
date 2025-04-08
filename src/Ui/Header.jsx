import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaGlobe,
  FaPhoneSquareAlt ,
} from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navStyles = {
    home: {
      active: "text-blue-500 after:bg-blue-500",
    },
    about: {
      active: "text-red-500 after:bg-red-500",
    },
    country: {
      active: "text-gray-500 after:bg-gray-500",
    },
    contact: {
      active: "text-green-500 after:bg-green-500",
    },
  };

  const navLinkClass = (isActive, style) =>
    `flex items-center space-x-2 px-2 py-1 rounded-md transition-all duration-300 relative
    ${isActive
      ? `${style.active} font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:transition-all after:duration-300`
      : "text-black hover:text-gray-600"}`;

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-300 shadow-md z-50 py[10px]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold" onClick={closeMenu}>
          WorlAtlas
        </NavLink>

        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className="text-2xl md:hidden">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex md:space-x-6 md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-gray-300 md:bg-transparent transition-all duration-300 z-20 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="my-2 md:my-0">
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                navLinkClass(isActive, navStyles.home)
              }
            >
              <FaHome color="blue" size={15} />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="my-2 md:my-0">
            <NavLink
              to="/about"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                navLinkClass(isActive, navStyles.about)
              }
            >
              <FaInfoCircle size={15} color="red" />
              <span>About</span>
            </NavLink>
          </li>
          <li className="my-2 md:my-0">
            <NavLink
              to="/country"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                navLinkClass(isActive, navStyles.country)
              }
            >
              <FaGlobe size={15} color="purple" />
              <span>Country</span>
            </NavLink>
          </li>
          <li className="my-2 md:my-0">
            <NavLink
              to="/contact"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                navLinkClass(isActive, navStyles.contact)
              }
            >
              <FaPhoneSquareAlt size={15} color="green" />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
