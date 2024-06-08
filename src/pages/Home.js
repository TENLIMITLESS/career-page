import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const miniProjects = [
  { id: 1, title: 'Idea engine', description: 'Idea Engine is a user-centric platform aimed at guiding individuals through the process of crafting comprehensive business plans. Upon logging in, users are greeted with a dashboard where they can initiate or continue work on their business plan projects. The platform employs a series of interactive questionnaires, strategically designed to extract key insights and information necessary for a robust business plan. Users navigate through sections covering market analysis, product/service descriptions, marketing strategies, financial projections, and more. Read More......', link: '/mini-project-1' },
  { id: 2, title: 'Development Engine', description: 'TEN AI Labs is an advanced platform offering a comprehensive suite of artificial intelligence (AI) tools and services. Whether you are a researcher, developer, or business professional, TEN AI Labs provides cutting-edge solutions to tackle a wide range of tasks and challenges. From natural language processing and computer vision to predictive analytics and machine learning, our platform harnesses the power of AI to empower users across industries. TEN AI Labs provides the resources, tools, and support you need to succeed in your endeavors. Join us on the journey to unlock the full potential of AI and shape the future of technology and society Read More.......', link: '/mini-project-2' },
  { id: 3, title: 'Hiring Engine', description: ' TEN Intern Connect serves as a bridge between aspiring students and companies seeking talented interns. This innovative platform offers a seamless experience for both students and companies, facilitating the process of internship and job placements. With dedicated login portals for students and admins, TEN Intern Connect streamlines the recruitment process. The platform fosters collaboration and connection between students and companies, ultimately driving mutual success and growth. Join us on TEN Intern Connect and embark on a journey towards fulfilling internship experiences and rewarding career opportunities. Read More.....', link: '/mini-project-3' },
  { id: 4, title: 'Marketting Engine', description: 'Marketing Engine empowers businesses of all sizes to achieve their marketing goals and drive sustainable growth. With a comprehensive suite of tools, advanced analytics, and actionable insights, Marketing Engine enables you to create compelling campaigns, engage your audience, and build lasting relationships with your customers. Take your marketing to the next level with Marketing Engine and unlock the full potential of your business. Read More......', link: '/mini-project-4' },
  { id: 5, title: 'Funding Engine', description: 'Funding Engine is more than just a platform it is a catalyst for entrepreneurial success. By providing entrepreneurs with the tools, resources, and connections they need to secure funding, Funding Engine empowers them to turn their dreams into reality. Whether you are a seasoned entrepreneur looking to scale your business or a budding startup in need of seed funding, Funding Engine is here to support you every step of the way. Join us and take your business to new heights with Funding Engine. Read More....', link: '/mini-project-5' },
 
];

const Home = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <h1 className="text-4xl font-bold mb-10">God Engine</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {miniProjects.map(project => (
          <AnimatedCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const AnimatedCard = ({ project }) => {
  const props = useSpring({
    to: { opacity: 1, transform: 'scale(1)' },
    from: { opacity: 0, transform: 'scale(0.9)' },
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <Link to={project.link} className="transform transition duration-500 hover:scale-105">
      <animated.div style={props} className="bg-white shadow-lg rounded-lg p-5 hover:bg-blue-50">
        <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
        <p className="text-gray-700">{project.description}</p>
      </animated.div>
    </Link>
  );
};

export default Home;
