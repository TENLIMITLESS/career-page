import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <h1 className="text-4xl font-bold mb-10">God Engine</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/mini-project-1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Mini Project 1
        </Link>
        <Link to="/mini-project-2" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Mini Project 2
        </Link>
        <Link to="/mini-project-3" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Mini Project 3
        </Link>
        <Link to="/mini-project-4" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Mini Project 4
        </Link>
        <Link to="/mini-project-5" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Mini Project 5
        </Link>
        <Link to="/mini-project-6" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Mini Project 6
        </Link>
      </div>
    </div>
  );
}

export default Home;
