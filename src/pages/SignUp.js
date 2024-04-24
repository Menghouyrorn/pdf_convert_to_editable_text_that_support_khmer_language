import React from "react";

import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="w-[1000px] h-[600px] shadow-md m-auto mt-[10px] flex">
      <div
        style={{
          backgroundImage: `url('/image/bg.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "noRepeat",
        }}
        className="h-[100%] w-[50%]"
      >
        <h1 className="w-[400px] text-[#118AEF] text-5xl font-bold text-center m-auto mt-[60px]">
          Welcome to my PDFConverter
        </h1>
        <p className="w-[460px] font-bold m-auto text-xl mt-[30px] text-[#118AEF]">
          Clarity gives you the blocks & components you need to create a truly
          professional website.
        </p>
      </div>

      <div className="h-[100%] w-[50%]">
        <div className="flex flex-col justify-center items-center mt-[50px]">
          <div>
            <h1 className="text-3xl text-black font-bold mb-3">SIGNUP YOUR ACCOUNT</h1>
          </div>
          <div className="w-[90%] h-[100%] m-auto">
            <form className="w-full">
            <div className="w-full flex flex-col gap-y-4 mb-4">
                <label>FullName</label>
                <input type="text" placeholder="Enter the fullname" className="border border-spacing-1 border-black h-[40px] pl-[10px] rounded-lg" />
              </div>
              
              <div className="w-full flex flex-col gap-y-4 mb-4">
                <label>Email</label>
                <input type="email" placeholder="Enter the email" className="border border-spacing-1 border-black h-[40px] pl-[10px] rounded-lg" />
              </div>
              <div className="w-full flex flex-col gap-y-4 mb-4">
                <label>Password</label>
                <input type="password" placeholder="Enter the email" className="border border-spacing-1 border-black h-[40px] pl-[10px] rounded-lg"/>
              </div>
              <div className="w-full flex flex-col gap-y-4 mb-4">
                <label>Confirm Password</label>
                <input type="password" placeholder="Enter the email" className="border border-spacing-1 border-black h-[40px] pl-[10px] rounded-lg"/>
              </div>
              <div className="flex justify-between mt-6">
                <button className="w-[110px] h-[35px] flex justify-center items-center text-white text-xs font-bold rounded-md bg-[#1B1464] hover:shadow-md transition-all">SIGN IN</button>
                <button className="w-[230px] h-[35px] flex justify-center items-center text-black text-xs font-bold rounded-md bg-white hover:shadow-md transition-all border border-spacing-1 border-[#167EE6]">Continue with google</button>
              </div>

              <div className="pt-4">
                <p>Has an account? <Link to={'/login'} className="text-[#1B1464]">login account</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
