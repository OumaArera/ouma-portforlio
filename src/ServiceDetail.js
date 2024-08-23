import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Importing images
import mobile from "./mobile.jpg";
import api from "./api.jpeg";
import web from "./web.jpg";
import tutoring from "./tutoring.jpeg";
import uiux from "./uiux.jpg";
import payment from "./payment.jpeg";

const serviceDetails = {
  'web-development': {
    image: web,
    title: 'Web Development',
    description: 'Building responsive and interactive websites using modern technologies.',
    detailedDescription: 'In web development, we focus on creating responsive and interactive websites that provide a seamless user experience across all devices. We use modern technologies like React, Tailwind CSS, and more to build robust and scalable web applications.'
  },
  'uiux-design': {
    image: uiux,
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces with a focus on user experience.',
    detailedDescription: 'UI/UX design is crucial for creating engaging and intuitive interfaces. We specialize in designing user-centric solutions that enhance usability and accessibility, ensuring a pleasant experience for your users.'
  },
  'api-design': {
    image: api,
    title: 'API Design and Integration',
    description: 'Creating and integrating APIs to connect different services and applications.',
    detailedDescription: 'Our API design and integration services facilitate smooth communication between different systems and applications. We create custom APIs that meet your specific needs and ensure seamless integration with existing platforms.'
  },
  'mobile-development': {
    image: mobile,
    title: 'Mobile Development',
    description: 'Developing mobile applications for both Android and iOS platforms.',
    detailedDescription: 'We develop mobile applications that are both functional and user-friendly. Whether you need an app for Android or iOS, our team uses the latest technologies to deliver high-quality mobile experiences.'
  },
  'payment-integration': {
    image: payment,
    title: 'Payment Integration',
    description: 'Integrating secure payment gateways into websites and applications.',
    detailedDescription: 'Our payment integration services ensure that your online transactions are secure and efficient. We work with various payment gateways to provide a seamless checkout experience for your customers. We integrate your application with MPESA, Banks, Debit/Credit Cards, Bitcoin, Airtel Money, T-Cash'
  },
  'tutoring': {
    image: tutoring,
    title: 'Tutoring and Mentorship',
    description: 'Providing tutoring services in various programming languages and technologies.',
    detailedDescription: 'We offer personalized tutoring and mentorship to help you master programming languages and technologies. Whether you’re a beginner or looking to deepen your knowledge, we provide tailored guidance to meet your learning goals.'
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) return <p>Service not found</p>;

  return (
    <div className="flex flex-col items-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">{service.title}</h2>
      <img 
        src={service.image} 
        alt={service.title} 
        className="w-full h-64 object-cover rounded-md mb-4" 
      />
      <p className="text-lg md:text-xl text-gray-700 mb-6">{service.detailedDescription}</p>
      <Link to="/services" className="text-green-500 hover:underline">Back to Services</Link>
    </div>
  );
};

export default ServiceDetail;
