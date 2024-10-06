import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Music } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 p-4">
      <h1 className="text-2xl font-bold mb-6">Music Discovery</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center text-gray-300 hover:text-white">
              <Home className="mr-2" /> Discover
            </Link>
          </li>
          <li>
            <Link to="/search" className="flex items-center text-gray-300 hover:text-white">
              <Search className="mr-2" /> Search
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;