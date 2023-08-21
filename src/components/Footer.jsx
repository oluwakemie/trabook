import React from "react";

const Footer = () => {
  return (
    <>
      <div className="px-10 py-20 text-black flex flex-col gap-4 justify-around md:flex-row">
        <div className="text-black text-[15px]  leading-5 font-extralight  ">
          <div className="flex gap-2 ">
            {" "}
            <h1 className="font-bold text-lg ">Trabook</h1>{" "}
            <img src="/Images/Logo.svg" alt="logo"  />
          </div>
          <p className="mt-5">
            Book your trip in minute, get full <br />
            Control for much longer.
          </p>
          <div className="flex items-center mt-9 gap-2">
            <img src="Images/fb.svg" alt="" />
            <img src="Images/ig.svg" alt="" />

            <img src="Images/twit.svg" alt="" />
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-5">Company</h1>
          <div className=" text-[15px] leading-9 ">
            <p>About Us</p>
            <p>Career</p>
            <p>Logistics</p>
            <p>Privacy & Policy</p>
            <p>Testimonials</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-5">Contact</h1>
          <div className="font-thin text-[15px] leading-9 ">
            <p>Help / FAQ</p>
            <p>Press</p>
            <p>Affiliates</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-5">More</h1>
          <div className="font-thin text-[15px] leading-9 ">
            <p>Press Center</p>
            <p>Our Blog</p>
            <p>Low fare Tips</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <img src="/Images/Border.svg" alt="" />
      </div>
      <div className="px-20 text-[11px] md:flex justify-between text-[#999]">
        <p>Copyright, Trabook 2023. All rights reserved.</p>
        <p>Terms & Conditions</p>
      </div>
    </>
  );
};

export default Footer;
