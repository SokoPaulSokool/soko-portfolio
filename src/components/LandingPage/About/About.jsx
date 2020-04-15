import React, { Component } from "react";
import "./About.scss";
import profileImage from "../../../assets/samples/profileImage.jpeg";
import paulResume from "../../../assets/pdf/Paul-Soko.pdf";

export default class About extends Component {
  render() {
    return (
      <div className="container comp-view about">
        <div className="row text-center">
          <h2 className="col-12">About</h2>
        </div>

        <div className="row">
          <div className="col-12 col-md-5 data">
            <div className="bio">
              <div className="bio-circle__rotate"></div>
              <div className="bio-data">
                <div className="bio-circle">
                  <img src={profileImage} alt="" />
                </div>
                <div className="bio-text">
                  <h2>Soko Paul</h2>
                  <p>
                    I believe everything can be done through passion, commitment
                    and hard work
                  </p>
                </div>
              </div>
            </div>
            <a  className="btn  resume" href={paulResume} role="button" target="_blank" rel="noopener noreferrer">Resume</a>
       
          </div>
          {/* <div className="col-12 col-md-5">
            <div className="bio">
              <div className="bio-circle">
                <img src={profileImage} alt="" />
              </div>
              <div className="bio-text">
                <h3>Soko Paul</h3>
                <p>
                  I believe everything can be done through passion, commitment
                  and hard work
                </p>
              </div>
            </div>
          </div> */}
          <div className="col-12 col-md-7">
            <ul className="principles text-center container">
              <li className="col-md-6 col-12">
                <h5>Fast learner</h5>
                <p>
                  I find it easy to learn new technologies. I have been in
                  situations where I had to learn new technologies and
                  frameworks. This trained me to learn how to look for resources
                  and catch up as fast as possible.
                </p>
              </li>
              <li className="col-md-6 col-12">
                <h5>Great Team Player</h5>
                <p>
                  I love working in teams. Teams make work interesting, smooth
                  and lead to productive quality results. When I work in a team,
                  I get to learn and unlearn from my teammates. Teams make me a
                  better developer.
                </p>
              </li>
              <li className="col-md-6 col-12">
                <h5>Passionate About technology</h5>
                <p>
                  I have so much passion about technology. My passion has made
                  me curious about new technologies. This has made me research
                  and update myself and learn a lot. Every day I always ask
                  myself, “what should I learn today?” Am always learning.
                </p>
              </li>
            </ul>
            <div className="lif-red">{/* <img src={redLif} alt="" /> */}</div>
            <h5>Others</h5>
            <ol>
              <li>
                <p>
                  I love art and graphics. It keeps my creative mind active.
                </p>
              </li>
              <li>
                <p>
                  Music make my day flow well. Some times it keeps me focused as
                  I work.
                </p>
              </li>
              <li>
                <p>
                  Road trips and visiting new places, looking at nature keep me
                  fresh.
                </p>
              </li>
              <li>
                <p>I love watching movies especially animations.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
