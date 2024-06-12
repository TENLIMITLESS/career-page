import React from 'react';
import InternshipCard from './InternshipCard';

const internships = [
  {
    id: 1,
    title: 'Frontend Developer Internship',
    description: 'Assist in designing and developing frontend solutions. Write clean and efficient code using HTML, CSS, and JavaScript. Collaborate with designers and backend developers to ensure seamless integration of frontend and backend components. Learn and apply best practices in frontend development.',
    skills: 'React, Tailwind CSS, HTML, CSS, JavaScript, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 2,
    title: 'Backend Developer Internship',
    description: 'Assist in designing and developing backend solutions. Write efficient and scalable code using languages such as Python, Node.js, or Java. Collaborate with frontend developers to ensure seamless integration of frontend and backend components. Learn and apply best practices in backend development, including database management and API design.',
    skills: 'Node.js, Express.js, RESTful APIs, SQL/NoSQL databases, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 3,
    title: 'React js Developer Internship',
    description: 'Assist in developing front-end applications using React.js. Write clean, maintainable code. Collaborate with designers and back-end developers. Optimize components for maximum performance.',
    skills: 'React.js, JavaScript, Redux, HTML, CSS, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 4,
    title: 'Python Development Internship',
    description: 'Assist in developing and maintaining Python applications. Write efficient and reusable code. Troubleshoot and debug software issues. Collaborate with the team on various development tasks.',
    skills: 'Python, Django/Flask, REST APIs, SQL/NoSQL databases, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 5,
    title: 'MERN Stack Developer Internship',
    description: 'Assist in designing and developing full-stack web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Write clean and efficient code for both frontend and backend components. Collaborate with designers and other developers to ensure seamless integration of different layers of the application. Learn and apply best practices in MERN stack development, including RESTful API design and database management.',
    skills: 'MongoDB, Express.js, React.js, Node.js, JavaScript, REST APIs, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 6,
    title: 'Spring Boot Development Internship',
    description: 'Assist in designing and developing enterprise-level applications using Spring Boot. Write clean and efficient code using Java and Spring Boot framework. Collaborate with frontend developers to integrate backend services with user interfaces. Learn and apply best practices in Spring Boot development, including RESTful API design, database integration, and microservices architecture.',
    skills: 'Java, Spring Boot, REST APIs, SQL/NoSQL databases, Git, Maven, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 7,
    title: 'Software Testing Internship',
    description: 'Assist in the design and execution of test plans and test cases. Perform manual and automated testing of web and mobile applications. Identify, document, and track software defects. Collaborate with the development team to resolve issues. Participate in Agile processes and sprints.',
    skills: 'Manual Testing, Automated Testing, Selenium, JUnit, TestNG, Bug Tracking Tools, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 8,
    title: 'WIX Web Development Internship',
    description: 'Develop and design websites using the Wix platform. Customize templates to meet client requirements. Ensure websites are user-friendly and visually appealing. Collaborate with the design team to enhance website functionality.',
    skills: 'Wix, HTML, CSS, JavaScript, SEO, Graphic Design, UX/UI Design',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 9,
    title: 'MEAN Stack Developer Internship',
    description: 'Develop and maintain web applications using MEAN Stack or Full Stack technologies. Write clean and efficient code. Collaborate with front-end and back-end developers to deliver high-quality software. Participate in Agile development processes.',
    skills: 'MongoDB, Express.js, Angular, Node.js, JavaScript, REST APIs, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 10,
    title: 'JAVA Developer Internship',
    description: 'Collaborate with our team to design, develop, and maintain Java-based applications.Assist in troubleshooting and resolving software issues.Participate in code reviews and team discussions to improve code quality.Work on both front-end and back-end components of our applications.Gain practical experience with various tools and technologies in our tech stack.Engage in Agile development processes, including sprint planning and retrospectives.',
    skills: 'Java, Spring Framework, REST APIs, SQL/NoSQL databases, Git, Maven, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 11,
    title: 'NODE.js Developer Internship',
    description: 'Assist in designing and developing server-side applications using Node.js. Write clean and efficient code to build scalable and high-performance backend services. Collaborate with frontend developers to integrate backend logic with user interfaces. Learn and apply best practices in Node.js development, including asynchronous programming, API design, and database integration.',
    skills: 'Node.js, Express.js, JavaScript, REST APIs, SQL/NoSQL databases, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 12,
    title: 'Android Developer Internship',
    description: 'Collaborate with our team to design, develop, and maintain Android applications. Assist in troubleshooting and resolving software issues. Participate in code reviews and team discussions to improve code quality. Work on both front-end and back-end components of our applications. Gain practical experience with various tools and technologies in our tech stack. Engage in Agile development processes, including sprint planning and retrospectives.',
    skills: 'Java/Kotlin, Android Studio, XML, REST APIs, Git, Firebase, SQLite',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 13,
    title: 'WordPress Development Internship',
    description: 'Develop and customize WordPress themes and plugins. Ensure website functionality and responsiveness. Troubleshoot and fix website issues. Work with design and content teams to enhance user experience.',
    skills: 'WordPress, PHP, HTML, CSS, JavaScript, MySQL, SEO, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 14,
    title: 'Angular Development Internship',
    description: 'Develop and maintain Angular-based web applications. Write reusable and testable code. Collaborate with back-end developers and UX/UI designers. Participate in code reviews and team discussions.',
    skills: 'Angular, TypeScript, HTML, CSS, JavaScript, REST APIs, Git, Webpack',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 15,
    title: 'Data Structure Internship',
    description: 'Design and implement efficient data structures. Analyze algorithms for efficiency. Collaborate with development teams to optimize code. Document and test data structure implementations.',
    skills: 'Data Structures, Algorithms, Java/Python/C++, Problem Solving, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 16,
    title: 'C/C++ Development Internship',
    description: 'Develop and maintain applications using C/C++. Write efficient, reliable, and maintainable code. Debug and troubleshoot software issues. Work closely with other developers on project tasks.',
    skills: 'C/C++, Data Structures, Algorithms, Problem Solving, Git, Debugging Tools',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 17,
    title: 'Artificial Intelligence Internship',
    description: 'Assist in developing and implementing AI algorithms. Analyze data and create machine learning models. Collaborate with the team on AI research and development. Document and test AI systems.',
    skills: 'Machine Learning, Python, TensorFlow/PyTorch, Data Analysis, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 18,
    title: 'Data Science and Machine Learning Internship',
    description: 'Analyze and interpret complex data sets. Develop machine learning models to solve business problems. Collaborate with the team to apply data science techniques. Document and present data findings',
    skills: 'Python/R, Data Analysis, Machine Learning, SQL, Pandas, Scikit-learn, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 19,
    title: 'Big Data Internship',
    description: 'Assist in collecting, processing, and analyzing large datasets. Develop and maintain data pipelines. Work with various Big Data technologies such as Hadoop, Spark, and Kafka. Collaborate with data engineers and analysts.',
    skills: 'Hadoop, Spark, Python/Java, SQL, Data Analysis, ETL, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 20,
    title: 'Cloud Computing Internship',
    description: 'Assist in deploying and managing cloud services. Monitor and optimize cloud infrastructure. Collaborate with the team on cloud-based projects. Learn about different cloud platforms and services.',
    skills: 'AWS/Azure/GCP, Cloud Architecture, Docker, Kubernetes, DevOps, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 21,
    title: 'Software Development Internship',
    description: 'Assist in the design, development, and testing of software applications. Write clean and efficient code. Collaborate with the team to meet project requirements and deadlines. Learn and apply best practices in software development.',
    skills: 'Java/Python/C++, Software Development, SQL/NoSQL, Git, Agile Methodologies',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 22,
    title: 'Technical Program Management Internship',
    description: 'Assist in project planning, scheduling, and tracking. Coordinate with cross-functional teams to ensure project milestones are met. Prepare project documentation and reports. Learn about project management methodologies and tools.',
    skills: 'Project Management, Agile Methodologies, Communication, Jira, Confluence',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 23,
    title: 'DevOps Engineering Internship',
    description: 'Assist in building and maintaining CI/CD pipelines. Automate infrastructure provisioning and configuration. Monitor and troubleshoot system issues. Learn about DevOps tools and practices.',
    skills: 'Linux, Docker, Kubernetes, Jenkins, AWS/Azure/GCP, Scripting, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
];


const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Internship Opportunities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {internships.map(internship => (
          <InternshipCard key={internship.id} {...internship} />
        ))}
      </div>
    </div>
  );
};

export default Home;
