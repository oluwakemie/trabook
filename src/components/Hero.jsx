import React from "react"; 
import { motion } from "framer-motion";

const div = () => {
  


  return (
    <>
      <div className="flex justify-between flex-col md:flex-row pt-[28px] mt-[20px]  gap-10">
        <div className="w-full md:w-[50%]">
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{
              duration: 2.0,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <h1 className="leading-tight font-bold md:text-[35px] lg:text-[50px] text-[42px]">
              Get started your exciting{" "}
              <span className="text-[#FA7436]">journey</span> with us.
            </h1>
            <p className="text- ">
              A Team of experienced tourism professionals will provide you with
              the best advice and tips for your desire place.{" "}
            </p>{" "}
          </motion.div>
        </div>

        <div className="w-full md:w-[50%]">
          <img
            src="/Images/Image(4).png"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <button
        type="button"
        className="outline outline-1 px-6 py-2 mt-10 text-[#FA7436] hover:bg-[#FA7436] hover:text-[white]"
      >
        Discover Now
      </button>
      <div className="mt-[70px] px-4 flex flex-wrap justify-center items-center gap-5 bg-slate-100  max-w-[auto]  h-{auto}]    md:mx-[110px]">
        <div className=" ">
          <p className="font-bold text-sm flex gap-2 ">
            Location <img src="/Images/Vector.svg" alt="" />
          </p>
          <p className="text-xs">Where are you going</p>
        </div>
        <div>
          <p className="font-bold text-sm flex gap-2">
            Date <img src="/Images/Vector.svg" alt="" />
          </p>
          <p className="text-xs">When are you going</p>
        </div>
        <div>
          <p className="font-bold text-sm flex gap-2">
            Guest <img src="/Images/Vector.svg" alt="" />
          </p>
          <p className="text-xs">Number of Guest</p>
        </div>
        <button
          type="button"
          className="bg-[#FA7436] px-3 md:px-6 py-3 rounded-md shadow-md max-w-[150px]  text-white hover:bg-[#f38552]"
        >
          Explore Now
        </button>
      </div>
    </>
  );
};

export default div;
