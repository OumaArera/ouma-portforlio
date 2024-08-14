import React from 'react';
import { Link } from 'react-router-dom';

// Importing images
import mobile from "./mobile.jpg";
import api from "./api.jpeg";
import web from "./web.jpg";
import tutoring from "./tutoring.jpeg";
import uiux from "./uiux.jpg";
import payment from "./payment.jpeg";

const services = [
  {
    id: 'web-development',
    image: web,
    title: 'Web Development',
    description: 'Building responsive and interactive websites using modern technologies.',
  },
  {
    id: 'uiux-design',
    image: uiux,
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces with a focus on user experience.',
  },
  {
    id: 'api-design',
    image: api,
    title: 'API Design and Integration',
    description: 'Creating and integrating APIs to connect different services and applications.',
  },
  {
    id: 'mobile-development',
    image: mobile,
    title: 'Mobile Development',
    description: 'Developing mobile applications for both Android and iOS platforms.',
  },
  {
    id: 'payment-integration',
    image: payment,
    title: 'Payment Integration',
    description: 'Integrating secure payment gateways into websites and applications.',
  },
  {
    id: 'tutoring',
    image: tutoring,
    title: 'Tutoring and Mentorship',
    description: 'Providing tutoring services in various programming languages and technologies.',
  },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
      <br />
      <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-6 text-center">Tailored software solutions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {services.map((service) => (
          <div key={service.id} className="relative bg-gray-100 p-6 rounded-lg shadow-md mb-6 w-full text-center border-t-4 border-gray-300 transition-transform transform hover:scale-105">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-48 object-cover rounded-md mb-4" 
            />
            <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">{service.title}</h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">{service.description}</p>
            <Link to={`/services/${service.id}`} className="text-green-500 hover:underline">Learn More ></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
