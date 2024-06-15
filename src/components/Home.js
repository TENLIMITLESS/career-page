import React from 'react';
import InternshipCard from './InternshipCard';

const internships = [
  {
    id: 1,
    title: 'Frontend Developer Internship',
    description: `
      Role and Responsibilities:
      ● Assist in designing and developing frontend solutions.
      ● Write clean and efficient code using HTML, CSS, and JavaScript.
      ● Collaborate with designers and backend developers to ensure seamless integration of frontend and backend components.
      ● Learn and apply best practices in frontend development.

      Qualifications:
      ● Proficiency in HTML, CSS, JavaScript.
      ● Familiarity with React, Tailwind CSS, Git.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'React, Tailwind CSS, HTML, CSS, JavaScript, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 2,
    title: 'Backend Developer Internship',
    description: `
      Role and Responsibilities:
      ● Assist in designing and developing backend solutions.
      ● Write efficient and scalable code using languages such as Python, Node.js, or Java.
      ● Collaborate with frontend developers to ensure seamless integration of frontend and backend components.
      ● Learn and apply best practices in backend development, including database management and API design.

      Qualifications:
      ● Proficiency in Node.js, Express.js, RESTful APIs, SQL/NoSQL databases, Git, Docker.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Node.js, Express.js, RESTful APIs, SQL/NoSQL databases, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 3,
    title: 'React js Developer Internship',
    description: `
      Role and Responsibilities:
      ● Assist in developing front-end applications using React.js.
      ● Write clean, maintainable code.
      ● Collaborate with designers and back-end developers.
      ● Optimize components for maximum performance.

      Qualifications:
      ● Proficiency in React.js, JavaScript, Redux, HTML, CSS, Git.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'React.js, JavaScript, Redux, HTML, CSS, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 4,
    title: 'Python Development Internship',
    description: `
      Role and Responsibilities:
      ● Assist in developing and maintaining Python applications.
      ● Write efficient and reusable code.
      ● Troubleshoot and debug software issues.
      ● Collaborate with the team on various development tasks.

      Qualifications:
      ● Proficiency in Python, Django/Flask, REST APIs, SQL/NoSQL databases, Git, Docker.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Python, Django/Flask, REST APIs, SQL/NoSQL databases, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 5,
    title: 'MERN Stack Developer Internship',
    description: `
      Role and Responsibilities:
      ● Assist in designing and developing full-stack web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
      ● Write clean and efficient code for both frontend and backend components.
      ● Collaborate with designers and other developers to ensure seamless integration of different layers of the application.
      ● Learn and apply best practices in MERN stack development, including RESTful API design and database management.

      Qualifications:
      ● Proficiency in MongoDB, Express.js, React.js, Node.js, JavaScript, REST APIs, Git, Docker.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'MongoDB, Express.js, React.js, Node.js, JavaScript, REST APIs, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 6,
    title: 'Spring Boot Development Internship',
    description: `
      Role and Responsibilities:
      ● Assist in designing and developing enterprise-level applications using Spring Boot.
      ● Write clean and efficient code using Java and Spring Boot framework.
      ● Collaborate with frontend developers to integrate backend services with user interfaces.
      ● Learn and apply best practices in Spring Boot development, including RESTful API design, database integration, and microservices architecture.

      Qualifications:
      ● Proficiency in Java, Spring Boot, REST APIs, SQL/NoSQL databases, Git, Maven, Docker.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Java, Spring Boot, REST APIs, SQL/NoSQL databases, Git, Maven, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 7,
    title: 'Software Testing Internship',
    description: `
      Role and Responsibilities:
      ● Assist in the design and execution of test plans and test cases.
      ● Perform manual and automated testing of web and mobile applications.
      ● Identify, document, and track software defects.
      ● Collaborate with the development team to resolve issues.
      ● Participate in Agile processes and sprints.

      Qualifications:
      ● Currently pursuing or recently completed a degree in Computer Science or related field.
      ● Familiarity with software testing methodologies and tools.
      ● Strong analytical skills and attention to detail.
      ● Basic knowledge of automated testing frameworks is a plus.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Manual Testing, Automated Testing, Selenium, JUnit, TestNG, Bug Tracking Tools, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 8,
    title: 'WIX Web Development Internship',
    description: `
      Role and Responsibilities:
      ● Develop and design websites using the Wix platform.
      ● Customize templates to meet client requirements.
      ● Ensure websites are user-friendly and visually appealing.
      ● Collaborate with the design team to enhance website functionality.

      Qualifications:
      ● Experience with Wix web development.
      ● Knowledge of HTML, CSS, JavaScript.
      ● Familiarity with SEO best practices.
      ● Strong attention to detail and creativity.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Wix, HTML, CSS, JavaScript, SEO, Graphic Design, UX/UI Design',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 9,
    title: 'MEAN Stack Developer Internship',
    description: `
      Role and Responsibilities:
      ● Develop and maintain web applications using MEAN Stack or Full Stack technologies.
      ● Write clean and efficient code.
      ● Collaborate with front-end and back-end developers to deliver high-quality software.
      ● Participate in Agile development processes.

      Qualifications:
      ● Proficiency in MongoDB, Express.js, Angular, Node.js, JavaScript, REST APIs, Git, Docker.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'MongoDB, Express.js, Angular, Node.js, JavaScript, REST APIs, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 10,
    title: 'JAVA Developer Internship',
    description: `
      Role and Responsibilities:
      ● Collaborate with our team in designing, developing, and maintaining Java-based applications.
      ● Assist in troubleshooting and resolving software issues.
      ● Participate in code reviews and engage in team discussions to improve code quality.
      ● Work on both front-end and back-end components of applications.
      ● Gain practical experience with various tools and technologies in our tech stack.
      ● Engage in Agile development processes, including sprint planning and retrospectives.

      Qualifications:
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.
      ● Strong understanding of the Java programming language and object-oriented principles.
      ● Familiarity with Java frameworks and tools such as Spring, Hibernate, or Maven is required.
      ● Basic knowledge of front-end technologies like HTML, CSS, and JavaScript is a plus.
      ● Excellent problem-solving skills, attention to detail, and ability to work independently and in a remote team environment.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Java, Spring Framework, REST APIs, SQL/NoSQL databases, Git, Maven, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 11,
    title: 'NODE.js Developer Internship',
    description: `
      Role and Responsibilities:
      ● Assist in designing and developing server-side applications using Node.js.
      ● Write clean and efficient code to build scalable and high-performance backend services.
      ● Collaborate with frontend developers to integrate backend logic with user interfaces.
      ● Learn and apply best practices in Node.js development, including asynchronous programming, API design, and database integration.

      Qualifications:
      ● Proficiency in Node.js, Express.js, JavaScript, REST APIs, SQL/NoSQL databases, Git, Docker.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Node.js, Express.js, JavaScript, REST APIs, SQL/NoSQL databases, Git, Docker',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 12,
    title: 'Android Developer Internship',
    description: `
      Role and Responsibilities:
      ● Collaborate with our team to design, develop, and maintain Android applications.
      ● Assist in troubleshooting and resolving software issues.
      ● Participate in code reviews and team discussions to improve code quality.
      ● Work on both front-end and back-end components of applications.
      ● Gain practical experience with various tools and technologies in our tech stack.
      ● Engage in Agile development processes, including sprint planning and retrospectives.

      Qualifications:
      ● Proficiency in Java/Kotlin, Android Studio, XML, REST APIs, Git, Firebase, SQLite.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.
      ● Strong problem-solving skills, attention to detail, and ability to work independently and in a remote team environment.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Java/Kotlin, Android Studio, XML, REST APIs, Git, Firebase, SQLite',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 13,
    title: 'WordPress Development Internship',
    description: `
      Role and Responsibilities:
      ● Develop and customize WordPress themes and plugins.
      ● Ensure website functionality and responsiveness.
      ● Troubleshoot and fix website issues.
      ● Work with design and content teams to enhance user experience.

      Qualifications:
      ● Proficiency in WordPress, PHP, HTML, CSS, JavaScript, MySQL, SEO, Git.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'WordPress, PHP, HTML, CSS, JavaScript, MySQL, SEO, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 14,
    title: 'Angular Development Internship',
    description: `
      Role and Responsibilities:
      ● Develop and maintain Angular-based web applications.
      ● Write reusable and testable code.
      ● Collaborate with back-end developers and UX/UI designers.
      ● Participate in code reviews and team discussions.

      Qualifications:
      ● Proficiency in Angular, TypeScript, HTML, CSS, JavaScript, REST APIs, Git, Webpack.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Angular, TypeScript, HTML, CSS, JavaScript, REST APIs, Git, Webpack',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 15,
    title: 'Data Structure Internship',
    description: `
      Role and Responsibilities:
      ● Design and implement efficient data structures.
      ● Analyze algorithms for efficiency.
      ● Collaborate with development teams to optimize code.
      ● Document and test data structure implementations.

      Qualifications:
      ● Proficiency in Data Structures, Algorithms, Java/Python/C++, Problem Solving, Git.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Data Structures, Algorithms, Java/Python/C++, Problem Solving, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 16,
    title: 'C/C++ Development Internship',
    description: `
      Role and Responsibilities:
      ● Develop and maintain applications using C/C++.
      ● Write efficient, reliable, and maintainable code.
      ● Debug and troubleshoot software issues.
      ● Work closely with other developers on project tasks.

      Qualifications:
      ● Proficiency in C/C++, Data Structures, Algorithms, Problem Solving, Git, Debugging Tools.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'C/C++, Data Structures, Algorithms, Problem Solving, Git, Debugging Tools',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 17,
    title: 'Artificial Intelligence Internship',
    description: `
      Role and Responsibilities:
      ● Assist in developing and implementing AI algorithms.
      ● Analyze data and create machine learning models.
      ● Collaborate with the team on AI research and development.
      ● Document and test AI systems.

      Qualifications:
      ● Proficiency in Machine Learning, Python, TensorFlow/PyTorch, Data Analysis, Git.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Machine Learning, Python, TensorFlow/PyTorch, Data Analysis, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 18,
    title: 'Data Science and Machine Learning Internship',
    description: `
      Role and Responsibilities:
      ● Analyze and interpret complex data sets.
      ● Develop machine learning models to solve business problems.
      ● Collaborate with the team to apply data science techniques.
      ● Document and present data findings.

      Qualifications:
      ● Proficiency in Python/R, Data Analysis, Machine Learning, SQL, Pandas, Scikit-learn, Git.
      ● Currently pursuing or recently completed a degree in Data Science, Statistics, Computer Science, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Python/R, Data Analysis, Machine Learning, SQL, Pandas, Scikit-learn, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 19,
    title: 'Big Data Internship',
    description: `
      Role and Responsibilities:
      ● Assist in collecting, processing, and analyzing large datasets.
      ● Develop and maintain data pipelines.
      ● Work with various Big Data technologies such as Hadoop, Spark, and Kafka.
      ● Collaborate with data engineers and analysts.

      Qualifications:
      ● Proficiency in Hadoop, Spark, Python/Java, SQL, Data Analysis, ETL, Git.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Hadoop, Spark, Python/Java, SQL, Data Analysis, ETL, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 20,
    title: 'Cloud Computing Internship',
    description: `
      Role and Responsibilities:
      ● Assist in deploying and managing cloud services.
      ● Monitor and optimize cloud infrastructure.
      ● Collaborate with the team on cloud-based projects.
      ● Learn about different cloud platforms and services.

      Qualifications:
      ● Proficiency in AWS/Azure/GCP, Cloud Architecture, Docker, Kubernetes, DevOps, Git.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'AWS/Azure/GCP, Cloud Architecture, Docker, Kubernetes, DevOps, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 21,
    title: 'Software Development Internship',
    description: `
      Role and Responsibilities:
      ● Assist in the design, development, and testing of software applications.
      ● Write clean and efficient code.
      ● Collaborate with the team to meet project requirements and deadlines.
      ● Learn and apply best practices in software development.

      Qualifications:
      ● Proficiency in Java/Python/C++, Software Development, SQL/NoSQL, Git, Agile Methodologies.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Java/Python/C++, Software Development, SQL/NoSQL, Git, Agile Methodologies',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 22,
    title: 'Technical Program Management Internship',
    description: `
      Role and Responsibilities:
      ● Assist in project planning, scheduling, and tracking.
      ● Coordinate with cross-functional teams to ensure project milestones are met.
      ● Prepare project documentation and reports.
      ● Learn about project management methodologies and tools.

      Qualifications:
      ● Proficiency in Project Management, Agile Methodologies, Communication, Jira, Confluence.
      ● Currently pursuing or recently completed a degree in Computer Science, Business Administration, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Project Management, Agile Methodologies, Communication, Jira, Confluence',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 23,
    title: 'DevOps Engineering Internship',
    description: `
      Role and Responsibilities:
      ● Assist in building and maintaining CI/CD pipelines.
      ● Automate infrastructure provisioning and configuration.
      ● Monitor and troubleshoot system issues.
      ● Learn about DevOps tools and practices.

      Qualifications:
      ● Familiarity with Linux/Unix environments.
      ● Knowledge of scripting languages such as Bash, Python, or PowerShell.
      ● Understanding of CI/CD concepts and tools.
      ● Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Linux, Docker, Kubernetes, Jenkins, AWS/Azure/GCP, Scripting, Git',
    email: 'hr@entrepreneurshipnetwork.net'
  },
  {
    id: 24,
    title: 'Data Analysis Internship',
    description: `
      Role and Responsibilities:
      ● Assist in collecting, cleaning, and analyzing data sets.
      ● Develop and implement data models and algorithms.
      ● Create visualizations and reports to communicate findings.
      ● Collaborate with cross-functional teams to support data-driven decision-making.

      Qualifications:
      ● Proficiency in programming languages such as Python or R.
      ● Familiarity with data analysis and visualization tools such as Pandas, NumPy, Matplotlib, or Tableau.
      ● Strong analytical and problem-solving skills.
      ● Currently pursuing or recently completed a degree in Data Science, Statistics, Computer Science, or related field.

      What We Offer:
      ● Mentorship and guidance from experienced professionals.
      ● Opportunity to work on real-world projects and gain hands-on experience.
      ● Flexible working hours to suit your schedule.
      ● Potential for full-time employment upon successful completion of the internship.
      ● A collaborative and inclusive remote work environment.
    `,
    skills: 'Python, R, Pandas, NumPy, Matplotlib, Tableau, Data Analysis, Data Visualization',
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
