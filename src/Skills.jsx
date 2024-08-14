import React from 'react';

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto shadow-lg rounded-lg w-full max-w-6xl bg-white">
      <br />
      <h1 className="text-2xl md:text-3xl font-semibold text-green-900 mb-6 text-center">Core Skills and Competencies</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full bg-white bg-opacity-80 p-6 rounded-lg">
        
        {/* Programming Languages */}
        <div className="p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-green-500 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Programming Languages</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Frontend Frameworks */}
        <div className="p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-green-500 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Frontend Frameworks</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>React</li>
            <li>React Native</li>
            <li>Tailwind CSS</li>
            <li>Vue.js</li>
          </ul>
        </div>

        {/* Backend Frameworks */}
        <div className="p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-green-500 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Backend Frameworks</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>NodeJS</li>
            <li>Express</li>
            <li>Flask</li>
            <li>Django</li>
            <li>Spring Boot</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-green-500 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Databases</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>MariaDB</li>
          </ul>
        </div>

        {/* API Development */}
        <div className="p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-green-500 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">API Development</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>RESTful web services</li>
            <li>REST API clients</li>
            <li>GraphQL</li>
          </ul>
        </div>

        {/* Deployment */}
        <div className="p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-green-500 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Deployment</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>AWS</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </div>

        {/* Microservices */}
        <div className="p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-green-500 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Microservices</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Quarkus</li>
            <li>Spring Cloud</li>
            <li>Istio</li>
          </ul>
        </div>

        {/* CI/CD */}
        <div className="p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-green-500 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">CI/CD</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>GitLab</li>
            <li>Jenkins</li>
            <li>GitHub Actions</li>
          </ul>
        </div>

        {/* Containerization */}
        <div className="p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-green-500 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Containerization</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
