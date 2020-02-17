import React, { Component } from 'react';
// import { useHistory } from "react-router-dom";
import './WorkDone.scss';

import { getProjects } from "../../../helpers/projectDetailsHelper";

export function WorkItem({ data, visitSiteClick, viewDetails }) {
  return (
    <div className="work-item ">
      <img src={data.profileImage} alt="" />
      <div className="buttons">
        <div className="cover"></div>
        
        <button
          onClick={() => {
            visitSiteClick(data.url);
          }}
          className="mybtn-site mybtn"
        >
          Visit Site
        </button>
        <button onClick={() => {viewDetails(data)  }} className="mybtn-details mybtn">
          View Details
        </button>
        <h5 className="project-name">{data.projectName}</h5>
      </div>
    </div>
  );
}

export default class WorkDone extends Component {
  constructor(props) {
    super(props);
    console.log(getProjects());
    this.state = {
      work: getProjects()
    };
  }

  handleWorkClick = (data) => {
    localStorage.setItem("selectedProject",JSON.stringify(data));
    this.props.history.push('/details');
  };

  visitSiteClick = data => {
    console.log(data);
    window.open(data, '_blank');
  };

  render() {
    return (
      <div id="workDone" className="work-done container">
        <div className="row text-center mb-5">
          <h2 className="col-12">Work Done</h2>
        </div>
        <div className="row items">
          {this.state.work.map(k => {
            return (
              <div
                key={k + 's' + Math.random()}
                // onClick={this.handleWorkClick}
                className="col-md-4 col-12"
              >
                <WorkItem
                  data={k}
                  viewDetails={this.handleWorkClick}
                  visitSiteClick={this.visitSiteClick}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
