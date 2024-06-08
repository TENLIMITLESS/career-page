import React from 'react';

const InternshipCard = ({ title, description,skills, email }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {/* <p className="text-gray-700 mb-4">{description}</p> */}
      <ul>
        <li> Location :Remote</li>
        <li> Position Type: Internship</li>
        <li> Duration : 3 months</li>
        <li> Stipend : Unpaid</li>
      </ul>
      <p className=" text-gray-700 text-base"> Skills Required:{skills}</p>
      <p>Please share your Resume on mail after click on apply button</p>
      <a href={`mailto:${email}?subject=Application for ${title}`} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Apply
      </a>
    </div>
  );
};

export default InternshipCard;
