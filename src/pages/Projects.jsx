// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    title: 'Organic Products Website',
    description: 'An e-commerce website for organic products, showcasing a user-friendly product list and shopping cart.',
    techTags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/kanthimathi-vr/project1/tree/main/projects/prototype1',
    liveUrl: 'https://kanthimathi-vr.github.io/project1/projects/prototype1/Homepage.html'
  },
  {
    title: 'Baby Products Website',
    description: 'An interactive e-commerce platform for baby products, designed to be user-friendly and intuitive.',
    techTags: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/kanthimathi-vr/project1/tree/main/projects/prototype2',
    liveUrl: 'https://kanthimathi-vr.github.io/project1/projects/prototype2/homepagemain.html'
  },
  {
    title: 'Cleaning Services Website',
    description: 'A website for cleaning services, providing an easy-to-use platform for booking and information.',
    techTags: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/kanthimathi-vr/project1/tree/main/projects/prototype3',
    liveUrl: 'https://kanthimathi-vr.github.io/project1/projects/prototype3/homepage.html'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">🚀 My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techTags={project.techTags}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;