import React, { useState } from 'react';

const PricingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Call your backend API with the email state
    console.log('Submitting email:', email);
    // Reset the email state
    setEmail('');
    // Close the modal
    setShowModal(false);
  };

  return (
    <div className="text-center">
      <div className="absolute top-[4950px] left-[95%] transform translate-x-[-50%]">
        <svg
          width="470"
          height="606"
          viewBox="0 0 470 606"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="307.21"
            cy="296.574"
            r="167.309"
            transform="rotate(-130.947 307.21 296.574)"
            stroke="#0B83D9"
            stroke-width="0.551994"
          />
          <circle
            cx="293.479"
            cy="308.489"
            r="167.309"
            transform="rotate(-130.947 293.479 308.489)"
            stroke="#0B83D9"
            stroke-width="0.551994"
          />
          <path
            d="M185.318 173.957L191.075 173.984L193.99 169.019L193.962 174.776L198.928 177.691L193.17 177.664L190.256 182.629L190.283 176.872L185.318 173.957Z"
            fill="#C099FC"
          />
        </svg>
      </div>
      <h2 className="text-3xl text-[#0B83D9] font-semibold mt-16">
        Simple and Affordable
      </h2>
      <p className="text-gray-700 mt-2">
        We believe in keeping things simple and accessible. That's why we offer
        just one comprehensive plan.
      </p>
      <div className="w-full max-w-sm p-4 bg-gradient-to-r from-[#9F59FF] to-[#65C9FF]  rounded-lg shadow sm:p-8  mx-auto mt-8 mb-24">
        <div className="flex items-baseline text-white">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="20" fill="white" />
            <path
              d="M21 18V11L12 22H19L19 29L28 18L21 18Z"
              stroke="#0B83D9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h5 className="mb-4 mt-4 text-xl font-medium text-white text-left">
          Popular
        </h5>
        <p className="text-sm text-left text-white mb-4">
          For just $25 a month, you get access to all of our amazing features
        </p>
        <div className="flex items-baseline text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">49</span>
          <span className="ms-1 text-xl font-normal text-white">/month</span>
        </div>
        <div className="text-left">
          <h6 className="mb-4 mt-2 text-sm font-medium text-white">
            What's included:
          </h6>
        </div>

        <ul role="list" className="space-y-5 my-7">
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-white ms-3">
              Personalized Learning Paths
            </span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-white ms-3">
              AI Assistance
            </span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-white ms-3">
              Interactive Coding Exercises
            </span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-white ms-3">
              Creative Projects
            </span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-white ms-3">
              Professional Portfolio Builder
            </span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-white ms-3">
              Certification
            </span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-white ms-3">
              Gamified Learning
            </span>
          </li>
          {/* Other list items */}
        </ul>
        <button
          type="button"
          className="text-purple-600 font-medium rounded-full text-sm px-4 py-1.5 inline-flex justify-center w-full text-center bg-white "
          onClick={() => setShowModal(true)}
        >
          Pay
        </button>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg p-6 w-[450px]">
              <button
                className="absolute top-2 right-2 text-red-500"
                onClick={() => setShowModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h3 className="text-xl text-[#0B83D9] font-semibold text-center mb-2">
                Waitlist
              </h3>
              <p className="text-center mb-4">
                Oops, we already have a lot of users onboard and we are
                onboarding new users soon. Kindly join our waitlist!
              </p>
              <div className="flex items-center border border-[#0B83D9] rounded-full overflow-hidden mb-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 flex-grow outline-none rounded-l-full"
                  value={email}
                  onChange={onChangeEmail}
                />
                <button
                  className="px-4 py-2 mr-1 ml-2 my-1 bg-gradient-to-r from-[#9E55FD] to-[#23C1FF] text-white font-base rounded-full"
                  onClick={handleSubmit}
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingPage;
