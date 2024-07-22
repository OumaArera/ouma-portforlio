import React from 'react';
import naya from "./naya.png";
import insight from "./insight.png"

const Clients = () => {
  const clientDetails = [
    {
      name: 'Eliakim Naya',
      location: "Nairobi, Kenya",
      business: 'Motor Vehicle Dealer',
      solution: 'The app was designed to streamline vehicle inventory management and improve the customer purchase experience.',
      technologies: ['React', 'Spring Boot', 'Postgresql'],
      websiteUrl: 'https://ouma-portforlio.vercel.app/',
      imageUrl: naya,
    },
    {
      name: 'Insight Wellbeing P/L',
      location: "Harare, Zimbabwe",
      business: 'Psychotherapy Clinic',
      solution: 'The application enables patients seeking psychotherapy services to connect with Insight Wellbeing P/L online. It allows doctors to assign and monitor patient activities, provide prescriptions, and offer impressions that patients can download. The app ensures end-to-end encryption of all patient data and provides secure access to patient information.',
      technologies: ['React', 'Flask', 'Postgresql'],
      websiteUrl: 'https://insight-wellbeing.vercel.app/',
      imageUrl: insight,
    }
    
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">Clients</h1>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {clientDetails.map((client, index) => (
          <div key={index} className="bg-white border rounded-lg overflow-hidden shadow-md">
            <img 
              src={client.imageUrl} 
              alt={`${client.name} app landing page`} 
              className="w-full h-auto rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{client.name}</h2>
              <h3 className="text-md font-semibold mb-2">{client.location}</h3>
              <p className="text-gray-600 mb-2">{client.business}</p>
              <p className="text-gray-700 mb-4">{client.solution}</p>
              <div className="flex flex-wrap">
                {client.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2">{tech}</span>
                ))}
              </div>
              <div className="mt-4">
                <a 
                  href={client.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
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
