import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Product1 from "./components/Product1";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div>
      <div className=" md:px-[90px]  lg:px-[140px] px-[16px] py-5">
        {" "}
        <Navbar />
        {/* <NavBar /> */}
      </div>
      <div className=" md:px-[90px]  lg:px-[140px] px-[16px] py-5">
        <Hero />
      </div>
      <div className="mt-[200px] bg-[#F7F8FC]  w-full  md:px-[90px]  lg:px-[140px] px-[16px] py-5">
        <Product />
      </div>
      <div className="mt-[100px]  md:px-[90px]  lg:px-[140px] px-[16px]">
        <Product1 />
      </div>
      <div className="mt-[100px]  md:px-[90px]  lg:px-[140px] px-[16px]">
        <Blog />
      </div>
      <div>
        <Footer className="mt-[100px]  md:px-[90px]  lg:px-[140px] px-[16px] bg-[#F7F8FC] w-full h-full"/>
      </div>
    </div>
  );
};

export default Home;
