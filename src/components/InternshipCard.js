import React from 'react';

const InternshipCard = ({ title, description, email }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={`mailto:${email}?subject=Application for ${title}`} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Apply
      </a>
    </div>
  );
};

export default InternshipCard;
