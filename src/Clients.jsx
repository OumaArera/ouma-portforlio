import React from 'react';
import naya from "./naya.png"

const Clients = () => {
  const clientDetails = [
    {
      name: 'Eliakim Naya',
      business: 'Motor Vehicle Dealer',
      solution: 'The app was designed to streamline the vehicle inventory management and improve the customer purchase experience.',
      imageUrl: naya
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      {clientDetails.map((client, index) => (
        <div key={index} className="mb-6 border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold">{client.name}</h2>
          <p className="text-gray-600">{client.business}</p>
          <p>{client.solution}</p>
          <div className="mt-4">
            <img 
              src={client.imageUrl} 
              alt={`${client.name} app landing page`} 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clients;
