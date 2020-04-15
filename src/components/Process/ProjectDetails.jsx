import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import { animateScroll as scroll } from 'react-scroll';
import './ProjectDetails.scss';
import { getProjectDetails } from '../../helpers/projectDetailsHelper';

export function ProcessCarouselDetails({
  position,
  anim,
  process,
  processPosition
}) {
  // console.log(process);
  return (
    <div className={anim + ' carousel-process-' + position}>
      <div className="carousel-process__img">
        <img src={process?.image} alt="" />
      </div>
      <div className="carousel-process__details container">
        <div className="">
          <h5>Step {processPosition + 1}</h5>
          <h6>{process?.step}</h6>
          <p>{process?.details}</p>
        </div>
        <div className="challenges">
          <h4 className="text-center">Challenges and how I approached them.</h4>
          <div className="">
            <h6>Challenges</h6>
            <p>{process?.challenge}</p>
          </div>
          <div className="">
            <h6>Solutions and lessons learned</h6>
            <p>{process?.solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProcessCarousel({
  leftCLick,
  rightCLick,
  anim,
  process,
  hideArrowLeft,
  hideArrowRight,
  processPosition
}) {
  return (
    <div className="carousel">
      <div className="cover"></div>
      <div className="carousel-arrows">
        <div
          className={'carousel-arrows__left ' + hideArrowLeft}
          onClick={() => {
            leftCLick();
          }}
        >
          <MDBIcon icon="chevron-left" />
        </div>
        <div
          className={'carousel-arrows__right ' + hideArrowRight}
          onClick={() => {
            rightCLick();
          }}
        >
          <MDBIcon icon="chevron-right" />
        </div>
      </div>
      <div className="carousel-process">
        <ProcessCarouselDetails
          process={process}
          position="1"
          anim={anim.one}
          processPosition={processPosition}
        />
        <ProcessCarouselDetails
          process={process}
          position="2"
          anim={anim.two}
          processPosition={processPosition}
        />
      </div>
    </div>
  );
}

export default class ProjectDetails extends Component {
  componentDidMount() {
    const saved = localStorage.getItem('selectedProject');
    let selectedProject = {};
    if (saved) {
      selectedProject = JSON.parse(saved);
      const projectDetails = getProjectDetails(selectedProject.id);
      scroll.scrollToTop();
      this.setState({
        selectedProject,
        projectDetails,
        processPosition: 0,
        hideArrowLeft: '',
        hideArrowRight: 'hide-arrow'
      });
    }
    //  console.log(selectedProject);
  }

  state = { anim: { one: 'one', two: 'two' } };
  leftCLick = e => {
    let processLength = this.state.projectDetails.process.length;
    let { processPosition } = this.state;
    let hideArrowLeft = '';
    let hideArrowRight = '';
    if (processPosition >= 0 && processPosition < processLength - 1) {
      processPosition++;
      hideArrowRight = '';
      hideArrowLeft = '';
    }
    if (processPosition >= processLength - 1) {
      processPosition = processLength - 1;

      hideArrowLeft = 'hide-arrow';
    }
    //   if(processPosition < 0){
    //   processPosition = 0
    //   hideArrowRight = "hide-arrow"

    // }else{
    //   //  hideArrowLeft = ""
    // }
    console.log(processPosition);

    //  hideArrowLeft:"hide-arrow",hideArrowRight:""
    this.setState({
      anim: { ...this.state.anim, one: 'left-one', two: 'left-two' },
      processPosition,
      hideArrowLeft,
      hideArrowRight
    });
    setTimeout(() => {
      this.setState({ anim: { ...this.state.anim, one: '', two: '' } });
    }, 1000);
  };
  rightCLick = e => {
    let processLength = this.state.projectDetails.process.length;
    let { processPosition } = this.state;
    let hideArrowLeft = '';
    let hideArrowRight = '';
    if (processPosition >= 0 && processPosition < processLength) {
      processPosition--;
      hideArrowRight = '';
      hideArrowLeft = '';
    }
    //  if(processPosition >= processLength-1){
    //   processPosition = processLength-1;
    //   hideArrowRight = "hide-arrow"
    // }
    if (processPosition <= 0) {
      processPosition = 0;
      hideArrowRight = 'hide-arrow';
    } else {
      hideArrowLeft = '';
    }
    console.log(processPosition, 'right');
    this.setState({
      anim: { ...this.state.anim, one: 'right-one', two: 'right-two' },
      processPosition,
      hideArrowLeft,
      hideArrowRight
    });
    setTimeout(() => {
      this.setState({ anim: { ...this.state.anim, one: '', two: '' } });
    }, 1000);
  };
  render() {
    const navStyle = { marginTop: '4rem' };
    const {
      selectedProject,
      projectDetails,
      processPosition,
      hideArrowLeft,
      hideArrowRight
    } = this.state;
    // console.log(projectDetails?.process[processPosition]);

    return (
      <div className="project-details container " style={navStyle}>
        <section className="details  row ">
          <img
            src={selectedProject?.profileImage}
            alt=""
            className="col-md-5"
          />
          <div className="description col-md-7">
            <h3>{selectedProject?.projectName}</h3>
            <p>{projectDetails?.description}</p>
            <a href={projectDetails?.summary?.url} target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
            <div className="repos">
              <h6 className="my-2">Repositories</h6>
              {projectDetails?.repos.length === 0 && 'Private Repositories'}
              <ul>
                {projectDetails?.repos.map((data,i) => {
                  return (
                    <li key={'d' + i}>
                      {data.more && <p>Some repositories are private</p>}
                      <a  href={data.link} target="_blank" rel="noopener noreferrer">
                        {data.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className="frameworks">
          <h6>Technologies Used</h6>
          <div>
            <p>Front-End</p>
            <ul>
              {projectDetails?.frameworks.frontEnd.map((data, i) => {
                return <li key={'d' + i}>{data}</li>;
              })}
            </ul>
          </div>
          <div>
            <p>Back-End</p>
            <ul>
              {projectDetails?.frameworks.backEnd.map((data, i) => {
                return <li key={'d' + i}>{data}</li>;
              })}
            </ul>
          </div>
          <div>
            <p>Others</p>
            <ul>
              {projectDetails?.frameworks.others.map((data, i) => {
                return <li key={'d' + i}>{data}</li>;
              })}
            </ul>
          </div>
        </section>

        <section className="container-fluid mt-5">
          <h3 className="text-center">Development Process</h3>
          <ProcessCarousel
            anim={this.state.anim}
            leftCLick={this.leftCLick}
            rightCLick={this.rightCLick}
            process={projectDetails?.process[processPosition]}
            hideArrowLeft={hideArrowLeft}
            hideArrowRight={hideArrowRight}
            processPosition={processPosition}
          />
        </section>
      </div>
    );
  }
}
