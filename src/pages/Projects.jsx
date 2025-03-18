import React, { useState, useEffect, useRef } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    // Store the current ref value in a variable
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Purzle',
      description: 'A full-featured online store with cart functionality and payment integration.',
      image: '/purzle.png',
      category: 'react',
      tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
      githubLink: '#',
      liveLink: 'https://www.purzle.com/'
    },
    {
        id: 2,
        title: 'Dashboard Analytics',
        description: 'Interactive dashboard with real-time data visualization and filtering options.',
        image: '/medlite.png',
        category: 'javascript',
        tags: ['JavaScript', 'D3.js', 'Firebase', 'CSS Grid'],
        githubLink: 'https://github.com/',
        liveLink: 'https://project-demo.com/'
      },
      {
        id: 3,
        title: 'MedLite',
        description: 'Mobile-first social platform with real-time messaging and content sharing.',
        image: '/medlite.png',
        category: 'react',
        tags: ['React Native', 'GraphQL', 'Firebase', 'WebSockets'],
        githubLink: 'https://github.com/',
        liveLink: 'https://project-demo.com/'
      },
      {
        id: 4,
        title: 'Portfolio Template',
        description: 'Customizable portfolio template for developers and designers.',
        image: '/purzle.png',
        category: 'html',
        tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
        githubLink: 'https://github.com/',
        liveLink: 'https://project-demo.com/'
      },
      {
        id: 5,
        title: 'Weather Application',
        description: 'Weather forecasting app with location-based data and interactive maps.',
        image: '/purzle.png',
        category: 'api',
        tags: ['React', 'OpenWeather API', 'Leaflet', 'CSS3'],
        githubLink: 'https://github.com/',
        liveLink: 'https://project-demo.com/'
      },
      {
        id: 6,
        title: 'Task Management System',
        description: 'Collaborative task management tool with drag-and-drop functionality.',
        image: '/medlite.png',
        category: 'react',
        tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
        githubLink: 'https://github.com/',
        liveLink: 'https://project-demo.com/'
      }
    ];

    const filteredProjects = filter === 'all'
      ? projects
      : projects.filter(project => project.category === filter);

    return (
      <section className="projects" ref={sectionRef}>
        <h2 className="section-title">My Projects</h2>

        <div className="project-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
            onClick={() => setFilter('react')}
          >
            React
          </button>
          <button
            className={`filter-btn ${filter === 'javascript' ? 'active' : ''}`}
            onClick={() => setFilter('javascript')}
          >
            JavaScript
          </button>
          <button
            className={`filter-btn ${filter === 'html' ? 'active' : ''}`}
            onClick={() => setFilter('html')}
          >
            HTML/CSS
          </button>
          <button
            className={`filter-btn ${filter === 'api' ? 'active' : ''}`}
            onClick={() => setFilter('api')}
          >
            API
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              className="project-card"
              key={project.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Projects;