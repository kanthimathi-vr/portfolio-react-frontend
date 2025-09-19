// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">👩‍💻 About Me</h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Hi, I'm <strong className="text-purple-600">Kanthimathi</strong> — a budding <strong className="text-purple-600">Full Stack Python Developer</strong> with a passion for building web applications that are both functional and user-friendly. Though I’m just starting out professionally, I’ve already built several projects that showcase my ability to develop full-stack applications from the ground up.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          I specialize in Python-based web development, using technologies like <strong className="text-purple-600">Python, Django, Flask</strong> on the backend, and <strong className="text-purple-600">HTML, CSS, JavaScript</strong> on the frontend. I'm also familiar with working with <strong className="text-purple-600">SQLite, PostgreSQL</strong>, and version control systems like <strong className="text-purple-600">Git</strong>.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          I'm constantly learning and improving my skills by building projects, contributing to open-source, and staying up to date with industry trends. My goal is to write clean, maintainable code and create solutions that make a difference.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          I’m excited to begin my career in tech and eager to join a team where I can contribute, learn from experienced developers, and grow as a full-stack professional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">👩‍💻 Frontend</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>HTML5</li>
              <li>CSS3 / Flexbox / Grid</li>
              <li>JavaScript (ES6+)</li>
              <li>Bootstrap / Tailwind CSS</li>
              <li>Basic React (learning in progress)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">🧠 Backend</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Python</li>
              <li>Django</li>
              <li>Flask</li>
              <li>RESTful API development</li>
              <li>Authentication (JWT, sessions)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">🗃️ Database & ORM</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>SQLite</li>
              <li>PostgreSQL</li>
              <li>Django ORM</li>
              <li>SQL basics</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">🛠️ Tools & Platforms</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Heroku / Render (for deployment)</li>
              <li>Basic Linux commands</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">📚 Currently Learning</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>React.js</li>
              <li>Docker basics</li>
              <li>Unit testing (PyTest, Django test)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;