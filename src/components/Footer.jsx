// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white text-center py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="mb-4">© 2025 Kanthimathi. All rights reserved.</p>
        <div className="flex justify-center gap-4 flex-wrap mb-4">
          <Link to="/" className="hover:text-purple-200 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-purple-200 transition-colors">About</Link>
          <Link to="/projects" className="hover:text-purple-200 transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-purple-200 transition-colors">Contact</Link>
        </div>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://github.com/kanthimathi-vr" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition-colors" aria-label="GitHub profile">🐙</a>
          <a href="mailto:mathi.v.r.1990@gmail.com" className="hover:text-purple-200 transition-colors" aria-label="Email link">📧</a>
          <a href="https://linkedin.com/in/kanthimathi" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition-colors" aria-label="LinkedIn profile">🔗</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;