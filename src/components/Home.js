import React from 'react';
import InternshipCard from './InternshipCard';

const internships = [
  {
    id: 1,
    title: 'Frontend Developer Internship',
    description: 'Work on exciting frontend projects using React and Tailwind CSS.',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 2,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  // Add more internships here
];

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Internship Opportunities</h1>
      <div className="flex flex-wrap justify-center">
        {internships.map(internship => (
          <InternshipCard key={internship.id} {...internship} />
        ))}
      </div>
    </div>
  );
};

export default Home;
