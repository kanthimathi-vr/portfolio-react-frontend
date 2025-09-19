// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const words = ["Full Stack Developer", "Python Enthusiast", "Problem Solver"];

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex <= currentWord.length) {
        setDisplayText(currentWord.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex >= 0) {
        setDisplayText(currentWord.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(!isDeleting);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section id="home" className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-white px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2">
          Hi, I'm <span className="text-purple-600">Kanthimathi</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-6 min-h-[40px]">
          {displayText}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          I build user-friendly, efficient, and scalable web applications from front to back. Let’s make the web better together!
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/projects" className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-purple-700">
            View Projects
          </Link>
          <a href="/Kanthimathi.pdf" download className="bg-transparent text-purple-600 border-2 border-purple-600 font-semibold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-purple-600 hover:text-white">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;