import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Home.scss';
import profileImage from '../../../assets/samples/profileImage.jpeg'

export default class Home extends Component {
  render() {
    return (
      <div className="container hero comp-view">
        <div className="circle-top"></div>
        <div className="row">
          <div className="col-md-6 col-12 headers">
            <div className="headers-details">
              <h4>Full Stack</h4>
              <h1>Software Engineer</h1>
              <p>
                Who enjoys every aspect of <span>designing and building</span>{' '}
                websites & mobile apps from start to finish to provide{' '}
                <span> a good user experience</span>
              </p>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link
                    activeClass="active nav-link"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div>Skills</div>
                    <div className="indicators"></div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active nav-link"
                    to="workDone"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div>Portfolio</div>
                    <div className="indicators"></div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active nav-link"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <div>About</div>
                    <div className="indicators"></div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-12 side">
            <div className="side-circle">
              <div className="side-circle__rotate"></div>
              <div className="side-circle__profile">
                <div className="bio">
                  <div className="bio-circle">
                    <img src={profileImage} alt=""/>
                  </div>
                  <div className="bio-text">
                    <h3>Soko Paul</h3>
                    <p>
                      I believe everything can be done through passion,
                      commitment and hard work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
