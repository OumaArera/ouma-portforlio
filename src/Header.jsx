import React from 'react';
import portrait from "./portrait.jpg"


const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="flex items-center">
        <img 
          src={portrait}
          alt="John Ouma" 
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h1 className="text-xl font-bold">John Ouma</h1>
          <p className="text-sm">Full Stack Developer</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
