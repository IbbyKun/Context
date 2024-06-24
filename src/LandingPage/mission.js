import * as React from 'react';
import image from '../Resources/misson.png';

export default function MyComponent() {
  return (
    <div>
      <div className="absolute top-[1800px] left-[102%] transform translate-x-[-50%]">
        <svg
          width="334"
          height="338"
          viewBox="0 0 334 338"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="170.384"
            cy="164.433"
            r="101.713"
            transform="rotate(-140.58 170.384 164.433)"
            stroke="#0B83D9"
            stroke-width="0.551994"
          />
          <circle
            cx="163.359"
            cy="172.98"
            r="101.713"
            transform="rotate(-140.58 163.359 172.98)"
            stroke="#0B83D9"
            stroke-width="0.551994"
          />
          <path
            d="M84.7605 103.277L88.2177 102.707L89.4606 99.431L90.0307 102.888L93.3068 104.131L89.8495 104.701L88.6067 107.977L88.0366 104.52L84.7605 103.277Z"
            fill="#C099FC"
          />
        </svg>
      </div>
      <div className="absolute top-[1100px] left-[3%] transform translate-x-[-50%]">
        <svg
          width="348"
          height="349"
          viewBox="0 0 348 349"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="180.05"
            cy="181.131"
            r="167.309"
            transform="rotate(-42.9911 180.05 181.131)"
            stroke="#0B83D9"
            strokeWidth="0.551994"
          />
          <circle
            cx="167.653"
            cy="167.833"
            r="167.309"
            transform="rotate(-42.9911 167.653 167.833)"
            stroke="#0B83D9"
            strokeWidth="0.551994"
          />
          <path
            d="M298.24 54.9419L298.418 60.6967L303.485 63.432L297.73 63.6103L294.995 68.6765L294.816 62.9218L289.75 60.1864L295.505 60.0082L298.24 54.9419Z"
            fill="#C099FC"
          />
        </svg>
      </div>
      <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
        <div className="mt-36 w-full max-w-[1234px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto font-medium max-md:mt-10 max-md:max-w-full">
                <div className="text-2xl leading-7 text-sky-600 max-md:max-w-full">
                  Our Mission
                </div>
                <div className="mt-7 text-6xl text-black leading-[69px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Learn what seems out of reach
                </div>
                <div className="mt-9 font-light leading-6 text-zinc-600 max-md:max-w-full">
                  We are committed to making education accessible, personalized,
                  and enjoyable for everyone.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={image}
                alt="Image here"
                className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
