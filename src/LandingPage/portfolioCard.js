import React from 'react';
import image from '../Resources/card1.png';

const PortfolioCard = () => {
  return (
    <div className="bg-gradient-to-r from-[#9B53FE] to-[#5EDAFE] rounded-lg overflow-hidden shadow-md max-w-5xl mx-auto p-6">
      <div className="text-white">
        <div className="flex items-start space-x-6">
          <div className="flex-1 pr-6 ml-16">
            <h3 className="text-4xl font-semibold mb-4 mt-16">
              Build Your Portfolio
            </h3>
            <p className="text-base text-justify">
              Create a professional portfolio that showcases your skills and
              projects. Share it easily on LinkedIn, GitHub, or your personal
              website. Plus, earn certificates to validate your achievements.
            </p>
            <button className="text-[#9B53FE] bg-white px-4 py-2 rounded-lg mt-4 mb-16">
              Try it out!
            </button>
          </div>
          <img
            src={image}
            alt="Portfolio Preview"
            className="w-full h-auto mt-8"
            style={{ maxWidth: '500px', maxHeight: '500px' }}
          />
        </div>
      </div>
      <div className="absolute top-[3300px] left-[90%] transform translate-x-[-50%]">
        <svg
          width="596"
          height="591"
          viewBox="0 0 596 591"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="304.049"
            cy="302.131"
            r="167.309"
            transform="rotate(-42.9911 304.049 302.131)"
            stroke="white"
            stroke-width="0.551994"
          />
          <circle
            cx="291.653"
            cy="288.833"
            r="167.309"
            transform="rotate(-42.9911 291.653 288.833)"
            stroke="white"
            stroke-width="0.551994"
          />
        </svg>
      </div>
    </div>
  );
};

export default PortfolioCard;
