import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {FaTimes} from "react-icons/fa"

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <div className="font-bold flex gap-2  ">
        <h1>Trabook</h1>
        <img src="/Images/logo.svg" alt="" />
      </div>
      <nav className=" md:flex flex-col text-xs  md:flex-row hidden">
        <ul className="md:flex gap-4 lg:flex  ">
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
      <div className="text-xs hidden md:flex gap-7 font-medium">
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
      {menu ? (
        <FaTimes onClick={() => setMenu(!menu)} />
      ) : (
        <svg
          onClick={() => setMenu(!menu)}
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
      )}

      {menu ? (
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{
            duration: 2.0,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="absolute top-[56px] right-0 min-w-[190px] md:hidden  bg-[#FA7436] "
        >
          <ul className="md:flex gap-7 lg:flex px-8 py-5 items-center justify-center text-white">
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
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
