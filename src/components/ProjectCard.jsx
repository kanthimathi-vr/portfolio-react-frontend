// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, techTags, githubUrl, liveUrl }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-1">
      <h3 className="text-2xl font-semibold text-purple-600 mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techTags.map((tag, index) => (
          <span key={index} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          GitHub
        </a>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;