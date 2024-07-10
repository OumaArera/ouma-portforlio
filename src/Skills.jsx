import React from 'react';

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">Core Skills and Competencies</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-blue-500">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Programming Languages</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Frontend Development</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>React.js</li>
            <li>React Native</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Backend Development</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Django</li>
            <li>Flask</li>
            <li>Spring</li>
            <li>Spring Boot</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">UI/UX</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Figma</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">API Development</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>RESTful web services</li>
            <li>REST API clients</li>
            <li>GraphQL</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Java Technologies</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Maven</li>
            <li>Spring AOP</li>
            <li>JPA</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Deployment</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>AWS</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Microservices</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Quarkus</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">CI/CD</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>GitLab</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Threading and Concurrency</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Multithreading</li>
            <li>Java concurrency</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Database Management</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>PostgreSQL</li>
            <li>Redis</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Containerization and Orchestration</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Authentication Technologies</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>JWT</li>
            <li>Auth2</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Task Queue</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Celery</li>
            <li>RabbitMQ</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Testing</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Unit testing</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Version Control</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Operating Systems</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Windows</li>
            <li>Linux Ubuntu</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Code Editors</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Visual Studio Code</li>
            <li>IntelliJ</li>
            <li>Eclipse</li>
            <li>Pycharm</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Problem-solving</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Ability to analyze and solve coding challenges efficiently</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Collaboration</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Strong teamwork and communication skills</li>
            <li>Experience working in group coding projects</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Continuous Learning</h2>
          <ul className="list-disc list-inside text-gray-700 text-left">
            <li>Eagerness to stay updated with the latest technologies and industry trends</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
