import React, { Component } from 'react';
import './LandingPage.scss';
import Home from './Home/Home';
import WorkDone from './WorkDone/WorkDone';
import Skills from './Skills/Skills';
import About from './About/About';

export default class LandingPage extends Component {

  render() {
    const navStyle = { marginTop: '4rem' };
    return (
      <div className="landing comp-view" style={navStyle}>
        <Home />
        <WorkDone history={this.props.history} />
        <About />
        <Skills />
      </div>
    );
  }
}
