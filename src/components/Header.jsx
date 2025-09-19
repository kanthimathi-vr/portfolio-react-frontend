// src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-10 bg-violet-200 p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-violet-600">
        Kanthimathi<span className="text-violet-600">.</span>
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className={({ isActive }) => `text-gray-800 font-medium relative hover:text-purple-600 transition-colors duration-300 ${isActive ? 'text-purple-600 after:w-full' : ''} after:content-[''] after:block after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 after:absolute after:-bottom-1.5 after:left-0 after:w-0 hover:after:w-full`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `text-gray-800 font-medium relative hover:text-purple-600 transition-colors duration-300 ${isActive ? 'text-purple-600 after:w-full' : ''} after:content-[''] after:block after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 after:absolute after:-bottom-1.5 after:left-0 after:w-0 hover:after:w-full`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => `text-gray-800 font-medium relative hover:text-purple-600 transition-colors duration-300 ${isActive ? 'text-purple-600 after:w-full' : ''} after:content-[''] after:block after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 after:absolute after:-bottom-1.5 after:left-0 after:w-0 hover:after:w-full`}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `text-gray-800 font-medium relative hover:text-purple-600 transition-colors duration-300 ${isActive ? 'text-purple-600 after:w-full' : ''} after:content-[''] after:block after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 after:absolute after:-bottom-1.5 after:left-0 after:w-0 hover:after:w-full`}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;