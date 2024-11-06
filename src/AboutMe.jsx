import React, { useState } from 'react';
import OumaCV from './Ouma_John.pdf';
import expertise from './expertise.jpg';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const AboutMe = () => {
  const [showContact, setShowContact] = useState(false);

  const handleEmailClick = (event) => {
    event.preventDefault();
    window.location.href = `mailto:johnouma999@gmail.com`;
  };

  const handleGetInTouchClick = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-6 w-full">
        <div className="text-center md:text-left md:w-1/2 order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-green-700">Who I Am</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800">
            Your Trusted Software Partner
          </h2>
          <p className="text-lg md:text-xl mb-2 text-gray-600">
            I am a passionate full-stack software developer dedicated to transforming your ideas into robust digital solutions. Based in Nairobi, I leverage the latest technologies to create innovative applications that drive success. My expertise spans frontend and backend development, ensuring seamless user experiences and powerful functionality. Let's collaborate to elevate your business and achieve your goals together!
          </p>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 order-1 md:order-2">
          <img src={expertise} alt="Expertise" className="w-full rounded-lg shadow-md" />
        </div>
      </div>

      {/* Get in Touch Button */}
      <button
        onClick={handleGetInTouchClick}
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-full text-lg hover:bg-green-600"
      >
        Get in Touch
      </button>
      <br />

      {/* Conditional Contact Information Section */}
      {showContact && (
        <>
          {/* Contact Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-green-500">
            <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">Contact Information</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-2 flex items-center justify-center">
              <FaPhone className="mr-2" /> 
              <a href="tel:+254748800714" className="text-green-600 hover:underline">+254748-800-714</a>
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-2 flex items-center justify-center">
              <FaWhatsapp className="mr-2" /> 
              <a href="https://wa.me/254753472960" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">+254753-472-960</a>
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-2 flex items-center justify-center">
              <FaEnvelope className="mr-2" /> 
              <a href="mailto:johnouma999@gmail.com" onClick={handleEmailClick} className="text-green-600 hover:underline">johnouma999@gmail.com</a>
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-2 flex items-center justify-center">
              <FaGithub className="mr-2" /> 
              <a href="https://github.com/OumaArera" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">GitHub</a>
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-2 flex items-center justify-center">
              <FaLinkedin className="mr-2" /> 
              <a href="https://www.linkedin.com/in/john-ouma-66603b186/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">LinkedIn</a>
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
                className="text-white bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full"
              >
                Download Resume
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutMe;
