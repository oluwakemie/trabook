import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="font-bold flex gap-2 ">
        <h1>Trabook</h1>
        <img src="/Images/logo.svg" alt="" />
      </div>
      <nav className="text-xs md:flex hidden  ">
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>


          <Link to="/about">
            <li>About </li>
          </Link>


          <Link to="/picture">
            <li>Destination</li>
          </Link>
          <li>Tour</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div className="text-xs flex gap-7 font-medium">
        <button type="button" className="text-[#FA7436]">
          Login
        </button>
        <button
          type="button"
          className="bg-[#FA7436] px-6 py-2 rounded-md shadow-md text-white "
        >
          Sign Up
        </button>
      </div>
      <svg
        className="block md:hidden"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6L4 6"
          stroke="#717171"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M20 12L4 12"
          stroke="#717171"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M20 18H4"
          stroke="#717171"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default Navbar;
