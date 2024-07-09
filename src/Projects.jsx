import React from 'react';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">Projects</h1>

      {/* Merch Mate Project Card */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Merch Mate</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          With the expansion of Consumer Packaging Goods industries, ISP, government departments such as water, and other service providers that rely heavily on merchandisers/Direct Sales Representatives, the problem of management comes up. With this industry's fast growth, it's become harder to manage these merchandisers when they're sent to the field. It's very difficult to verify if they actually reach the assigned destination, and the quality of data they send back is often poor and generic.
        </p>
        <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">Solution:</h3>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Merch Mate, a web application, addresses this problem by creating three user roles: admin, manager, and merchandiser. Admin manages users and their roles, resets passwords, and blocks users who have exited. Admin also creates and manages Key Performance Indicators (KPIs), which define the specific metrics merchandisers must address as assigned by managers. These KPIs are used to rate the quality of merchandiser responses. Additionally, admin assigns merchandisers to managers monthly to streamline responsibility and workload management.
        </p>
        <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">Technologies:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Frontend: React, JavaScript, Tailwind CSS, Figma</li>
          <li>Backend: Flask, Python</li>
          <li>Database: PostgreSQL</li>
          <li>Login: Role Based Access Control</li>
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
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Sanaa Yetu</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Developed an innovative online shopping platform aimed at empowering artisans to showcase and sell their merchandise to a global audience. The platform facilitates real-time transactions between artisans and buyers, offering a seamless and intuitive shopping experience.
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
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Maestro Travels</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Developed a comprehensive web application to assist tourists in locating destinations within Kenya. The platform allows tour guides and facilities to upload services and activities specific to their destinations, providing tourists with valuable information for planning their trips.
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
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Foursils Academy</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Led the development of an online learning platform using Flask for the backend and PostgreSQL for the database. The platform empowers students to enroll in and take courses offered by the academy, while instructors have the ability to create and manage courses. Implemented a user-friendly frontend using React and CSS to enhance the learning experience.
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
  );
};

export default Projects;
