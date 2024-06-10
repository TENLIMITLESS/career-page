import React from 'react';

const InternshipCard = ({ title, description, skills, email }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="text-gray-700 mb-4">
        <li><strong>Location:</strong> Remote</li>
        <li><strong>Position Type:</strong> Internship</li>
        <li><strong>Duration:</strong> 3 months</li>
      </ul>
      <p className="text-gray-700 text-base mb-4"><strong>Skills Required:</strong> {skills}</p>
      <p className="text-gray-700 mb-4">Please share your resume via email after clicking on the apply button.</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScMY6Dos28JVDpYmgXB9FK4QpepWxsn_rEH-mQ1AYiql4d_qA/viewform" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Apply
      </a>
    </div>
  );
};

export default InternshipCard;
