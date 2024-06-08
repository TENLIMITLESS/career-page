import React from 'react';
import InternshipCard from './InternshipCard';

const internships = [
  {
    id: 1,
    title: 'Frontend Developer Internship',
    description: 'Work on exciting frontend projects using React and Tailwind CSS.',
    skills: 'React, Tailwind CSS, HTML, CSS, JavaScript, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 2,
    title: 'Backend Developer Internship',
    description: 'Develop and maintain server-side applications with Node.js.',
    skills: 'Node.js, Express.js, RESTful APIs, SQL/NoSQL databases, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 3,
    title: 'React js Developer Internship',
    description: 'Develop interactive and dynamic web applications using React.js.',
    skills: 'React.js, JavaScript, Redux, HTML, CSS, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 4,
    title: 'Python Development Internship',
    description: 'Build and maintain software applications using Python.',
    skills: 'Python, Django/Flask, REST APIs, SQL/NoSQL databases, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 5,
    title: 'MERN Stack Developer Internship',
    description: 'Develop full-stack web applications using MongoDB, Express, React, and Node.js.',
    skills: 'MongoDB, Express.js, React.js, Node.js, JavaScript, REST APIs, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 6,
    title: 'Spring Boot Development Internship',
    description: 'Develop and maintain enterprise-level applications using Spring Boot.',
    skills: 'Java, Spring Boot, REST APIs, SQL/NoSQL databases, Git, Maven, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 7,
    title: 'Software Testing Internship',
    description: 'Ensure the quality and reliability of software applications through testing.',
    skills: 'Manual Testing, Automated Testing, Selenium, JUnit, TestNG, Bug Tracking Tools, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 8,
    title: 'WIX Web Development Internship',
    description: 'Create and maintain websites using the WIX platform.',
    skills: 'Wix, HTML, CSS, JavaScript, SEO, Graphic Design, UX/UI Design',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 9,
    title: 'MEAN Stack Developer Internship',
    description: 'Develop full-stack applications using MongoDB, Express, Angular, and Node.js.',
    skills: 'MongoDB, Express.js, Angular, Node.js, JavaScript, REST APIs, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 10,
    title: 'JAVA Developer Internship',
    description: 'Develop and maintain applications using Java and related technologies.',
    skills: 'Java, Spring Framework, REST APIs, SQL/NoSQL databases, Git, Maven, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 11,
    title: 'NODE.js Developer Internship',
    description: 'Develop server-side applications using Node.js.',
    skills: 'Node.js, Express.js, JavaScript, REST APIs, SQL/NoSQL databases, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 12,
    title: 'Android Developer Internship',
    description: 'Build and maintain Android applications using Java or Kotlin.',
    skills: 'Java/Kotlin, Android Studio, XML, REST APIs, Git, Firebase, SQLite',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 13,
    title: 'WordPress Development Internship',
    description: 'Develop and customize WordPress websites and plugins.',
    skills: 'WordPress, PHP, HTML, CSS, JavaScript, MySQL, SEO, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 14,
    title: 'Angular Development Internship',
    description: 'Develop dynamic web applications using Angular.',
    skills: 'Angular, TypeScript, HTML, CSS, JavaScript, REST APIs, Git, Webpack',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 15,
    title: 'Data Structure Internship',
    description: 'Design and implement efficient data structures.',
    skills: 'Data Structures, Algorithms, Java/Python/C++, Problem Solving, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 16,
    title: 'C/C++ Development Internship',
    description: 'Develop and maintain software applications using C and C++.',
    skills: 'C/C++, Data Structures, Algorithms, Problem Solving, Git, Debugging Tools',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 17,
    title: 'Artificial Intelligence Internship',
    description: 'Develop AI models and applications.',
    skills: 'Machine Learning, Python, TensorFlow/PyTorch, Data Analysis, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 18,
    title: 'Data Science and Machine Learning Internship',
    description: 'Analyze data and build machine learning models.',
    skills: 'Python/R, Data Analysis, Machine Learning, SQL, Pandas, Scikit-learn, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 19,
    title: 'Big Data Internship',
    description: 'Work with large datasets and big data technologies.',
    skills: 'Hadoop, Spark, Python/Java, SQL, Data Analysis, ETL, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 20,
    title: 'Cloud Computing Internship',
    description: 'Work with cloud infrastructure and services.',
    skills: 'AWS/Azure/GCP, Cloud Architecture, Docker, Kubernetes, DevOps, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 21,
    title: 'Software Development Internship',
    description: 'Design and develop software applications.',
    skills: 'Java/Python/C++, Software Development, SQL/NoSQL, Git, Agile Methodologies',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 22,
    title: 'Technical Program Management Internship',
    description: 'Plan and manage technical projects.',
    skills: 'Project Management, Agile Methodologies, Communication, Jira, Confluence',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 23,
    title: 'DevOps Engineering Internship',
    description: 'Develop and maintain CI/CD pipelines and infrastructure.',
    skills: 'Linux, Docker, Kubernetes, Jenkins, AWS/Azure/GCP, Scripting, Git',
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
