import React from "react";
import Illustration from "./Illustration";

const Design = () => {
  const waveArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const waves = waveArray.map((span, index) => {
    return (
      <span
        key={index}
        className="absolute border-1 border-Grayish-blue-footer-text rounded-full"
        style={{ "--f": index + 1 }}
      ></span>
    );
  });
  return (
    <section className="design relative flex flex-col items-center mt-20 space-y-12">
      <h2 className="text-3xl font-bold text-Very-dark-blue-headings lg:text-5xl">
        Designed for the future
      </h2>

      <div className="flex flex-col items-center space-y-12 lg:flex-row-reverse lg:px-10 overflow-hidden lg:justify-between">
        <div className="relative image lg:-mr-70">
          <picture className="lg:-mr-70">
            <source
              media="(min-width: 1024px)"
              srcset="illustration-editor-desktop.svg"
            />
            <img
              src="./illustration-editor-mobile.svg"
              alt="illustration editor"
            />
          </picture>
          <div className="absolute -z-100 flex justify-center left-4 w-full h-full items-center top-4 ">
            <div className="hidden waves justify-center items-center h-full w-full">
              {waves}
            </div>
          </div>
        </div>

        <div className="description space-y-12 flex flex-col max-w-4/5 lg:max-w-1/2 text-center xl:max-w-2/5 xl:mx-20 lg:text-left">
          <div className="intro flex flex-col space-y-6 md:px-12 ">
            <h3 className="text-2xl xl: text-Very-dark-blue-headings px-2 font-bold">
              Introducing an extensible editor
            </h3>

            <p className="text-Very-dark-grayish-blue-body-copy xl:text-xl">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>

          <div className="intro flex flex-col space-y-6 md:px-12">
            <h3 className="text-2xl xl: text-Very-dark-blue-headings px-2 font-bold">
              Robust content management
            </h3>

            <p className="text-Very-dark-grayish-blue-body-copy xl:text-xl">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, section, format, or flow. With this functionality,
              you're in full control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
