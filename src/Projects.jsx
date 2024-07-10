import React from 'react';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">Projects</h1>

      {/* Container for all project cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        
        {/* Merch Mate Project Card */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Merch Mate</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A web application for managing merchandisers with user roles like admin, manager, and merchandiser. It includes KPI management and role-based access control.
          </p>
          <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">Technologies:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Frontend: React, JavaScript, Tailwind CSS, Figma</li>
            <li>Backend: Flask, Python</li>
            <li>Database: PostgreSQL</li>
            <li>Security: JWT Tokens</li>
          </ul>
          <p className="text-lg md:text-xl text-gray-700">
            Live Site: <a href="https://m-route-frontend.vercel.app/" className="text-blue-600 hover:underline">m-route-frontend.vercel.app</a>
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            GitHub: <a href="https://github.com/OumaArera" className="text-blue-600 hover:underline">github.com/OumaArera</a>
          </p>
        </div>

        {/* Sanaa Yetu Project Card */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Sanaa Yetu</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            An online shopping platform that empowers artisans to sell their products to a global audience with real-time transactions.
          </p>
          <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">Technologies:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Frontend: React, JavaScript, Tailwind CSS</li>
            <li>Backend: Spring Boot, Java</li>
            <li>Database: PostgreSQL</li>
          </ul>
          <p className="text-lg md:text-xl text-gray-700">
            GitHub: <a href="https://github.com/OumaArera" className="text-blue-600 hover:underline">github.com/OumaArera</a>
          </p>
        </div>

        {/* Maestro Travels Project Card */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Maestro Travels</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A web application that helps tourists locate destinations within Kenya, providing information about tour guides and facilities.
          </p>
          <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">Technologies:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Frontend: React, JavaScript, CSS</li>
            <li>Data: JSON</li>
          </ul>
          <p className="text-lg md:text-xl text-gray-700">
            GitHub: <a href="https://github.com/OumaArera" className="text-blue-600 hover:underline">github.com/OumaArera</a>
          </p>
        </div>

        {/* Foursils Academy Project Card */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Foursils Academy</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            An online learning platform where students can enroll in courses and instructors can create and manage courses.
          </p>
          <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">Technologies:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Frontend: React, CSS</li>
            <li>Backend: Flask, Python</li>
            <li>Database: PostgreSQL</li>
          </ul>
          <p className="text-lg md:text-xl text-gray-700">
            GitHub: <a href="https://github.com/OumaArera" className="text-blue-600 hover:underline">github.com/OumaArera</a>
          </p>
        </div>

        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;
