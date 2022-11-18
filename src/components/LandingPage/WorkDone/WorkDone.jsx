import React, {useEffect, useState} from 'react';
import './WorkDone.scss';
import ScrollMagic from 'scrollmagic';
import {TimelineMax} from 'gsap/all';

import {getProjects} from '../../../helpers/projectDetailsHelper';
import laptop from '../../../assets/SVG/laptop.svg';
import phone from '../../../assets/SVG/phone.svg';
import {useNavigate} from 'react-router-dom';

export function WorkItem({data, position, visitSiteClick, viewDetails}) {
  return (
    <div className={'work-item work-item-' + position}>
      <div
        className="work-image"
        onClick={() => {
          viewDetails(data);
        }}>
        <div className="image-cover"></div>
        <img src={data.profileImage} alt="" />
      </div>

      <div className="buttons">
        <div className="cover"></div>

        <div
          className="icon"
          onClick={() => {
            viewDetails(data);
          }}>
          {data.isWeb && <img src={laptop} alt="laptop" />}
          {!data.isWeb && <img src={phone} alt="laptop" />}
        </div>
        <div
          className="project-name"
          onClick={() => {
            viewDetails(data);
          }}>
          <h4>{data.projectName}</h4>
          <p>{data.brief}</p>
        </div>
        <div className="ll">
          <div className="mm">
            <i
              onClick={() => {
                visitSiteClick(data.url);
              }}
              className="mybtn-site mybtn fa fa-globe "
              aria-hidden="true"></i>

            <i
              onClick={() => {
                viewDetails(data);
              }}
              className="mybtn-details mybtn fa fa-info-circle "
              aria-hidden="true"></i>
          </div>
        </div>

        {/* <button
         
          className="mybtn-details mybtn"
        >
          View Details
        </button> */}
      </div>
    </div>
  );
}

const WorkDone = () => {
  let navigate = useNavigate();
  const [work, setWork] = useState([]);

  useEffect(() => {
    setWork(getProjects());
    moveOnScroll();
    return () => {};
  }, []);

  const moveOnScroll = () => {
    var controller = new ScrollMagic.Controller({});
    var timelineOne = new TimelineMax();

    timelineOne
      .fromTo(
        '.work-item-0',
        {translateX: '-30vw', rotateZ: '-30deg'},
        {rotateZ: '0deg', translateX: 0},
        'in+=0.2'
      )
      .fromTo(
        '.work-item-2',
        {translateX: '30vw', rotateZ: '30deg'},
        {rotateZ: '0deg', translateX: 0},
        'in+=0.2'
      )
      .fromTo('.work-item-3', {translateX: '-30vw'}, {translateX: 0}, 'in+=0.9')
      .fromTo('.work-item-5', {translateX: '30vw'}, {translateX: 0}, 'in+=0.9');
    timelineOne.pause(0);
    new ScrollMagic.Scene({
      triggerElement: '#workDone',
      duration: '70%', // scroll distance
      triggerHook: 0.5,
      // triggerHook: "onEnter",
      loglevel: 2,
      reverse: true,
      offset: 10, // start this scene after scrolling for 50px
    })
      // .addIndicators()
      .setTween(timelineOne.play())
      .addTo(controller);
  };

  const handleWorkClick = (data) => {
    localStorage.setItem('selectedProject', JSON.stringify(data));
    navigate('/details');
  };

  const visitSiteClick = (data) => {
    window.open(data, '_blank');
  };

  return (
    <div id="workDone" className="work-done container">
      <div className="row text-center mb-2">
        <h2 className="col-12">Portfolio</h2>
      </div>
      <div className="row items">
        {work.map((k, i) => {
          return (
            <WorkItem
              id={'work-item' + i}
              key={'work-item-' + i}
              // onClick={this.handleWorkClick}

              data={k}
              position={i}
              viewDetails={handleWorkClick}
              visitSiteClick={visitSiteClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkDone;
