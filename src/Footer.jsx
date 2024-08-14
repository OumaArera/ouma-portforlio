import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Function to get the current year
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="p-6 bg-green-950 text-center text-white">
      <div className="flex flex-col items-center mb-4">
        <nav className="flex flex-wrap justify-center mb-4">
          <Link to="/" className="mx-2 mb-2 text-sm hover:text-green-600 hover:underline">Home</Link>
          <Link to="/services" className="mx-2 mb-2 text-sm hover:text-green-600 hover:underline">Services</Link>
          <Link to="/about" className="mx-2 mb-2 text-sm hover:text-green-600 hover:underline">About</Link>
          <Link to="/clients" className="mx-2 mb-2 text-sm hover:text-green-600 hover:underline">Clients</Link>
          <Link to="/blogs" className="mx-2 mb-2 text-sm hover:text-green-600 hover:underline">Blogs</Link>
          <Link to="/skills" className="mx-2 mb-2 text-sm hover:text-green-600 hover:underline">Skills</Link>
          <Link to="/projects" className="mx-2 mb-2 text-sm hover:text-green-600 hover:underline">Projects</Link>
        </nav>
        <p className="text-white text-sm">
          © {getCurrentYear()} John Ouma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
