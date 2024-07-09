import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects'; // Import Projects component
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false); // State for Projects component

  const handleToggleAboutMe = () => {
    setShowAboutMe((prevShowAboutMe) => !prevShowAboutMe);
    setShowSkills(false); // Close Skills if AboutMe is toggled
    setShowProjects(false); // Close Projects if AboutMe is toggled
  };

  const handleToggleSkills = () => {
    setShowSkills((prevShowSkills) => !prevShowSkills);
    setShowAboutMe(false); // Close AboutMe if Skills is toggled
    setShowProjects(false); // Close Projects if Skills is toggled
  };

  const handleToggleProjects = () => {
    setShowProjects((prevShowProjects) => !prevShowProjects);
    setShowAboutMe(false); // Close AboutMe if Projects is toggled
    setShowSkills(false); // Close Skills if Projects is toggled
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="flex space-x-4 mb-6">
          <button
            className="text-white bg-gray-900 hover:bg-blue-900 px-6 py-2 rounded-full"
            onClick={handleToggleAboutMe}
          >
            About Me
          </button>
          <button
            className="text-white bg-gray-900 hover:bg-blue-900 px-6 py-2 rounded-full"
            onClick={handleToggleSkills}
          >
            Skills
          </button>
          <button
            className="text-white bg-gray-900 hover:bg-blue-900 px-6 py-2 rounded-full"
            onClick={handleToggleProjects}
          >
            Projects
          </button>
        </div>
        {showAboutMe && <AboutMe />}
        {showSkills && <Skills />}
        {showProjects && <Projects />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
