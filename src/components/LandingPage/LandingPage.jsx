import React, { Component } from 'react';
import './LandingPage.scss';
import Home from "./Home/Home";
import WorkDone from "./WorkDone/WorkDone";
import Skills from "./Skills/Skills";
import About from "./About/About";

export default class LandingPage extends Component {

  constructor(props) {
    super(props)
    console.log(this);
  }
  
  render() {
    return (
      <div className="landing comp-view">
        <Home/>
        <WorkDone history={this.props.history}/>
        <Skills/>
        <About/>
      </div>
    );
  }
}
