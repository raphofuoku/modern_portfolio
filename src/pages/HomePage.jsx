import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function HomePage() {
  return (
    <div>
        <Home />
        <About />
        <Projects />
        <Contact />
    </div>
  );
};

export default HomePage;