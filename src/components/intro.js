import React from 'react';
import profpic from "./assets/prof.png"

const Introduction = () => {
  return (
    <section id="home" className="bg-gray-100 py-20 animate-fadeIn">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-8 text-center md:text-left">
        {/* Profile Picture */}
        <div className="w-40 h-40 mb-6 md:mb-0">
          <img
            src={profpic}  // Replace this with the link to your profile picture
            alt="Profile"
            className="rounded-full shadow-lg"
          />
        </div>
        {/* Introduction Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Hello, I'm Baskoro Aji</h1>
          <p className="text-lg font-medium mb-6">
            i am software engineer specialized in backend development.
          </p>
          <a
            href="#projects"
            className="border border-blue-500 text-blue-500 font-semibold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-blue-500 hover:text-white"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
