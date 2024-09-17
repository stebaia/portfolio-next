import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-6 md:mb-0 w-full md:w-auto">
            <h2 className="text-2xl font-bold mb-4">Yoocoding</h2>
            <p className="text-gray-400">Sono il tuo sviluppatore di quartiere</p>
            <div className="flex mt-4">
              {/* Social Icons */}
              
            </div>
          </div>
          
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          <p>Privacy policy | Legal notice | Terms of service</p>
          <p>Yoocoding</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
