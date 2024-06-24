import React, { useState } from 'react';

const LearningPathsPage = () => {
  const [selectedCard, setSelectedCard] = useState(3);

  const handleCardClick = (cardNumber) => {
    if (selectedCard !== cardNumber) {
      setSelectedCard(cardNumber);
    }
  };

  return (
    <div>
      <div className="absolute top-[2600px] left-[3%] transform translate-x-[-50%]">
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
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-80 h-96">
          <div
            className={`absolute bg-white shadow-lg rounded-xl w-full h-full transform transition-transform duration-500 ease-in-out ${
              selectedCard === 1
                ? 'translate-x-0'
                : selectedCard === 2
                ? '-translate-x-2/3'
                : 'translate-x-2/3'
            }`}
            onClick={() => handleCardClick(3)}
          >
            <div className="p-6">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="70"
                  height="70"
                  rx="35"
                  fill="url(#paint0_linear_1_2285)"
                />
                <path
                  d="M45 28.75L35 23.75L25 28.75M45 28.75L35 33.75M45 28.75V41.25L35 46.25M35 33.75L25 28.75M35 33.75V46.25M25 28.75V41.25L35 46.25"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_2285"
                    x1="35"
                    y1="0"
                    x2="35"
                    y2="70"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9E54FF" />
                    <stop offset="1" stop-color="#5DD9FF" />
                  </linearGradient>
                </defs>
              </svg>
              <h1 className="text-3xl font-semibold mt-8">
                Tailored Learning Paths 2
              </h1>
              <p className="text-sm text-gray-500 mt-4">
                Our AI creates a customized learning path based on your
                experience, preferences, and goals. From beginner to advanced,
                every step is planned for you.
              </p>
            </div>
          </div>
          <div
            className={`absolute bg-white shadow-lg rounded-xl w-full h-full transform transition-transform duration-500 ease-in-out ${
              selectedCard === 2
                ? 'translate-x-0'
                : selectedCard === 1
                ? 'translate-x-2/3'
                : '-translate-x-2/3'
            }`}
            onClick={() => handleCardClick(3)}
          >
            <div className="p-6">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="70"
                  height="70"
                  rx="35"
                  fill="url(#paint0_linear_1_2285)"
                />
                <path
                  d="M45 28.75L35 23.75L25 28.75M45 28.75L35 33.75M45 28.75V41.25L35 46.25M35 33.75L25 28.75M35 33.75V46.25M25 28.75V41.25L35 46.25"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_2285"
                    x1="35"
                    y1="0"
                    x2="35"
                    y2="70"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9E54FF" />
                    <stop offset="1" stop-color="#5DD9FF" />
                  </linearGradient>
                </defs>
              </svg>

              <h1 className="text-3xl font-semibold mt-8">
                Tailored Learning Paths 3
              </h1>
              <p className="text-sm text-gray-500 mt-4">
                Our AI creates a customized learning path based on your
                experience, preferences, and goals. From beginner to advanced,
                every step is planned for you.
              </p>
            </div>
          </div>
          <div
            className={`absolute bg-white shadow-lg rounded-xl w-full h-full transform transition-transform duration-500 ease-in-out ${
              selectedCard === 3
                ? 'translate-x-0'
                : selectedCard === 1
                ? '-translate-x-2/3'
                : 'translate-x-2/3'
            }`}
            onClick={() => handleCardClick(3)}
          >
            <div className="p-6">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="70"
                  height="70"
                  rx="35"
                  fill="url(#paint0_linear_1_2285)"
                />
                <path
                  d="M45 28.75L35 23.75L25 28.75M45 28.75L35 33.75M45 28.75V41.25L35 46.25M35 33.75L25 28.75M35 33.75V46.25M25 28.75V41.25L35 46.25"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_2285"
                    x1="35"
                    y1="0"
                    x2="35"
                    y2="70"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9E54FF" />
                    <stop offset="1" stop-color="#5DD9FF" />
                  </linearGradient>
                </defs>
              </svg>

              <h1 className="text-3xl font-semibold mt-8">
                Tailored Learning Paths 1
              </h1>
              <p className="text-sm text-gray-500 mt-4">
                Our AI creates a customized learning path based on your
                experience, preferences, and goals. From beginner to advanced,
                every step is planned for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathsPage;
