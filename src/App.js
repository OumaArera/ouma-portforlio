import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Services from './Services';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <div className="flex space-x-4 mb-6">
            <Link to="/" className="text-white bg-gray-900 hover:bg-blue-900 px-6 py-2 rounded-full">
              About Me
            </Link>
            <Link to="/skills" className="text-white bg-gray-900 hover:bg-blue-900 px-6 py-2 rounded-full">
              Skills
            </Link>
            <Link to="/projects" className="text-white bg-gray-900 hover:bg-blue-900 px-6 py-2 rounded-full">
              Projects
            </Link>
            <Link to="/services" className="text-white bg-gray-900 hover:bg-blue-900 px-6 py-2 rounded-full">
              Services
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
