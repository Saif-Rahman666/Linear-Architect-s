import React from "react";

const NewsLetter = () => {

  return (
    <div className="flex items-center justify-center content-center justify-items-center relative">
      <div className="sm:flex-col sm:py-6 bottom-10 h-full flex justify-evenly bg-darkBlue w-2/4 py-10 rounded-xl translate-y-16 duration-700">
        <div>
          <h2 className="sm:text-lg text-2xl pt-2 pb-2 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white pl-4">
            Send us an email at lineararchitectsltd@gmail.com
          </h2>
          <p className="sm:text-sm text-base font-inter font-light no-underline align-middle tracking-wide normal-case leading-none text-white pl-4 ">
            Get new design and ideas in your email every week!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
