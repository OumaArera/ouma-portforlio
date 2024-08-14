import React from 'react';
import { Link } from 'react-router-dom';
import background from "./perfect2.avif";

const Home = () => {
  return (
    <div 
      className="relative flex flex-col items-center justify-center h-screen z-10 text-center text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold">John Ouma</h1>
        <p className="text-3xl mt-4">
          Turning ideas into reality, one line of code at a time.
        </p>
        <br />
        <Link 
          to="/services" 
          className="mt-12 px-6 py-3 bg-green-500 text-white rounded-full text-lg hover:bg-green-600"
        >
          View Services
        </Link>
      </div>
    </div>
  );
};

export default Home;
