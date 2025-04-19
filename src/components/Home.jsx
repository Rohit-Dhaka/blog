import React from "react";
import { SearchIcon } from "../comon/Icon";

const Home = () => {
  return (
    <header className="bg-[#F9F5FF]">
      <div className="container">
        <div className="flex flex-col items-center  py-24">
          <h6 className="text-[#6941C6] font-Inter text-[14px] font-medium leading-[20px] bg-[#F3EBFF] py-1  px-3 rounded-[16px]">
            Our blog
          </h6>
          <h1 className="text-[#42307D] text-[48px] font-Inter leading-[60px] font-semibold  tracking-[-2%] pt-4 pb-6 text-center">Resources and insights</h1>
          <h2 className="font-Inter text-[#6941C6] leading-[30px] text-[20px] text-center  font-normal leading-0 pb-10">The latest industry news, interviews, technologies, and resources.</h2>
          <div className=" flex gap-2 items-center py-3 px-4  border-[#D0D5DD] border-[1px] border-solid  rounded-[8px] bg-[#FFFFFF]">
            <SearchIcon/>
            <input type="text" placeholder="Search"  className="text-[#667085]  font-Inter font-normal leading-[24px] outline-none"/>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
