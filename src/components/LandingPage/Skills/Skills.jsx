import React, { Component } from 'react';
import './Skills.scss';
import redLif from '../../../assets/SVG/lifRedStk.svg';
import redLifFull from '../../../assets/SVG/lifRed.svg';
import blueLif from '../../../assets/SVG/lifBlue.svg';
import stem from '../../../assets/SVG/stem.svg';

export function ToolTip({ data }) {
  return (
    <div className="my-tooltip">
      <h6>Languages</h6>
      <ul>
        {data.map(d => {
          return (
            <li key={d + 'ss'}>
              <p>Javascript</p>
              <div className="rating">
                <img src={redLifFull} alt="" />
                <p>30%</p>
              </div>
            </li>
          );
        })}
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        vitae, earum atque vero nisi at qui necessitatibus. Voluptates
        repudiandae inventore consequuntur necessitatibus earum eveniet
        voluptatibus placeat. Optio voluptatibus esse tempore.
      </p>
    </div>
  );
}

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [1, 2, 3, 4, 5, 6, 7] };
  }

  render() {
    return (
      <div className="container-fluid comp-view skills">
        <div className="row text-center ">
          <div className="col-12 col-md-5 ">
            <h2>Skills</h2>
            <div className="tree">
              <div className="lif">
                <ul>
                  <li className="skill">
                    <ToolTip data={this.state.data} />
                    <p>UI Design Tools cc</p>
                  </li>
                  <li className="skill">
                    <ToolTip data={this.state.data} />
                    <p>UI Design Tools</p>
                  </li>
                </ul>
                <ul>
                  <li className="skill">
                    <ToolTip data={this.state.data} />
                    <p>UI Design Tools</p>
                  </li>
                  <li className="skill">
                    <ToolTip data={this.state.data} />
                    <p>UI Design Tools</p>
                  </li>
                </ul>
                <ul>
                  <li className="skill">
                    <ToolTip data={this.state.data} />
                    <p>UI Design Tools</p>
                  </li>
                  <li className="skill">
                    <ToolTip data={this.state.data} />
                    <p>UI Design Tools</p>
                  </li>
                </ul>
                <img alt="" className="" src={redLif} />
              </div>
              <img alt="" className="stem" src={stem} />
            </div>
          </div>
          <div className="col-12 col-md-7  p-3">
            <h2>Process</h2>
            <div className="process ">
              <img alt="" src={blueLif} className="big-lif" />
              <div className="details">
                <ul>
                  <li>
                    <div className="circle"></div>
                    <p>
                      Testing code in multiple browsers to ensure cross browser
                      compatibility
                    </p>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <p>
                      Testing code in multiple browsers to ensure cross browser
                      compatibility
                    </p>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <p>
                      Testing code in multiple browsers to ensure cross browser
                      compatibility
                    </p>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <p>
                      Testing code in multiple browsers to ensure cross browser
                      compatibility
                    </p>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <p>
                      Testing code in multiple browsers to ensure cross browser
                      compatibility
                    </p>
                  </li>
                </ul>
                <p className="summary">
                  Testing code in multiple browsers to ensure cross browser
                  compatibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
