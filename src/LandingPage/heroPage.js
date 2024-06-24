import * as React from "react";
import image from "../Resources/image.png"

export default function MyComponent() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col pb-12 w-full backdrop-blur-[0.30000001192092896px] bg-white bg-opacity-90 max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col items-center px-20 pt-28 pb-8 w-full  backdrop-blur-[1.5px] min-h-[1080px] stroke-[1px] stroke-sky-600 stroke-opacity-20 max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f833a2bf023cfefba4560ce5fd9cb9ced8a4a228e2b2c2e83f7d0c3d207ef9?"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative mt-4 text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9E55FD] to-[#23C1FF] leading-[64px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
            I want Unlock your Creative Potential
            <br />
            with AI-Powered Learning
          </div>
          <div className="relative mt-5 text-base leading-6 text-center text-neutral-700 max-md:max-w-full">
            'Context is an AI-powered education platform to teach
            <br />
            UI/UX designers, artists, and students creative coding.'
          </div>
          <button className="relative justify-center px-6 py-4 mt-6 text-xl font-semibold leading-7 text-center text-white rounded-full bg-gradient-to-r from-[#A027FF] to-[#5ED7FE] max-md:px-5">
            Start Learning
          </button>
          <img
            loading="lazy"
            srcSet={image}
            className="self-stretch mt-8 ml-6 w-full border border-gray-200 border-solid aspect-[2.86] max-md:max-w-full"
          />
          <button className="flex relative justify-center items-center px-12 mt-8 rounded-full bg-[linear-gradient(180deg,#A057FF_0%,#67C9FE_100%)] h-[162px] w-[162px] max-md:px-5 mx-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/52bfdae1f7983eb9cba17ad006bfe11e14e96032ce9ee77574136ea1b0e7911f?"
              className="w-full aspect-square"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
