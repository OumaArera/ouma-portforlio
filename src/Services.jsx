import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faCogs, faMobileAlt, faCreditCard, faChalkboardTeacher, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: faCode,
    title: 'Web Development',
    description: 'Building responsive and interactive websites using modern technologies.',
  },
  {
    icon: faPaintBrush,
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces with a focus on user experience.',
  },
  {
    icon: faCogs,
    title: 'API Design and Integration',
    description: 'Creating and integrating APIs to connect different services and applications.',
  },
  {
    icon: faMobileAlt,
    title: 'App Development',
    description: 'Developing mobile applications for both Android and iOS platforms.',
  },
  {
    icon: faCreditCard,
    title: 'Payment Integration',
    description: 'Integrating secure payment gateways into websites and applications.',
  },
  {
    icon: faChalkboardTeacher,
    title: 'Tutoring',
    description: 'Providing tutoring services in various programming languages and technologies.',
  },
  {
    icon: faUserFriends,
    title: 'Mentorship',
    description: 'Offering mentorship to help guide and support your learning journey.',
  },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">Services I Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FontAwesomeIcon icon={service.icon} size="3x" className="text-blue-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">{service.title}</h3>
            <p className="text-lg text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
