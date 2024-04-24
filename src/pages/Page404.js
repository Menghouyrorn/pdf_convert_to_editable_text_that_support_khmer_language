import React from "react";

function Page404() {
  return (
    <div className="w-[700px] m-auto mt-[60px] h-[300px] border border-spacing-1 shadow-md flex flex-col justify-center items-center gap-y-4 rounded-md bg-[#88caff]">
      <div>
        <h1 className="font-bold text-lg">404 Error</h1>
      </div>
      <div className="flex">
        <div className="w-[40%] ml-[30px]">
          <img src="/image/img404.png" className="w-[170px]" alt="" />
        </div>
        <div className="w-[60%]">
          <ul>
            <li className="list-disc">A misspelled URL</li>
            <li className="list-disc">
              The page has been moved or deleted and ther's no redirect set up
            </li>
            <li className="list-disc">
              The URL wasn't correct when it was originally set up or it was
              linked incorrectry
            </li>
            <li className="list-disc">The server malfunctioned or has been shut down</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page404;
