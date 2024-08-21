import React from 'react';

const projects = [
  {
    title: "Serenity Pathways",
    description: "A web application for managing psychotherapy services with roles for admin, doctor, and patient, including features for activity monitoring and secure data access.",
    technologies: [
      "Frontend: React, JavaScript, Tailwind CSS, Figma",
      "Backend: Flask, Python",
      "Database: PostgreSQL",
      "Security: JWT Tokens"
    ],
    liveSite: "https://serenity-sandy.vercel.app/"
  },
  {
    title: "Merch Mate",
    description: "A web app for managing merchandisers with user roles like admin and manager, featuring KPI management and secure role-based access control.",
    technologies: [
      "Frontend: React, JavaScript, Tailwind CSS, Figma",
      "Backend: Flask, Python",
      "Database: PostgreSQL",
      "Security: JWT Tokens"
    ],
    liveSite: "https://m-route-frontend.vercel.app/"
  },
  {
    title: "Sanaa Yetu",
    description: "An online platform empowering artisans to sell their products globally, with support for real-time transactions.",
    technologies: [
      "Frontend: React, JavaScript, Tailwind CSS",
      "Backend: Spring Boot, Java",
      "Database: PostgreSQL"
    ]
  },
  {
    title: "Maestro Travels",
    description: "A web app helping tourists locate destinations in Kenya, providing info on tour guides and facilities.",
    technologies: [
      "Frontend: React, JavaScript, CSS",
      "Data: JSON"
    ]
  },
  {
    title: "Foursils Academy",
    description: "An online learning platform for students to enroll in courses and instructors to manage course content.",
    technologies: [
      "Frontend: React, CSS",
      "Backend: Flask, Python",
      "Database: PostgreSQL"
    ]
  }
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
      <br />
      <h1 className="text-2xl md:text-3xl font-semibold text-green-800 mb-6 text-center">Projects</h1>

      {/* Container for all project cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md mb-6 w-full flex flex-col justify-between transition-transform duration-300 transform hover:scale-105 border-t-4 border-green-300"
          >
            <h2 className="text-xl md:text-2xl font-medium text-green-800 mb-2">{project.title}</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-4">{project.description}</p>
            <h3 className="text-lg md:text-xl font-medium text-green-800 mb-2">Technologies:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
            {project.liveSite && (
              <p className="text-lg md:text-xl text-gray-700">
                Live Site: <a href={project.liveSite} className="text-green-600 hover:underline">{new URL(project.liveSite).hostname}</a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
