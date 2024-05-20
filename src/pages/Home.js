import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-[10px]">
      <div className="flex flex-col items-center mt-[20px]">
        <img
          src="/image/logo.png"
          alt="Logo"
          className="w-[80px] sm:w-[150px]"
        />
        <h1 className="font-extrabold text-[#1B1464] mt-2 text-lg sm:text-2xl">
          NUM PDF COVERTER
        </h1>
      </div>
      <div className=" flex justify-center mt-6">
        <p className="w-[65%] text-sm sm:text-lg text-center space-x-2">
          “Num PDF CONVERTER” is an PDF Converter project Used to convert pdf
          files to editable text files that we focus on the text recognition
          system in Khmer.
        </p>
      </div>
      <div className="flex flex-wrap gap-y-10 items-center justify-center gap-x-40 mt-[40px]">
        <Link to={"/converttodoc"}>
          <div className="w-[340px] sm:w-[430px] h-[160px] sm:h-[190px] shadow-md rounded-md flex p-4 border border-spacing-1 hover:cursor-pointer">
            <div className="w-[10%]">
              <img src="/image/upload.png" alt="logo" className="w-[50px]" />
            </div>
            <div className="w-[85%] ml-4 mt-[10px] sm:mt-[40px] ">
              <h1 className="text-[#1B1464] font-extrabold">Convert to word</h1>
              <p className="text-sm sm:text-base">
                Text recognition without software installation or download.This
                converter allows you to convert to the Microsoft Word formats
                DOC and DOCX.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/converttotxt"}>
          <div className="w-[340px] sm:w-[430px] h-[160px] sm:h-[190px] shadow-md rounded-md flex p-4 border border-spacing-1 hover:cursor-pointer">
            <div className="w-[10%]">
              <img src="/image/txt.png" alt="logo" className="w-[50px]" />
            </div>
            <div className="w-[85%] ml-4 mt-[10px] sm:mt-[40px]">
              <h1 className="text-[#1B1464] font-extrabold">Convert to text</h1>
              <p className="text-sm sm:text-base">
                Text recognition without software installation or download. This
                converter allows you to convert from pdf to the Text formats
                (.txt).
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/convertimagetotext"}>
          <div className="w-[340px] sm:w-[430px] h-[160px] sm:h-[190px] shadow-md rounded-md flex p-4 border border-spacing-1 hover:cursor-pointer">
            <div className="w-[10%]">
              <img src="https://play-lh.googleusercontent.com/JLfrbi95Ax7bd_IyGf4XrkyXKPUM2PMKq7KFtNFNva3dMH4niKBxkGzdq5mpJyoLtw=w240-h480-rw" alt="logo" className="w-[50px]" />
            </div>
            <div className="w-[85%] ml-4 mt-[10px] sm:mt-[40px]">
              <h1 className="text-[#1B1464] font-extrabold">
                Convert Image to text
              </h1>
              <p className="text-sm sm:text-base">
                Text recognition without software installation or download. This
                converter allows you to convert from Image to the Text formats
                (.txt).
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
