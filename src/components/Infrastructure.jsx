import React from "react";

const Infrastructure = () => {
  return (
    <section className="infrastructure bg-[url(./bg-pattern-circles.svg)] bg-[position:left_70%_top_-300%] bg-[length:140%] bg-no-repeat flex flex-col items-center justify-center lg:flex-row space-y-6 space-x-6 p-4 bg-Very-dark-gray-blue rounded-tr-[100px] rounded-bl-[100px] text-center  mt-50 md:bg-[length:100%] md:bg-[position:left_50%_top_200%] lg:bg-[length:50%] lg:bg-[position:left_0%_top_100%] lg:text-left lg:px-30 lg:justify-between">
      <div className="flex flex-col space-y-6 items-center justify-center  lg:w-1/2 lg:items-start xl:px-10">
        <h2 className="text-White-text text-4xl">
          State of the Art Infrastructure
        </h2>
        <p className="text-Grayish-blue-footer-text max-lg:px-8  max-lg:mb-25 md:w-3/4 lg:w-auto">
          With relaiability and speed in mind, worldwide data centers provide
          the backbone for ultra-fast connectivity. This ensures your site will
          load instantly, no matter where your readersr are, keeping your site
          competitive.
        </p>
      </div>

      <img
        className="-mt-50 lg:-mb-30 lg:-mt-30 pt-10"
        src="./illustration-phones.svg"
        alt="illustration-phones"
      />
    </section>
  );
};

export default Infrastructure;
