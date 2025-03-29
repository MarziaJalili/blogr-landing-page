import React from "react";

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
      <div className="flex flex-col items-center space-y-12 lg:flex-row-reverse lg:px-10 overflow-hidden lg:justify-between">
        <div className="relative image lg:-mr-70">
          <picture className="lg:-mr-70">
            <source
              media="(min-width: 1024px)"
              srcset="illustration-laptop-desktop.svg"
            />
            <img
              src="./illustration-laptop-mobile.svg"
              alt="illustration laptop"
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
              Free, open, simple
            </h3>

            <p className="text-Very-dark-grayish-blue-body-copy xl:text-xl">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>

          <div className="intro flex flex-col space-y-6 md:px-12">
            <h3 className="text-2xl xl: text-Very-dark-blue-headings px-2 font-bold">
              Powerful tooling
            </h3>

            <p className="text-Very-dark-grayish-blue-body-copy xl:text-xl">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
