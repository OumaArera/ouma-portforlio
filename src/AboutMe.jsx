import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 xl:p-20 mx-auto bg-white shadow-lg rounded-lg">
      {/* Personal Details Card */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 w-full max-w-[90%]">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 text-center">Hey! My name is <span className="font-bold">John Ouma</span> but I prefer you call me <span className="font-bold">Arera</span></h1>
        <p className="text-lg md:text-xl text-gray-700 mb-2 text-center">I am a Kenyan, living in Nairobi.</p>
        <p className="text-lg md:text-xl text-gray-700 mb-2 text-center">I schooled at <span className="font-bold">Moringa School</span> as a Full Stack Developer.</p>
        <blockquote className="italic text-gray-600 text-center">"The only way to do great work is to love what you do." - Steve Jobs</blockquote>
      </div>

      {/* Contact Information Card */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-[90%]">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-4 text-center">Contact Information</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-2 text-center">Phone: +254748-800-714</p>
        <p className="text-lg md:text-xl text-gray-700 mb-2 text-center">Email: <a href="mailto:johnouma999@gmail.com" className="text-blue-600 hover:underline">johnouma999@gmail.com</a></p>
        <p className="text-lg md:text-xl text-gray-700 mb-2 text-center">GitHub: <a href="https://github.com/OumaArera" className="text-blue-600 hover:underline">github.com/OumaArera</a></p>
        <p className="text-lg md:text-xl text-gray-700 mb-2 text-center">LinkedIn: <a href="https://www.linkedin.com/in/john-ouma-66603b186/" className="text-blue-600 hover:underline">LinkedIn</a></p>
      </div>
    </div>
  );
};

export default AboutMe;
