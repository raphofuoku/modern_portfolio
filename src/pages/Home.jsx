import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Store the current ref values
    const elements = [
      textRef.current,
      titleRef.current,
      paragraphRef.current,
      ctaRef.current
    ].filter(Boolean);

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    // Apply initial animations
    elements.forEach(el => {
      el.classList.add('animate');
      observer.observe(el);
    });

    // Scroll indicator visibility control
    const handleScroll = () => {
      if (scrollIndicatorRef.current) {
        // Hide scroll indicator when user has scrolled down
        if (window.scrollY > 100) {
          scrollIndicatorRef.current.classList.add('hidden');
        } else {
          scrollIndicatorRef.current.classList.remove('hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      elements.forEach(el => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <h3 ref={textRef} className="fade-up">Hi, my name is</h3>
        <h1 ref={titleRef} className="fade-up delay-1">
          <span className="highlight">Raphael</span>
          <span className="title-suffix">Frontend Engineer</span>
        </h1>
        <p ref={paragraphRef} className="fade-up delay-2">
          I build exceptional digital experiences with clean, efficient code.
          Specializing in modern JavaScript frameworks and responsive design.
        </p>
        <div ref={ctaRef} className="cta-buttons fade-up delay-3">
          <Link to="/projects" className="btn primary">View My Work</Link>
          <Link to="/contact" className="btn secondary">Get In Touch</Link>
        </div>
      </div>

      <div className="home-decoration">
        <div className="code-block">
          <div className="code-line"><span className="keyword">const</span> <span className="variable">developer</span> = {`{`}</div>
          <div className="code-line indent"><span className="property">name</span>: <span className="string">'Raphael Ofuoku'</span>,</div>
          <div className="code-line indent"><span className="property">role</span>: <span className="string">'Frontend Engineer'</span>,</div>
          <div className="code-line indent"><span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'JavaScript'</span>, <span className="string">'CSS'</span>],</div>
          <div className="code-line indent"><span className="property">passion</span>: <span className="string">'Creating elegant solutions'</span></div>
          <div className="code-line">{`};`}</div>
        </div>
      </div>

      <div ref={scrollIndicatorRef} className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
};

export default Home;