import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Services from './Services';
import Clients from './Clients'; // Import Clients component
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <div className="w-full flex flex-wrap justify-center mb-6 space-x-0 space-y-2 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/" 
              className="text-white bg-gray-900 hover:bg-blue-900 px-4 py-2 sm:px-6 sm:py-2 rounded-full flex items-center justify-center min-h-[40px]"
            >
              Profile
            </Link>
            <Link 
              to="/skills" 
              className="text-white bg-gray-900 hover:bg-blue-900 px-4 py-2 sm:px-6 sm:py-2 rounded-full flex items-center justify-center min-h-[40px]"
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              className="text-white bg-gray-900 hover:bg-blue-900 px-4 py-2 sm:px-6 sm:py-2 rounded-full flex items-center justify-center min-h-[40px]"
            >
              Projects
            </Link>
            <Link 
              to="/services" 
              className="text-white bg-gray-900 hover:bg-blue-900 px-4 py-2 sm:px-6 sm:py-2 rounded-full flex items-center justify-center min-h-[40px]"
            >
              Services
            </Link>
            <Link 
              to="/clients" 
              className="text-white bg-gray-900 hover:bg-blue-900 px-4 py-2 sm:px-6 sm:py-2 rounded-full flex items-center justify-center min-h-[40px]"
            >
              Clients
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} /> {/* Add route for Clients */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
