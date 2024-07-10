import React from 'react';
import OumaCV from './OumaCV.pdf';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const AboutMe = () => {
  const handleEmailClick = (event) => {
    event.preventDefault();
    window.location.href = `mailto:johnouma999@gmail.com`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
      {/* Introduction Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-blue-500">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-blue-700">Hello, I'm <span className="underline">John Ouma</span></h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800">A Passionate Full Stack Developer</h2>
        <p className="text-lg md:text-xl mb-2 text-gray-600">
          Based in Nairobi, Kenya with over a year of experience.
        </p>
        <p className="text-lg md:text-xl italic text-gray-600">
          "Turning ideas into reality, one line of code at a time."
        </p>
      </div>

      {/* Education Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">Education</h2>
        <div className="text-lg md:text-xl text-gray-700 mb-2">
          <p className="font-bold">Moringa School</p>
          <p>Software Development, 2023-2024</p>
        </div>
        <div className="text-lg md:text-xl text-gray-700 mb-2">
          <p className="font-bold">freeCodeCamp</p>
          <p>Java and Python, 2023</p>
        </div>
        <div className="text-lg md:text-xl text-gray-700 mb-2">
          <p className="font-bold">edX</p>
          <p>Introduction to AI, 2024</p>
        </div>
        <div className="text-lg md:text-xl text-gray-700 mb-2">
          <p className="font-bold">Udemy</p>
          <p>Java, Containerization, Deployment, and Microservices, 2024</p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">Contact Information</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-2 flex items-center justify-center">
          <FaPhone className="mr-2" /> 
          <a href="tel:+254748800714" className="text-blue-600 hover:underline">+254748-800-714</a>
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-2 flex items-center justify-center">
          <FaWhatsapp className="mr-2" /> 
          <a href="https://wa.me/254753472960" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">+254753-472-960</a>
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-2 flex items-center justify-center">
          <FaEnvelope className="mr-2" /> 
          <a href="mailto:johnouma999@gmail.com" onClick={handleEmailClick} className="text-blue-600 hover:underline">johnouma999@gmail.com</a>
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-2 flex items-center justify-center">
          <FaGithub className="mr-2" /> 
          <a href="https://github.com/OumaArera" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-2 flex items-center justify-center">
          <FaLinkedin className="mr-2" /> 
          <a href="https://www.linkedin.com/in/john-ouma-66603b186/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        </p>
      </div>

      {/* Resume Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full text-center border-t-4 border-gray-300">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">Resume</h2>
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
