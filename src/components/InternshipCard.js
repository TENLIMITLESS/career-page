import React, { useState } from 'react';

const InternshipCard = ({ title, description, skills }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 hover:shadow-lg flex justify-between item-center flex-col">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-gray-700 mb-4"><strong>Skills Required:</strong> {skills}</p>
      <button onClick={toggleModal} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        View Job Description
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 px-2 ">
          <div className="bg-white p-8 rounded-lg z-50 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-lg overflow-hidden animate-scaleIn">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-2">{description}</p>
            <button onClick={toggleModal} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mr-4">
              Apply Now
            </button>
            <button onClick={toggleModal} className="inline-block bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition duration-200">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipCard;
