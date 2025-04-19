import React, { useContext } from "react";
import { BlogContext } from "../context/context";
import { Link, useParams } from "react-router-dom";

const BlogContents = () => {
  const blogdata = useContext(BlogContext);
  const { id } = useParams();
  const blogId = parseInt(id);
  const blog = blogdata.Blogdata.find((item) => item.id === blogId);

  return (
    <section>
      <div className="container">
        <div className="">
          <div className="flex justify-center py-8">
            <Link
              to="/"
              className="text-[#6941C6] font-Inter text-[18px] font-medium leading-[20px] bg-[#F3EBFF] py-4  px-6 rounded-[32px]"
            >
              Go to Home page
            </Link>
          </div>
          <div className="">
            <div className=" overflow-hidden">
              <img src={blog.images} alt="" className=" w-full h-96 object-cover " />
            </div>
            <h6 className="text-[#6941C6] font-Inter text-[14px]  font-semibold leading-[20px] pt-8 pb-3">
              {blog.category}
            </h6>
            <h3 className="text-[#101828] text-[48px]  leading-[32px] font-semibold pb-8">
              {blog.title}
            </h3>
            <p className="font-Inter text-[#667085] leading-[24px] font-normal ">
              {blog.description}
            </p>

            <div className="flex gap-3  pt-20">
              <div className="w-10 h-10 rounded-full bg-gray-400"></div>
              <div className="flex flex-col ">
                <h6 className=" font-Inter text-[14px] leading-[20px] font-medium">
                  {blog.postby}
                </h6>
                <h6 className=" font-Inter text-[#667085] leading-[20px] text-[14px] ">
                  {blog.date}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContents;
