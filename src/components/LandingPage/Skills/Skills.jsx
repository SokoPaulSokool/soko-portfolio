import React, { Component } from 'react';
import './Skills.scss';
import blueLif from '../../../assets/SVG/lifBlue.svg';
import mySkills from '../../../assets/data/skills.json';


export class CollapsePage extends Component {
  state = {
    collapseID: 'Languages',
    data: [1, 2, 3, 4, 5, 6, 7],
    skills: mySkills
  };

  toggleCollapse = collapseID => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  colapseCheck = (skill,whenTrue,whenFalse) => {
    return this.state.collapseID === skill.title ? whenTrue : whenFalse;
  };

  render() {
    return (
      <div id="accordion">
        {Object.keys(this.state.skills).map((dat, i) => {
          const skill = this.state.skills[dat];
          return (
            <div className={"card "+this.colapseCheck(skill,'card-border','')} key={skill.title}>
              <div
                className={this.state.collapseID === skill.title ? 'card-header card-header--highlight' : 'card-header card-header--no-highlight'}
                id="headingOne"
                onClick={() => this.toggleCollapse(skill.title)}
              >
                <h5 className="mb-0">
                  <span
                    className=" "
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {skill.title}
                  </span>
                 
                  
                </h5>
                 <i className="header-icon fas fa-arrow-alt-circle-down"></i>
              </div>

              <div
                id="collapseOne"
                className={'collapse ' + this.colapseCheck(skill,'show','')}
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <ul className="skill-drops">
                    {skill.details.map((detail, i) => {
                      return (
                        <li key={i + 'ss'}>
                          <h6 className="skill-header">{detail.name}</h6>
                          <div className="rating">
                            <img className="" src={blueLif} alt="" />
                            <p className="rating-percentage">{detail.rate}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <p>{skill.summary}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [1, 2, 3, 4, 5, 6, 7] };
  }

  render() {
    return (
      <div id="skills" className="container-fluid comp-view skills">
        <div className="row text-center ">
          <div className="col-12 col-md-5 ">
            <h2>Skills</h2>
            <div className="my-skills">
              <CollapsePage />
            </div>
          </div>
          <div className="col-12 col-md-7  p-3">
            <h2>General Work Process</h2>
            <div className="process ">
              <img alt="" src={blueLif} className="big-lif" />
              <div className="details">
                <ul>
                  <li>
                    <div className="circle"></div>
                    <p>
                     Analysing and designing mockups for creating appropriate UI components and architecting the styles codebase
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
                    Following coding style if required
                    </p>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <p>
                      Collaborating with UI/UX designers and backend developers
                    </p>
                  </li>
                  <li>
                    <div className="circle"></div>
                    <p>
                     Consistently maintaining communication with all stakeholders
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
