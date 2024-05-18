import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    console.log(window.location.pathname);
  });
  return (
    <div className="lg:w-full md:w-full sm:w-full max-sm:w-full h-[12vh] shadow-sm items-center flex justify-between pl-[15px]">
      <div className="flex gap-x-10">
        <Link to={'/'}>
          <div className="flex items-center gap-x-4 hover:cursor-pointer">
            <img src="/image/logo.png" className="w-[70px]" alt="profile" />
            <h1 className="font-extrabold text-[#1B1464]">NUM PDF COVERTER</h1>
          </div>
        </Link>
        <div className="flex gap-x-4 items-center">
          <Link
            to={"/"}
            className="w-[90px] h-[35px] flex justify-center items-center text-lg rounded-md hover:shadow-md transition-all"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="w-[90px] h-[35px] flex justify-center items-center text-lg rounded-md hover:shadow-md transition-all"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
