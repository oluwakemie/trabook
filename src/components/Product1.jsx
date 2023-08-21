import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Product1 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-[30px] font-bold mb-2">
          Exclusive <span className="text-[#FA7436]  ">deals & discounts</span>
        </h1>
        <p className="text-[10px]">
          Discover our fantastic early booking discounts <br /> & start planning
          your journey.
        </p>

        {/* <div className="flex  gap-7 mt-7 justify-center"> */}
        <Carousel responsive={responsive}>
          <div className="max-w-[200px]">
            <img src="/Images/Image.png" alt="" className="w-[200px] " />
            <div className="h-[80px] bg-[#FEFCFB] drop-shadow-xl">
              <div className="mt-3 px-1">
                <div className="flex justify-between">
                  <h1 className="text-[13px]">Madrid</h1>
                  <div className="flex gap-2 ">
                    <img src="/Images/star.svg" alt="" />
                    <p className="text-[13px]">4.8</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-7">
                  <div className="flex gap-1">
                    <img src="/Images/location.svg" alt="" />
                    <p className="text-[12px]">Spain</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="text-[12px]">$950</p>
                    <p className="bg-[#FFE7DB]  text-[13px] text-[#FA7436] rounded-sm">
                      $850
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[200px]">
            <img src="/Images/Image(2).png" alt="" className="w-[200px]" />
            <div className="h-[80px] bg-[#FEFCFB] drop-shadow-xl ">
              <div className="mt-3 px-1">
                <div className="flex justify-between">
                  <h1 className="text-[13px]">Firenze</h1>
                  <div className="flex gap-2 ">
                    <img src="/Images/star.svg" alt="" />
                    <p className="text-[13px]">4.8</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-7">
                  <div className="flex gap-1">
                    <img src="/Images/location.svg" alt="" />
                    <p className="text-[12px]">Italy</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="text-[12px]">$850</p>
                    <p className="bg-[#FFE7DB]  text-[13px] text-[#FA7436] rounded-sm">
                      $750
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[200px]">
            <img src="/Images/Image(1).png" alt="" className="w-[200px]" />
            <div className="h-[80px] bg-[#FEFCFB] drop-shadow-xl">
              <div className="mt-3 px-1">
                <div className="flex justify-between">
                  <h1 className="text-[13px]">Paris</h1>
                  <div className="flex gap-2 ">
                    <img src="/Images/star.svg" alt="" />
                    <p className="text-[13px]">4.8</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-7">
                  <div className="flex gap-1">
                    <img src="/Images/location.svg" alt="" />
                    <p className="text-[12px]">France</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="text-[12px]">$699</p>
                    <p className="bg-[#FFE7DB]  text-[13px] text-[#FA7436] rounded-sm">
                      $599
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[200px]">
            <img src="/Images/Image(3).png" alt="" className="w-[200px]" />
            <div className="h-[80px] bg-[#FEFCFB] drop-shadow-xl">
              <div className="mt-3 px-1">
                <div className="flex justify-between">
                  <h1 className="text-[13px]">London</h1>
                  <div className="flex gap-2 ">
                    <img src="/Images/star.svg" alt="" />
                    <p className="text-[13px]">4.8</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-7">
                  <div className="flex gap-1">
                    <img src="/Images/location.svg" alt="" />
                    <p className="text-[12px]">UK</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="text-[12px]">$950</p>
                    <p className="bg-[#FFE7DB]  text-[13px] text-[#FA7436] rounded-sm">
                      $850
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
        {/* </div> */}
        <div className="flex justify-center gap-4 mt-7">
          <img src="/Images/Btn-1.svg" alt="" />
          <img src="/Images/Btn-2.svg" alt="" />
        </div>
      </div>

      <div className="text-center mt-[200px]">
    
          <div className="relative">
            {" "}
            <h1 className="text-[30px] font-bold mb-2">
              Best <span className="text-[#FA7436]  ">vacation plan</span>
            </h1>
            <p className="text-[10px]">
              Plan your perfect vacation with our travel agency. Choose <br />{" "}
              among hundreds of all-inclusive offers!
            </p>
            <div className="absolute right-[15%] top-0">
              {/* <img src="/Images/Element.svg" alt="" /> */}
            </div>
          </div>
        
        <Carousel responsive={responsive}>
        {/* <div  className="relative " > */}
          {/* <div className="flex gap-8 mt-7 justify-center relative items-center  "> */}
            <div className="max-w-[270px]">
              <img
                src="/Images/Image(2).png"
                alt=""
                className="w-[270px] h-[190px]  "
              />
              <div className="h-[80px] bg-[#FEFCFB] drop-shadow-xl ">
                <div className="mt-3 px-1">
                  <div className="flex justify-between">
                    <h1 className="text-[13px] font-bold">Rome, Italy</h1>
                    <div className="flex gap-2 ">
                      <p className="text-[13px] font-bold text-[#FA7436]">
                        $5,42k
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-7">
                    <div className="flex gap-1">
                      <img src="/Images/Navigation.svg" alt="" />
                      <p className="text-[12px]">10 Days Trip</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src="/Images/star.svg" alt="" />
                      <p className="text-[12px]">4.8</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[270px]">
              <img
                src="/Images/Image(1).png"
                alt=""
                className="w-[270px] h-[190px]"
              />
              <div className="h-[80px] bg-[#FEFCFB] drop-shadow-xl">
                <div className="mt-3 px-1">
                  <div className="flex justify-between">
                    <h1 className="text-[13px] font-bold">London, UK</h1>
                    <div className="flex gap-2 ">
                      <p className="text-[13px] font-bold text-[#FA7436]">
                        $2,42k
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-7">
                    <div className="flex gap-1">
                      <img src="/Images/Navigation.svg" alt="" />
                      <p className="text-[12px]">10 Days Trip</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src="/Images/star.svg" alt="" />
                      <p className="text-[12px]">4.8</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[270px]">
              <img
                src="/Images/Image(3).png"
                alt=""
                className="w-[270px] h-[190px] "
              />
              <div className="h-[80px] bg-[#FEFCFB] drop-shadow-xl">
                <div className="mt-3 px-1">
                  <div className="flex justify-between">
                    <h1 className="text-[13px] font-bold">Osaka, Japa</h1>
                    <div className="flex gap-2 ">
                      <p className="text-[13px] font-bold text-[#FA7436]">
                        $5,42k
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-7">
                    <div className="flex gap-1">
                      <img src="/Images/Navigation.svg" alt="" />
                      <p className="text-[12px]">10 Days Trip</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src="/Images/star.svg" alt="" />
                      <p className="text-[12px]">4.8</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div>{" "} */}
          {/* <div className="flex gap-4 absolute right-2 top-0 ">
            <img src="/Images/Btn-1.svg" alt="" />
            <img src="/Images/Btn-2.svg" alt="" />
          </div> */}
        {/* </div> */}
        </Carousel>
      </div>
      <div className="/Images/Bg(2).png  mt-[150px] w-full  flex flex-col items-center gap-[150px] md:flex-row  justify-around">
        <div className=" flex md:flex-col gap-7 ">
          <div>
            <h1 className="font-bold text-[20px] md:text-[30px] leading-tight ">
              What people say{" "}
              <span className="text-[#FA7436] ">
                {" "}
                <br />
                about us.
              </span>
            </h1>
            <p className="text-[10px]  ">
              Our Clients send us bunch of smilies with our services <br /> and
              we love them.
            </p>
          </div>{" "}
          <div className="flex w-[50px] gap-4  md:gap-4 items-center">
            <img src="/Images/Btn-1.svg" alt="" />
            <img src="/Images/Btn-2.svg" alt="" />
          </div>
        </div>
        <div className="relative">
          <div className="w-[350px] h-[150px] absolute left-5 -bottom-10  bg-black rounded-md -z-10 ">
            <div className="relative w-full h-full">
              <p className="text-white text-[15px] absolute bottom-1 left-2">
                Chris Thomas
              </p>
            </div>{" "}
          </div>
          <div className="w-[350px] bg-gray-400 relative rounded-md">
            <img
              src="/Images/image.svg"
              alt=""
              className="mb-5 absolute -left-[10%] -top-[40%]"
            />{" "}
            <p className="text-white text-[10px] font-thin leading-4 mb-2 p-4 ">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="text-white text-[13px] px-4">Mike taylor</p>
            <p className="font-thin text-white text-[8px] px-4 ">
              Lahore, Pakistan
            </p>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Product1;
