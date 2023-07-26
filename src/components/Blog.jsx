import React from "react";

const Blog = () => {
  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-[30px] font-bold">
          Get update with <span className="text-[#FA7436]  ">latest blog</span>
        </h1>{" "}
      </div>
      <div className="flex justify-center gap-7">
        <div>
          <img src="/Images/Image(7).png" alt="" className="w-[220px]" />
          <h2 className="text-[15px] leading-5 mb-2">
            The Amazing Difference a <br /> Year of Travelling .
          </h2>
          <p className="text-xs text-[#999]">July 27, 2021</p>
        </div>
        <div>
          <img src="/Images/Image(8).png" alt="" className="w-[220px]" />
          <h2 className="text-[15px] leading-5 mb-2">
            The Amazing Difference a <br /> Year of Travelling .
          </h2>
          <p className="text-xs text-[#999]">July 27, 2021</p>
        </div>
        <div>
          <img src="/Images/Image(9).png" alt="" className="w-[220px]" />
          <h2 className="text-[15px] leading-5 mb-2">
            The Amazing Difference a <br /> Year of Travelling .
          </h2>
          <p className="text-xs text-[#999]">July 27, 2021</p>
        </div>
        <div>
          <img src="/Images/Image(10).png" alt="" className="w-[220px]" />
          <h2 className="text-[15px] leading-5 mb-2">
            The Amazing Difference a <br /> Year of Travelling .
          </h2>
          <p className="text-xs text-[#999] ">July 27, 2021</p>
        </div>
      </div>{" "}
      <div className="mt-5 flex justify-center mb-5">
        <img src="/Images/Slider.svg" alt="" />
      </div>
      <div className="flex justify-center ">
        <div className="w-[700px] h-[200px] bg-[#FA7436] rounded-md flex flex-col items-center ">
          <h1 className="font-bold text-[30px] text-center leading-none py-7 text-white mb-3">
            Subscribe and get exclusive <br /> deals & offer
          </h1>
          <div className="w-[500px] max-w-[500px] relative  h-[68px]  px-1 ">
           
              {" "}
              <img src="/Images/Group46.svg" alt="" className="w-4 h-[16px] absolute z-10 left-5 top-6" />
              <input type="text" placeholder="Enter your mail" className="text-md text-[#999] pl-10 pr-[30px] w-full py-5  rounded-md focus:border-orange-400   focus:outline-orange-400" />
              <button
                type="button"
                className=" w-[120px] py-3 rounded-lg bg-[#FA7436] absolute top-2 right-2 text-white font-bold"
              >
                Subscribe
              </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
