import React from 'react';

const JoinForm = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:p-16 max-w-md lg:max-w-2xl mx-auto">
      <div className="bg-blue-600 text-white  font-bold py-3 px-6 rounded-t-lg text-center w-full text-xl lg:text-2xl">
        Il tuo Developer di fiducia
      </div>
      <div className="p-8 bg-[#121212] rounded-b-lg text-white w-full">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Prenota subito una consulenza gratuita</h2>
        <p className='mb-4'>
        🚀 Parlami della tua idea o esponi il tuo problema e vediamo come poterlo risolvere!
        </p>
        <form>
          
          <button
            onClick={() => window.open("https://calendly.com/baiardi10/30min", "_blank")}
            className="bg-blue-500 text-white font-bold py-3 px-4 lg:py-4 lg:px-6 rounded-lg w-full  lg:text-xl hover:bg-blue-400 transition duration-300"
          >
            Prenota ora →
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
