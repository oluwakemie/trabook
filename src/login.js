import React from "react";
// import div from "./components/Hero";


const Login = () => {
  return (
    <div className="md:flex md:justify-around h-screen">
      <div className="bg-[#124072] hidden md:block md:w-[50%] pb-[150px] pt-[150px] px-10 ">
        <div className=""> <img src="/Images/electImage.png" alt="" /> <p className="text-white text-[30px] text-center "> BillVending platform designed to make bill payments seamless and easy</p>  </div>
      </div>
      <div className=" relative md:w-[50%] w-full px-[30px]  h-screen ">
        <div className=" items-center mx-auto text-center">
          <img src="./paylodelogo.png" alt="" className="h-[108px]" />

          <h3 className="text-[32px] font-bold text-[#1a202c] mt-[37px] pb-2">
            Sign in
          </h3>

          <p className="text-md text-[#a0aec0]   text-center mb-[45px]">
            Enter registered E-mail and Password details
          </p>

          <form
            // onSubmit={login}
            className="flex flex-col w-full md:max-w-[427px]  md:w-[427px] mx-auto gap-4"
          >
            <input
              type="email"
              className=" h-14 px-4 py-4 placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#124072] text-[16px] leading-[24px] tracking-[0.2px] bg-white border border-[#E2E8F0]  rounded-xl focus:outline-none focus:ring-[#FFDB47] focus:border-[#FFDB47] sm:text-sm"
              placeholder="E-mail"
              // ref={userRef}
              required
              // value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                // type={open === false ? "password" : "text"}
                className="h-14 px-4 py-4 placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#124072] text-[16px] leading-[24px] tracking-[0.2px] bg-white border border-[#E2E8F0]  rounded-xl focus:outline-none focus:ring-[#FFDB47] focus:border-[#FFDB47] sm:text-sm w-full"
                placeholder="Password"
                required
                // value={password} onChange={(e) => setPassword(e.target.value)}
              />

              <div className="text-2xl absolute top-4 right-5">
                {/* {open === false ? (
                <AiFillEye onClick={toggle} />
              ) : (
                <AiFillEyeInvisible onClick={toggle} />
              )} */}
              </div>
            </div>

            {/* <label
            htmlFor="radio"
            className="text-left mt-[24px]  font-semibold text-[#1a202c] container "
          >
            <input type="checkbox" className="border mr-2" name="remember-me" />
            <span className="checkmark text-[16px]"></span>
            Remember me
          </label> */}
            <div class="flex items-center mt-[24px]">
              <input
                type="radio"
                className="h-5 w-5 mr-3 border border-[#E2E8F0] "
              />
              <h3 class="text-[#1A202C] text-[16px] leading-[24px] tracking-[0.2px] font-semibold  ">
                Remember me
              </h3>
            </div>
            {/* <button className="bg-[#124072] p-2 rounded-[20px] text-gray-200 my-[32px]">
            sign in
          </button> */}
            <button
              type="submit"
              class="py-4 items-center rounded-[20px] w-full md:w-[427px] my-[32px] bg-[#124072] text-[#ffffff] text-[16px] leading-[24px] tracking-[0.2px] font-extrabold flex justify-center "
            >
              Sign In
              {/* {isLoading && (<svg
              class="ml-4 w-6 h-6 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12"
                r="10" stroke="currentColor" stroke-width="4">
              </circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>)} */}
            </button>
          </form>
          <button
            // onClick={() => {
            //   navigate("/forgotPassword");
            // }}
            className="font-bold"
          >
            Forgot Password?
          </button>
        </div>
        <div className="absolute bottom-0 right-0 left-0 text-[#718096] pb-2 px-[48px] flex flex-row justify-between ">
          <p>Powered by PAYLODE SERVICE LIMITED</p>
          <p>Copyright 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
