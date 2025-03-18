import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import profile from '../assets/profile.jpg';

const About = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    // Store the current ref values in variables
    const sectionElement = sectionRef.current;
    const skillsElement = skillsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionElement) observer.observe(sectionElement);
    if (skillsElement) observer.observe(skillsElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
      if (skillsElement) observer.unobserve(skillsElement);
    };
  }, []);

  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'HTML & CSS', level: 92 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'GraphQL', level: 75 },
  ];

  return (
    <section className="about">
      <div className="about-content" ref={sectionRef}>
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-image">
            <div className="image-container">
              <img src={profile} alt="Raphael ofuoku's display" />
              <div className="image-outline"></div>
            </div>
          </div>
          <div className="about-text">
            <p>Hello! I'm <span className="highlight">Raphael</span>, a frontend engineer passionate about creating intuitive and performant web applications.</p>
            <p>With over 5 years of experience, I've worked on a wide range of projects from small business websites to large-scale enterprise applications. My focus is on writing clean, maintainable code that delivers exceptional user experiences.</p>
            <p>Outside of coding, I enjoy football. This balance helps me approach technical challenges with creativity and fresh perspectives.</p>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2023 - Present</div>
                <div className="timeline-content">
                  <h4>Senior Frontend Engineer</h4>
                  <p>Company Name</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2020 - 2023</div>
                <div className="timeline-content">
                  <h4>Frontend Developer</h4>
                  <p>Previous Company</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2018 - 2020</div>
                <div className="timeline-content">
                  <h4>Junior Web Developer</h4>
                  <p>First Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section" ref={skillsRef}>
        <h3>Technical Skills</h3>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar-container">
                <div
                  className="skill-bar"
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
              <div className="skill-percentage">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;