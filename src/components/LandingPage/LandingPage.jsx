import React from 'react';
import './LandingPage.scss';
import Home from './Home/Home';
import WorkDone from './WorkDone/WorkDone';
import Skills from './Skills/Skills';
import About from './About/About';
import Footer from './Footer/Footer';

export default function LandingPage() {
  return (
    <div className="landing comp-view" style={{marginTop: '4rem'}}>
      <Home />
      <WorkDone />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}
