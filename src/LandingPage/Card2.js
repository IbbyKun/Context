import React from 'react';
import image from '../Resources/card2.png';

const PortfolioCard = () => {
  return (
    <div className="bg-gradient-to-r from-[#9B53FE] to-[#5EDAFE] rounded-lg overflow-hidden shadow-md max-w-6xl mx-auto p-6">
      <div className="absolute top-[4100px] left-[5%] transform translate-x-[-50%]">
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
            stroke="white"
            strokeWidth="0.551994"
          />
          <circle
            cx="167.653"
            cy="167.833"
            r="167.309"
            transform="rotate(-42.9911 167.653 167.833)"
            stroke="white"
            strokeWidth="0.551994"
          />
          <path
            d="M298.24 54.9419L298.418 60.6967L303.485 63.432L297.73 63.6103L294.995 68.6765L294.816 62.9218L289.75 60.1864L295.505 60.0082L298.24 54.9419Z"
            fill="#C099FC"
          />
        </svg>
      </div>
      <div className="absolute top-[4700px] left-[94%] transform translate-x-[-50%]">
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
            stroke="white"
            strokeWidth="0.551994"
          />
          <circle
            cx="167.653"
            cy="167.833"
            r="167.309"
            transform="rotate(-42.9911 167.653 167.833)"
            stroke="white"
            strokeWidth="0.551994"
          />
          <path
            d="M298.24 54.9419L298.418 60.6967L303.485 63.432L297.73 63.6103L294.995 68.6765L294.816 62.9218L289.75 60.1864L295.505 60.0082L298.24 54.9419Z"
            fill="#C099FC"
          />
        </svg>
      </div>
      <div className="text-white">
        <div className="flex items-start space-x-6">
          <div className="flex-1 pr-6 ml-16">
            <h3 className="text-4xl font-semibold mb-4 mt-16">
              Start Your Journey with Context Today
            </h3>
            <p className="text-base text-justify">
            Create your account in minutes and start learning. Whether you're looking to upskill for a better job, learn a new hobby, or advance your career, Context is here to help.
            </p>
            <h3 className="text-2xl font-semibold mb-4 mt-8">
              Contact Us
            </h3>
            <p className="text-base text-justify">
            Have questions? Email us at dror.m23@gmail.com.
            </p>
            <button className="text-[#9B53FE] bg-white px-4 py-2 rounded-lg mt-4 mb-4">
              Sign Up Now
            </button>
          </div>
          <img
            src={image}
            alt="Portfolio Preview"
            className="w-full h-auto mt-16"
            style={{ maxWidth: '500px', maxHeight: '500px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
