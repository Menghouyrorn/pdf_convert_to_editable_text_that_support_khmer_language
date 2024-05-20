import React from "react";
import { Link,useLocation } from "react-router-dom";

function Navbar() {
  const {pathname} =useLocation();
  return (
      <div  className="w-full h-[12vh] shadow-sm items-center flex gap-x-4 sm:gap-x-10  pl-[5px] sm:pl-[15px]">
        <Link to={'/'}>
          <div className="flex items-center gap-x-2 sm:gap-x-8 hover:cursor-pointer">
            <img src="/image/logo.png" className="w-[50px] sm:w-[70px]" alt="profile" />
            <h1 className="font-extrabold text-[#1B1464] text-sm sm:text-lg">NUM PDF COVERTER</h1>
          </div>
        </Link>
        <div className="flex gap-x-4 items-center">
          <Link
            to={"/"}
            className={`w-[60px] sm:w-[90px] h-[35px] flex justify-center items-center text-lg rounded-md hover:shadow-md transition-all  ${pathname==='/' ? 'border-t-transparent border-l-transparent border-r-transparent rounded-none border-b-[3px] border-b-blue-500':'border-t-transparent border-l-transparent border-r-transparent border-b-transparent'}` }
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className={`w-[60px] sm:w-[90px] h-[35px] flex justify-center items-center text-lg rounded-md hover:shadow-md transition-all border ${pathname==='/about' ? 'border-t-transparent border-l-transparent border-r-transparent rounded-none border-b-[3px] border-b-blue-500':'border-t-transparent border-l-transparent border-r-transparent border-b-transparent'}`}
          >
            About
          </Link>
        </div>
      </div>
  );
}

export default Navbar;
