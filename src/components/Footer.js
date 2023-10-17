import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 text-gray-600 mt-24">
      <div className="container  bg-gray-50 mx-auto px-4 flex flex-col items-center sm:flex-row sm:justify-between">
        {/* Copyright notice */}
        <p className="text-sm text-center sm:text-left mb-4 sm:mb-0 sm:mr-8">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>

        {/* Social media links */}
        <div className="flex space-x-4 mb-4 sm:mb-0">
          <a href="https://www.linkedin.com/in/uddalak-seal-8a0967233/" className="text-blue-500 hover:text-blue-700">
            Uddalak Seal
          </a>
          <span className="text-gray-600">&nbsp;&nbsp;&&nbsp;&nbsp;</span> {/* Space between names */}
          <a href="https://www.linkedin.com/in/abhoy-sarkar-a7b23a201/" className="text-blue-500 hover:text-blue-700">
            Abhoy Sarkar
          </a>
        </div>

        {/* Contact information */}
        <div className="text-sm text-center sm:text-right">
          <p>Email: example@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;