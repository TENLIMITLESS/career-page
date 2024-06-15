// // import React, { useState } from 'react';

// // const InternshipCard = ({ title, description, skills }) => {
// //   const [showModal, setShowModal] = useState(false);

// //   const toggleModal = () => {
// //     setShowModal(!showModal);
// //   };

// //   return (
// //     <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 hover:shadow-lg flex justify-between item-center flex-col">
// //       <h2 className="text-2xl font-bold mb-2">{title}</h2>
// //       <p className="text-gray-700 mb-2">{description}</p>
// //       <p className="text-gray-700 mb-4"><strong>Skills Required:</strong> {skills}</p>
// //       <button onClick={toggleModal} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
// //         View Job Description
// //       </button>
// //       {showModal && (
// //         <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 px-2 ">
// //           <div className="bg-white p-8 rounded-lg z-50 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-lg overflow-hidden animate-scaleIn">
// //             <h2 className="text-2xl font-bold mb-4">{title}</h2>
// //             <p className="text-gray-700 mb-2">{description}</p>
// //             <button onClick={toggleModal} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mr-4">
// //               Apply Now
// //             </button>
// //             <button onClick={toggleModal} className="inline-block bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition duration-200">
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default InternshipCard;


// import React, { useState } from 'react';

// const InternshipCard = ({ title, description, skills }) => {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   // Truncate description to 2 lines
//   const truncatedDescription = description.split(' ').slice(0, 20).join(' ') + '...';

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 hover:shadow-lg flex justify-between item-center flex-col">
//       <h2 className="text-2xl font-bold mb-2">{title}</h2>
//       <p className="text-gray-700 mb-4"><strong>Skills Required:</strong> {skills}</p>
//       <p> <strong> Job Description:</strong> </p>
//       <p className="text-gray-700 mb-2 line-clamp-2">{truncatedDescription}</p>
//       <button onClick={toggleModal} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
//         View Job Description
//       </button>
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 h-[100%] w-[100%] ">
//           <div className="bg-white p-8 rounded-lg z-50 w-full md:w-[30%] h-[100%] md:h-full md:overflow-hidden animate-scaleIn">
//             <h2 className="text-xl md:text-2xl font-bold md:mb-4">{title}</h2>
//             <p className="text-sm md:text-md text-gray-700 md:mb-2">{description}</p>
//             <a href="https://docs.google.com/forms/d/e/1FAIpQLScMY6Dos28JVDpYmgXB9FK4QpepWxsn_rEH-mQ1AYiql4d_qA/viewform" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mr-4">
//               Apply Now
//             </a>
//             <button onClick={toggleModal} className="inline-block bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition duration-200">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InternshipCard;


import React, { useState } from 'react';

const InternshipCard = ({ title, description, skills }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Truncate description to 2 lines
  const truncatedDescription = description.split(' ').slice(0, 20).join(' ') + '...';

  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 hover:shadow-lg flex justify-between items-center flex-col">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4"><strong>Skills Required:</strong> {skills}</p>
      <p className="text-gray-700 mb-2 line-clamp-2">{truncatedDescription}</p>
      <button onClick={toggleModal} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        View Job Description
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg z-50 max-w-sm w-full overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-sm text-gray-700 mb-4">{description}</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScMY6Dos28JVDpYmgXB9FK4QpepWxsn_rEH-mQ1AYiql4d_qA/viewform" className="block w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mb-2 text-center">
              Apply Now
            </a>
            <button onClick={toggleModal} className="block w-full bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition duration-200">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipCard;
