import React, { useRef } from 'react';

export default function MyComponent() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300, // Adjust the scroll distance as needed
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300, // Adjust the scroll distance as needed
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col py-10 pl-10 bg-white max-md:pl-5">
      <div className="self-start mt-4 ml-20 text-2xl font-medium leading-7 text-sky-600 max-md:mt-10 max-md:ml-2.5">
        Why Choose Context?
      </div>
      <div className="flex items-center gap-5 mt-10 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full relative">
        <div className="flex items-center">
          <button
            type="button"
            className="text-white bg-white focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 border border-black dark:bg-white"
            onClick={scrollLeft}
          >
            <svg
              className="w-4 h-4 text-gray-500 transform rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>

          <button
            type="button"
            class="bg-gradient-to-r from-[#A027FF] to-[#5ED7FE] text-white rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={scrollRight}
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>

        <div
          className="flex overflow-x-auto gap-5 mt-5 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full"
          ref={scrollContainerRef}
          style={{ overflowX: 'hidden', paddingLeft: '70px' }}
        >
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white"
              style={{ flex: '0 0 auto' }}
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="70"
                  height="70"
                  rx="35"
                  fill="url(#paint0_linear_52_47)"
                />
                <path
                  d="M28.3333 32.5882H28.35M35 32.5882H35.0167M41.6667 32.5882H41.6833M30 43.1765H23.3333C21.4924 43.1765 20 41.5963 20 39.6471V25.5294C20 23.5802 21.4924 22 23.3333 22H46.6667C48.5076 22 50 23.5802 50 25.5294V39.6471C50 41.5963 48.5076 43.1765 46.6667 43.1765H38.3333L30 49.5V43.1765Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_52_47"
                    x1="35"
                    y1="0"
                    x2="35"
                    y2="70"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9E55FD" />
                    <stop offset="1" stop-color="#5FD4FE" />
                  </linearGradient>
                </defs>
              </svg>
              <a href="#">
                <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">
                  Personalized Experience
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Experience a learning journey that's uniquely yours. Our AI
                tailors learning paths to fit your goals, whether you're a
                beginner or an advanced coder.
              </p>

              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                {/* Your SVG path here */}
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
