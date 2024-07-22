import React from 'react';

const projects = [
  {
    title: "Insight Wellbeing P/L",
    description: "A web application for managing psychotherapy services with user roles such as admin, doctor, and patient. It includes features for activity monitoring, prescription management, impression generation, and role-based access control, ensuring secure and efficient access to patient data.",
    technologies: [
      "Frontend: React, JavaScript, Tailwind CSS, Figma",
      "Backend: Flask, Python",
      "Database: PostgreSQL",
      "Security: JWT Tokens"
    ],
    liveSite: "https://insight-wellbeing.vercel.app/",
    github: "https://github.com/OumaArera"
  },
  {
    title: "Merch Mate",
    description: "A web application for managing merchandisers with user roles like admin, manager, and merchandiser. It includes KPI management and role-based access control.",
    technologies: [
      "Frontend: React, JavaScript, Tailwind CSS, Figma",
      "Backend: Flask, Python",
      "Database: PostgreSQL",
      "Security: JWT Tokens"
    ],
    liveSite: "https://m-route-frontend.vercel.app/",
    github: "https://github.com/OumaArera"
  },
  {
    title: "Sanaa Yetu",
    description: "An online shopping platform that empowers artisans to sell their products to a global audience with real-time transactions.",
    technologies: [
      "Frontend: React, JavaScript, Tailwind CSS",
      "Backend: Spring Boot, Java",
      "Database: PostgreSQL"
    ],
    github: "https://github.com/OumaArera"
  },
  {
    title: "Maestro Travels",
    description: "A web application that helps tourists locate destinations within Kenya, providing information about tour guides and facilities.",
    technologies: [
      "Frontend: React, JavaScript, CSS",
      "Data: JSON"
    ],
    github: "https://github.com/OumaArera"
  },
  {
    title: "Foursils Academy",
    description: "An online learning platform where students can enroll in courses and instructors can create and manage courses.",
    technologies: [
      "Frontend: React, CSS",
      "Backend: Flask, Python",
      "Database: PostgreSQL"
    ],
    github: "https://github.com/OumaArera"
  }
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">Projects</h1>

      {/* Container for all project cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300">
            <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">{project.title}</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-4">{project.description}</p>
            <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">Technologies:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
            {project.liveSite && (
              <p className="text-lg md:text-xl text-gray-700">
                Live Site: <a href={project.liveSite} className="text-blue-600 hover:underline">{new URL(project.liveSite).hostname}</a>
              </p>
            )}
            <p className="text-lg md:text-xl text-gray-700">
              GitHub: <a href={project.github} className="text-blue-600 hover:underline">github.com/OumaArera</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
