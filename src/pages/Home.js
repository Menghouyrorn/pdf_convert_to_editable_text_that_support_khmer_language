import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-[10px]">
      <div className="flex flex-col items-center mt-[20px]">
        <img src="/image/logo.png" alt="Logo" className="w-[150px]" />
        <h1 className="font-extrabold text-[#1B1464] text-2xl">
          NUM PDF COVERTER
        </h1>
      </div>
      <div className=" flex justify-center mt-4">
        <p className="w-[85%] text-lg text-center space-x-2">
          “Num PDF CONVERTER” is an ​Artificial Intelligence (AI) project using
          Deep Learning together with Computer Vision where we mainly focus on
          Khmer text recognition system joint by Text line Detection model and
          Text Recognition model.
        </p>
      </div>
      <div className="flex items-center justify-center gap-x-40 mt-[40px]">
        <Link to={"/converttodoc"}>
          <div className="w-[430px] h-[190px] shadow-md rounded-md flex p-4 border border-spacing-1 hover:cursor-pointer">
            <div className="w-[10%]">
              <img src="/image/upload.png" alt="logo" className="w-[50px]" />
            </div>
            <div className="w-[85%] ml-4 mt-[40px] ">
              <h1 className="text-[#1B1464] font-extrabold">Convert to word</h1>
              <p>
                Text recognition without software installation or download.This
                OCR converter allows you to convert to the Microsoft Word
                formats DOC and DOCX.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/converttotxt"}>
          <div className="w-[430px] h-[190px] shadow-md rounded-md flex p-4 border border-spacing-1 hover:cursor-pointer">
            <div className="w-[10%]">
              <img src="/image/txt.png" alt="logo" className="w-[50px]" />
            </div>
            <div className="w-[85%] ml-4 mt-[40px] ">
              <h1 className="text-[#1B1464] font-extrabold">Convert to text</h1>
              <p>
                Text recognition without software installation or download. This
                OCR converter allows you to convert from pdf to the Text formats
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
