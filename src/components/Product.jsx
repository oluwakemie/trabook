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
      <div className="flex flex-col items-center gap-10 justify-center mt-10 md:flex-row  ">
        <div className="bg-white w-[250px]  shadow flex flex-col gap-3 px-3 py-5">
          <img src="/Images/Group.svg" alt="" className="w-[20px] mt-5" />
          <h1 className="text-[12px] font-bold">Sign Up</h1>
          <p className="text-[10px] ">
            Completes all the work associated <br /> with planning and
            processing
          </p>
        </div>
        <div className="bg-white w-[250px] shadow flex flex-col gap-3 px-3 py-5">
          <img src="/Images/Group(1).svg" alt="" className="w-[20px] mt-5" />
          <h1 className="text-[12px] font-bold">Worth of Money</h1>
          <p className="text-[10px]">
            After successful access then book from <br /> exclusive deals &
            pricing
          </p>
        </div>
        <div className="bg-white w-[250px]  shadow flex flex-col gap-3 px-3 py-5">
          <img src="/Images/Group(2).svg" alt="" className="w-[20px] mt-5" />
          <h1 className="text-[12px] font-bold">Exciting Travel</h1>
          <p className="text-[10px] ">
            Start and explore a wide range of <br /> exciting travel experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
