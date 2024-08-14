import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import portrait from "./portrait.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div>
      <header className="flex items-center justify-between p-6 bg-white text-gray-900 shadow-lg fixed top-0 w-full z-50 border-b-4 border-green-500">
        <div className="flex items-center">
          <img 
            src={portrait}
            alt="John Ouma" 
            className="w-12 h-12 rounded-full mr-4 border-2 border-green-500 shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">John Ouma</h1>
            <p className="text-lg text-gray-600">Full Stack Software Engineer</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-lg font-semibold hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500">
            Home
          </Link>
          <Link to="/about" className="text-lg font-semibold hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500">
            About
          </Link>
          <Link to="/blogs" className="text-lg font-semibold hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500">
            Blogs
          </Link>
          <Link to="/skills" className="text-lg font-semibold hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500">
            Skills
          </Link>
          <Link to="/projects" className="text-lg font-semibold hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500">
            Projects
          </Link>
          <Link to="/clients" className="text-lg font-semibold hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500">
            Clients
          </Link>
          <Link to="/services" className="text-lg font-semibold hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500">
            Services
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg 
              className="w-8 h-8 text-gray-900" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden absolute top-20 right-4 bg-white border border-green-500 rounded-lg shadow-lg p-6 space-y-6">
            <Link to="/" className="block text-lg font-semibold text-gray-900 hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="block text-lg font-semibold text-gray-900 hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/blogs" className="block text-lg font-semibold text-gray-900 hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500" onClick={toggleMenu}>
              Blogs
            </Link>
            <Link to="/skills" className="block text-lg font-semibold text-gray-900 hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500" onClick={toggleMenu}>
              Skills
            </Link>
            <Link to="/projects" className="block text-lg font-semibold text-gray-900 hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500" onClick={toggleMenu}>
              Projects
            </Link>
            <Link to="/clients" className="block text-lg font-semibold text-gray-900 hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500" onClick={toggleMenu}>
              Clients
            </Link>
            <Link to="/services" className="block text-lg font-semibold text-gray-900 hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-500" onClick={toggleMenu}>
              Services
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
