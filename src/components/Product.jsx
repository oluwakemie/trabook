import React from "react";

const Product = () => {
  return (
    <div>
      <div className="text-center leading-1 ">
        <h1 className="font-bold text-[48px]">
          Things you need <span className="text-[#FA7436]"> to do</span>{" "}
        </h1>
        <p className="text-sm text-[#666]">
          We ensure that you’ll embark on a perfectly planned,
          <br /> safe vacation at a price you can afford.{" "}
        </p>
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-10 md:flex-row  ">
        <div className="bg-white w-[270px]  shadow flex flex-col gap-3 px-3 py-5">
          <img
            src="/Images/Group.svg"
            alt=""
            className="w-[20px] mt-5 mx-auto"
          />
          <h1 className="text-[12px] font-bold text-center">Sign Up</h1>
          <p className="text-[10px] text-center">
            Completes all the work associated <br /> with planning and
            processing
          </p>
        </div>
        <div className="bg-white w-[270px] shadow flex flex-col gap-3 px-3 py-5">
          <img
            src="/Images/Group(1).svg"
            alt=""
            className="w-[20px] mt-5 mx-auto"
          />
          <h1 className="text-[12px] font-bold text-center">Worth of Money</h1>
          <p className="text-[10px] text-center">
            After successful access then book from <br /> exclusive deals &
            pricing
          </p>
        </div>
        <div className="bg-white w-[270px]  shadow flex flex-col gap-3 px-3 py-5">
          <img
            src="/Images/Group(2).svg"
            alt=""
            className="w-[20px] mt-5  mx-auto  "
          />
          <h1 className="text-[12px] font-bold text-center">Exciting Travel</h1>
          <p className="text-[10px] text-center ">
            Start and explore a wide range of <br /> exciting travel experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
