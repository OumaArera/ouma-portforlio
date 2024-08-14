import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Clients from './Clients';
import Services from './Services';
import ServiceDetail from './ServiceDetail';
import Blogs from './Blogs';

const App = () => {
  return (
    <Router>
      <Header className="fixed top-0 left-0 w-full z-50" />
      <br />
      <br />
      
      <div className="flex flex-col min-h-screen pt-16 md:pt-24">
        <main className="flex-grow flex flex-col overflow-y-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
        <Footer className="pt-4" />
      </div>
    </Router>
  );
};

export default App;
