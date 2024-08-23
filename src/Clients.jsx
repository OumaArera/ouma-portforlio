import React from 'react';
import insight from "./insight.png";
import buildwork from "./buildwork.png"

const Clients = () => {
  const clientDetails = [
    {
      name: 'Serenity Pathways',
      location: "Harare, Zimbabwe",
      business: 'Psychotherapy Clinic',
      solution: 'The app connects patients with Insight Wellbeing P/L online, allowing doctors to monitor activities, provide prescriptions, and ensure data encryption for secure patient access.',
      technologies: ['React', 'NodeJS', 'Postgresql'],
      websiteUrl: 'https://serenity-sandy.vercel.app/',
      imageUrl: insight,
    },
    {
      name: 'BuildWork Constructors',
      location: "Migori, Kenya",
      business: 'Company websit',
      solution: 'The app displays the company\'s services, and projects. The application provides an intuitive user interface that is very captivating.',
      technologies: ['React', 'NodeJS', 'Postgresql'],
      websiteUrl: 'https://buildwork.vercel.app/',
      imageUrl: buildwork,
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <br />
      <h1 className="text-3xl font-bold mb-8 text-center text-green-800">Clients</h1>
      <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-1">
        {clientDetails.map((client, index) => (
          <div 
            key={index} 
            className="bg-white border rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            <img 
              src={client.imageUrl} 
              alt={`${client.name} app landing page`} 
              className="w-full h-auto rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-green-800">{client.name}</h2>
              <h3 className="text-md font-semibold mb-2 text-gray-700">{client.location}</h3>
              <p className="text-gray-600 mb-2">{client.business}</p>
              <p className="text-gray-700 mb-4">{client.solution}</p>
              <div className="flex flex-wrap">
                {client.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a 
                  href={client.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
