import React, { Component } from 'react';
import './About.scss';
import redLif from '../../../assets/SVG/lifRed.svg';

export default class About extends Component {
  render() {
    return (
      <div className="container comp-view about">
        <div className="row text-center">
          <h2 className="col-12">About</h2>
        </div>

        <div className="row">
          <div className="col-12 col-md-5">
            <div className="bio">
              <div className="bio-circle"></div>
              <div className="bio-text">
                <h3>Soko Paul</h3>
                <p>
                  I believe everything can be done through passion, commitment
                  and hard work
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <ul className="principles text-center">
              <li>
                <h5>msmm</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <h5>msmm</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <h5>msmm</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
            <div className="lif-red" >
              <img src={redLif} alt="" />
            </div>
            <h2>Ramdom Facts</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita quod dolorum eaque officiis tempore fuga a voluptates
                pariatur earum aliquid ex debitis eum non porro dolore culpa
                soluta, nostrum magni.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                culpa ad aspernatur, obcaecati labore explicabo voluptate illo
                dolorem? Natus et laboriosam modi tempora? Maiores eaque
                possimus inventore et commodi eveniet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, quae, facere animi vero facilis earum id, error sunt
                rerum doloribus nisi minus aperiam accusantium officia! Incidunt
                assumenda cum mollitia distinctio.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, quae, facere animi vero facilis earum id, error sunt
                rerum doloribus nisi minus aperiam accusantium officia! Incidunt
                assumenda cum mollitia distinctio.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
