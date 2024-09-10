import React from 'react';

const JoinForm = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:p-16 max-w-md lg:max-w-2xl mx-auto">
      <div className="bg-blue-600 text-white  font-bold py-3 px-6 rounded-t-lg text-center w-full text-xl lg:text-3xl">
        Il tuo Developer di fiducia
      </div>
      <div className="p-8 bg-[#121212]  lg:p-16 rounded-b-lg text-white w-full">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10">Hai bisogno di una mano?</h2>
        <form>
          <div className="mb-6 lg:mb-10">
            <input
              type="email"
              placeholder="eg. john@gmail.com"
              className="w-full p-4 lg:p-6 border border-gray-600 rounded-lg text-black text-lg lg:text-2xl"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-3 px-4 lg:py-4 lg:px-6 rounded-lg w-full text-lg lg:text-2xl hover:bg-yellow-500 transition duration-300"
          >
            Contattami →
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
