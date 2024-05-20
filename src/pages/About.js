import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="p-[20px] w-full h-screen">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-[100%] md:w-[50%]">
          <h1 className="text-xl md:text-4xl font-bold text-[#1B1464]">About us</h1>
          <div className="w-[90%] mt-4">
            <p className="text-sm md:text-lg">
              A NUM PDF CONVERTER is a website that can take a PDF file, which
              typically contains text that is not easily editable, and convert
              it into a format where the text can be edited, such as a Word
              document or a plain text file. This conversion process often
              involves using OCR (Optical Character Recognition) technology to
              recognize the text in the PDF and then save it in a format that
              allows for editing.And it support khmer language.
            </p>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] flex justify-center md:justify-end mt-[15px] md:mt-[0px]">
          <img className="mr-0 md:mr-[40px]" src="/image/about.png" alt="logo" />
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-[#1B1464] text-center mt-[30px]">
          Our team
        </h1>
        <div className="w-[100%] md:w-[100%] flex items-center justify-center ml-[0px] md:ml-[80px] mt-8 flex-wrap gap-x-20 gap-y-10">
          <div className="w-[250px] h-[295px] rounded-md shadow-sm border bg-white border-gray-300 hover:shadow-xl">
            <div className="flex flex-col items-center gap-y-1">
              <img src="/image/me.jpg" className="w-[160px] h-[180px]" alt="" />
              <h1 className="font-bold text-lg">Rorn Menghouy</h1>
              <p>Web Developer</p>
              <div className="border border-t-gray-500 h-[44px] border-b-transparent rounded-md mt-1 w-full flex items-center justify-center gap-8">
                <Link to={"#"} className="cursor-pointer">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrgjZVYT0sxSCRszjJuS3WQcAk8MPmHxntLon0awmKw&s"
                    className="w-[29px] h-[29px]"
                    alt="facebook"
                  />
                </Link>
                <Link to={"#"} className="cursor-pointer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    className="w-[28px] h-[28px]"
                    alt="facebook"
                  />
                </Link>
                <Link to={"#"} className="cursor-pointer">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                    className="w-[29px] h-[29px]"
                    alt="facebook"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[250px] bg-white h-[295px] rounded-md shadow-sm border border-gray-300 hover:shadow-xl flex flex-col justify-center">
            <div className="flex flex-col items-center gap-y-1">
              <img
                src="/image/lyhor.png"
                className="w-[160px] h-[160px]"
                alt=""
              />
              <h1 className="font-bold text-lg">Leng Lyhor</h1>
              <p>UX/UI Designer</p>
              <div className="border border-t-gray-500 h-[44px] border-b-transparent rounded-md mt-1 w-full flex items-center justify-center gap-8">
                <Link to={"#"} className="cursor-pointer">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrgjZVYT0sxSCRszjJuS3WQcAk8MPmHxntLon0awmKw&s"
                    className="w-[29px] h-[29px]"
                    alt="facebook"
                  />
                </Link>
                <Link to={"#"} className="cursor-pointer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    className="w-[28px] h-[28px]"
                    alt="facebook"
                  />
                </Link>
                <Link to={"#"} className="cursor-pointer">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                    className="w-[29px] h-[29px]"
                    alt="facebook"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[250px] bg-white h-[295px] rounded-md shadow-sm border border-gray-300 hover:shadow-xl flex flex-col justify-center">
            <div className="flex flex-col items-center gap-y-1">
              <img
                src="/image/nouch.png"
                className="w-[160px] h-[160px]"
                alt=""
              />
              <h1 className="font-bold text-lg">Tun Sreynouch</h1>
              <p>UX/UI Designer</p>
              <div className="border border-t-gray-500 h-[44px] border-b-transparent rounded-md mt-1 w-full flex items-center justify-center gap-8">
                <Link to={"#"} className="cursor-pointer">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrgjZVYT0sxSCRszjJuS3WQcAk8MPmHxntLon0awmKw&s"
                    className="w-[29px] h-[29px]"
                    alt="facebook"
                  />
                </Link>
                <Link to={"#"} className="cursor-pointer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    className="w-[28px] h-[28px]"
                    alt="facebook"
                  />
                </Link>
                <Link to={"#"} className="cursor-pointer">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                    className="w-[29px] h-[29px]"
                    alt="facebook"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
