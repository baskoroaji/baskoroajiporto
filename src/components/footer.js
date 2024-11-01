import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
    
      <div className="container mx-auto flex flex-col items-center">
      <h1 className='text-dark mx-auto text-2xl py-4'>Contact</h1>
        
        {/* Contact Information */}

        {/* Social Media Links */}
        <div className="flex space-x-6 ">
          <a
            href="linkedin.com/in/mohamad-baskoro-aji25/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://github.com/baskoroaji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
    </footer>
  );
};

export default Footer;
