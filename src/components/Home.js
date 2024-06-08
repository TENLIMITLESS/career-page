import React from 'react';
import InternshipCard from './InternshipCard';

const internships = [
  {
    id: 1,
    title: 'Frontend Developer Internship',
    description: 'Work on exciting frontend projects using React and Tailwind CSS.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 2,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 3,
    title: 'React Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 4,
    title: 'Python Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 5,
    title: 'MERN Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
 
  {
    id: 6,
    title: 'Spring Boot Developement Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 7,
    title: 'Software Testing Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 8,
    title: 'WIX web development Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 9,
    title: 'Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 10,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 11,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 12,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 13,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 14,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 15,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 16,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 17,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 18,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 19,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 20,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 21,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 22,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 23,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills:"",
    email: 'hr@entrepreneurshipnetwork.net'
  },
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
