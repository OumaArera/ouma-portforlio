import React from 'react';
import OumaCV from './OumaCV.pdf';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutMe = () => {
  const handleEmailClick = (event) => {
    event.preventDefault();
    window.location.href = `mailto:johnouma999@gmail.com`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
      {/* Introduction Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 w-full">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 text-center">
          Hey! My name is <span className="font-bold">John Ouma</span> but I prefer you call me{' '}
          <span className="font-bold">Arera</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-2 text-center">
          I am a Kenyan, living in Nairobi.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-2 text-center">
          I am a passionate Full Stack Developer with 1+ years of experience.
        </p>
        <blockquote className="italic text-gray-600 text-center">
          "The only way to do great work is to love what you do." - Steve Jobs
        </blockquote>
      </div>

      {/* Education Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 w-full">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-4 text-center">Education</h2>
        <div className="text-lg md:text-xl text-gray-700 mb-2 text-center">
          <p className="font-bold">Moringa School</p>
          <p>Software Development, 2023-2024</p>
        </div>
        <div className="text-lg md:text-xl text-gray-700 mb-2 text-center">
          <p className="font-bold">freeCodeCamp</p>
          <p>Java and Python, 2023</p>
        </div>
        <div className="text-lg md:text-xl text-gray-700 mb-2 text-center">
          <p className="font-bold">edX</p>
          <p>Introduction to AI, 2024</p>
        </div>
        <div className="text-lg md:text-xl text-gray-700 mb-2 text-center">
          <p className="font-bold">Udemy</p>
          <p>Java, Containerization, Deployment, and Microservices, 2024</p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 w-full">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-4 text-center">Contact Information</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-2 text-center flex items-center justify-center">
          <FaPhone className="mr-2" /> <span className="text-blue-600 hover:underline">+254748-800-714</span>
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-2 text-center flex items-center justify-center">
          <FaEnvelope className="mr-2" /> <a href="mailto:johnouma999@gmail.com" onClick={handleEmailClick} className="text-blue-600 hover:underline">johnouma999@gmail.com</a>
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-2 text-center flex items-center justify-center">
          <FaGithub className="mr-2" /> <a href="https://github.com/OumaArera" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/OumaArera</a>
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-2 text-center flex items-center justify-center">
          <FaLinkedin className="mr-2" /> <a href="https://www.linkedin.com/in/john-ouma-66603b186/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        </p>
      </div>

      {/* Resume Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-4 text-center">Resume</h2>
        <div className="flex justify-center">
          <a
            href={OumaCV}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-900 hover:bg-blue-900 px-6 py-2 rounded-full"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
