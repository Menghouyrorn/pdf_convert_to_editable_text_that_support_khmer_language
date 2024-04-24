import React from "react";

function About() {
  return (
    <div className="p-[20px]">
      <div className="flex justify-between">
        <div className="w-[50%]">
          <h1 className="text-4xl font-bold text-[#1B1464]">About us</h1>
          <div className="w-[90%] mt-4">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium
              lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis
              pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris
              pretium lacus eget vulputate rhoncus. Vivamus egestas, orci eu
              lobortis pulvinar.
            </p>
          </div>
        </div>
        <div className="w-[50%] flex justify-end mr-[90px]">
          <img src="/image/about.png" alt="logo" />
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-[#1B1464] text-center mt-[30px]">
          Our team
        </h1>
      </div>
      <div className="w-[90%] h-[250px] flex items-center justify-center ml-[80px] mt-8">
        <div className="w-[25%] h-[250px]">
          <div className="flex flex-col items-center gap-y-1">
            <img
              src="/image/me.jpg"
              className="w-[160px] h-[180px] rounded-full border border-spacing-1"
              alt=""
            />
            <h1 className="font-bold text-lg">Rorn Menghouy</h1>
            <p>Web Developer</p>
          </div>
        </div>
        <div className="w-[25%] h-[250px]">
          <div className="flex flex-col items-center gap-y-1">
            <img
              src="/image/lyhor.png"
              className="w-[160px] h-[180px] rounded-full border border-spacing-1"
              alt=""
            />
            <h1 className="font-bold text-lg">Leng Lyhor</h1>
            <p>UX/UI Designer</p>
          </div>
        </div>
        <div className="w-[25%] h-[250px]">
          <div className="flex flex-col items-center gap-y-1">
            <img
              src="/image/nouch.png"
              className="w-[160px] h-[180px] rounded-full border border-spacing-1"
              alt=""
            />
            <h1 className="font-bold text-lg">Tun Sreynouch</h1>
            <p>UX/UI Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
