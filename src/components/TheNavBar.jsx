// import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const TheNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [menuClose, setMenuClose] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative z-10" data-aos="fade-up" data-aos-duration="2000">
      <nav className="bg-primary-blue px-5 sm:px-20 py-10 fixed top-0 left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-col">
            <NavLink
              to={"/"}
              className="flex-1 text-main-heading-color text-2xl sm:text-3xl font-semibold"
            >
              Aasik
            </NavLink>
          </div>

          <ul
            className={`hidden xl:flex items-center text-xl ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link
                to={"/"}
                className="text-main-heading-color px-5 py-2 hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="text-main-heading-color px-5 py-2 hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#stacks"
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Tech Stacks
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Works
              </a>
            </li>
            {/* <li>
              <NavLink
                to={"/tasks"}
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Total Tasks
              </NavLink>
            </li> */}
            <li>
              <a
                href="#contact"
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Contact
              </a>
            </li>
            {/* <li>
              <button
                // to={"/hi"}
                onClick={showAlert}
                className=" text-aqua-color border border-aqua-color px-5 py-2 rounded-md hover:bg-aqua-color hover:transition 500 hover:text-primary-blue sm:hover:font-semibold"
              >
                Resume
              </button>
            </li> */}
          </ul>

          <div className="xl:hidden">
            <button
              className="focus:outline-none text-aqua-color"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={` text-main-heading-color xl:hidden mt-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-5">
            <li>
              <Link
                to={"/"}
                onClick={closeMenu}
                className="text-main-heading-color px-5 py-2 hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="text-main-heading-color px-5 py-2 hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#stacks"
                onClick={closeMenu}
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Tech Stacks
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#works"
                onClick={closeMenu}
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Works
              </a>
            </li>
            {/* <li>
              <NavLink
                to={"/tasks"}
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Total Tasks
              </NavLink>
            </li> */}
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Contact
              </a>
            </li>
            {/* <li>
              <Link
                to={"/hi"}
                className=" text-aqua-color border border-aqua-color px-5 py-2 rounded-md hover:bg-aqua-color hover:transition 500 hover:text-primary-blue sm:hover:font-semibold"
              >
                Resume
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TheNavBar;
