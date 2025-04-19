import React, { useContext, useState } from "react";
import { BlogContext } from "../context/context";
import { Link } from "react-router-dom";
import { ArrowIcon, DownArrow } from "../comon/Icon";

const BlogList = () => {
  const [loaded, setLoaded] = useState(3);
  const blogdata = useContext(BlogContext);
  console.log(blogdata.Blogdata.length);

  const handleLoaded = () => {
    setLoaded((pre) => pre + 3);
  };
  return (
    <section>
      <div className="container">
        <div className="flex flex-row flex-wrap mx-[-12px]">
          {blogdata.Blogdata.slice(0, loaded).map((item, index) => (
            <div className="lg:w-4/12 sm:w-6/12 px-3 pt-12">
              <Link to={"/blogcontents/" + item.id}>
                <div className="card p-5 shadow-card min-h-[580px] flex flex-col justify-between  ">
                  <div className="">
                    <img src={item.images} alt="img" className="w-full" />
                    <h6 className="text-[#6941C6] font-Inter text-[14px]  font-semibold leading-[20px] pt-8 pb-3">
                      {item.category}
                    </h6>
                    <div className="flex justify-between">
                      <h3 className="text-[#101828] text-[24px]  leading-[32px] font-semibold pb-3">
                        {item.title}
                      </h3>
                      <ArrowIcon />
                    </div>
                    <p className="font-Inter text-[#667085] leading-[24px] font-normal line-clamp-3 ">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex gap-3 ">
                    <div className="w-10 h-10 rounded-full bg-gray-400"></div>
                    <div className="flex flex-col ">
                      <h6 className=" font-Inter text-[14px] leading-[20px] font-medium">
                        {item.postby}
                      </h6>
                      <h6 className=" font-Inter text-[#667085] leading-[20px] text-[14px] ">
                        {item.date}
                      </h6>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center py-20 ">
          {loaded < blogdata.Blogdata.length && (
            <button
              onClick={handleLoaded}
              className=" flex items-center gap-3 py-3 px-5 rounded-[8px] bg-[#F9F5FF] font-Inter  leading-[24px] text-[#6941C6]  font-medium"
            >
              <DownArrow />
              Load more
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
