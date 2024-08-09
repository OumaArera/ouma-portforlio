import React from 'react';

const Footer = () => {
  // Function to get the current year
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="p-4 bg-gray-900 text-white text-center">
      <p>© {getCurrentYear()} John Ouma. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
