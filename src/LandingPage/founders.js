import React from 'react';
import image from '../Resources/linkedin.png';
import founder1 from '../Resources/founder1.png';
import founder2 from '../Resources/founder2.png';

const TeamPage = () => {
  return (
    <div className="text-center mb-16">
      <p className="text-2xl lg:text-3xl font-semibold mt-32 bg-clip-text text-transparent bg-gradient-to-r from-[#9E55FD] to-[#23C1FF]">
        What if every bit of your learning experience was tailored
        <br />
        to your goals, needs, and learning preferences?
      </p>
      <h2 className="text-3xl text-[#0B83D9] font-semibold mt-16">Our Team</h2>
      <p className="text-gray-600 mt-2">Meet the Minds Behind Context</p>
      <div className="flex justify-center mt-8">
        <div
          className="bg-white rounded-lg overflow-hidden shadow-md p-6 mr-4"
          style={{ width: '300px' }}
        >
          <img
            src={founder1}
            alt="Somya Gupta"
            className="w-full h-auto mb-4 rounded-lg"
          />
          <p className="text-gray-600">Somya Gupta</p>
          <p className="text-gray-600 text-sm">Founder & CEO</p>
          <button>
            <img src={image} alt="LinkedIn" className="w-6 h-6 mx-auto mt-4" />
          </button>
        </div>
        <div
          className="bg-white rounded-lg overflow-hidden shadow-md p-6 ml-4"
          style={{ width: '300px' }}
        >
          <img
            src={founder2}
            alt="Dror Margalit"
            className="w-full h-auto mb-4 rounded-lg"
          />
          <p className="text-gray-600">Dror Margalit</p>
          <p className="text-gray-600 text-sm">Founder & CEO</p>
          <button>
            <img src={image} alt="LinkedIn" className="w-6 h-6 mx-auto mt-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
