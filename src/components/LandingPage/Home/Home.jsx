import React, {useEffect} from 'react';
import ScrollMagic from 'scrollmagic';
import {gsap, MotionPathPlugin, TextPlugin, TimelineMax} from 'gsap/all';
import './Home.scss';
import {Link} from 'react-scroll';

// import "debug.addIndicators";
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap';
import SVGCodeTags from '../../SvgComponents/CodeTags/SVGCodeTags';
import '../../../assets/samples/displayImage.png';

export default function Home() {
  useEffect(() => {
    ScrollMagicPluginGsap(ScrollMagic, TimelineMax);
    gsap.registerPlugin(MotionPathPlugin, TextPlugin);
    animateCircles();
    animateBoxes();
    moveOnScroll();
    return () => {};
  }, []);

  const moveOnScroll = () => {
    var controller = new ScrollMagic.Controller({});
    var timelineOne = new TimelineMax();
    // timelineOne.to()

    timelineOne
      .fromTo('#i-2', {translateX: 0}, {translateX: '-100vw'}, 'in+=0.2')
      .fromTo('#i-5', {translateX: 0}, {translateX: '-60vw'}, 'in')
      .fromTo('#i-6', {translateX: 0}, {translateX: '-100vw'}, 'in')
      .fromTo('#i-1', {translateX: 0}, {translateX: '-60vw'}, 'in');
    timelineOne.pause(0);
    new ScrollMagic.Scene({
      triggerElement: '.boxes',
      duration: '50%', // scroll distance
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

  const animateCircles = () => {
    var timelineOne = new TimelineMax();
    timelineOne
      .fromTo(
        '.circle-top',
        {x: '30%', y: '30%', scale: 5},
        {opacity: 1, scale: 1, x: 0, y: 0, duration: 5},
        'in-=0.56'
      )
      .to('.headers-details', {color: '#ffffff', duration: 2}, 'in')

      .to(
        '.headers-details-2',
        {'clip-path': 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)', duration: 2},
        'in'
      )
      .to('.headers-details', {color: '#000000', duration: 2}, 'in+=2')
      .to(
        '.headers-details-2',
        {
          'clip-path': 'polygon(-10% -10%, -10% 110%, 110% 110%, 110% -10%)',
          duration: 5,
        },
        'in+=0.82'
      )
      .fromTo('.skill-1', {opacity: 0, duration: 4}, {opacity: 1}, 'in+=4')
      .fromTo('.skill-2', {opacity: 0, duration: 4}, {opacity: 1}, 'in+=3');
  };

  const animateBoxes = () => {
    var timelineOne = new TimelineMax();
    // hide title clip
    timelineOne
      .to('#i-1', {y: 30, duration: 0.44, ease: 'power2'}, 'in+=0.32')
      .to('#i-2', {opacity: 0, duration: 0.32}, 'in+=0.32')
      .to('#i-3', {opacity: 0, scale: 3, zIndex: 99, duration: 0.32}, 'in+=2')
      .to('#i-3', {opacity: 0, scale: 0.4, zIndex: 1, duration: 0.52}, 'in+=2')
      .to('#i-4', {opacity: 0, duration: 0.32}, 'in+=0.32')
      .to('#i-5', {opacity: 0, duration: 0.32}, 'in+=0.7')
      .to('#i-2', {opacity: 1, duration: 0.32}, 'in+=0.32')
      .to('#i-3', {opacity: 1, duration: 0.32}, 'in+=0.82')
      .to('#i-6', {opacity: 1, duration: 0.32}, 'in+=0.82')
      .fromTo('#i-5', {x: '30%'}, {opacity: 1, x: 0, duration: 5}, 'in+=0.56');
  };
  return (
    <div className="container hero comp-view">
      <div className="circle-top"></div>
      <div className="resume btn">
        <Link
          activeClass=" nav-link"
          to="workDone"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
          View My work
        </Link>
      </div>

      <div className=" boxes">
        <div id="i-1" className=" box box-2">
          <h6>Quality Work</h6>
        </div>
        <div id="i-2" className=" box box-2">
          <h6>Smooth Collaboration</h6>
        </div>
        <div id="i-3" className=" box box-2">
          <i className="fa fa-heart" aria-hidden="true"></i>
        </div>
        <div id="i-4" className=" box box-2">
          4
        </div>
        <div id="i-5" className=" box box-2">
          <h6>High Commitment</h6>
        </div>
        <div id="i-6" className=" box box-2">
          <h6>Effective Communication</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-12 headers">
          <div className="headers-details">
            <h4 className="headers-details-1">Hello, I'm</h4>
            <h1 className="headers-details-2">Soko Paul</h1>
            <h3 className="headers-details-2">A full-stack software developer</h3>
            <p className="headers-details-3">
              I enjoy every aspect of <span className="skill-1">designing and building</span>{' '}
              websites & mobile apps from start to finish to provide{' '}
              <span className="skill-2"> amazing user experiences</span>
            </p>
            <p>
              I am defined by{' '}
              <span>
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <div className="menu"></div>
        </div>
        <div className="col-md-4 col-12 side">
          <div className="side-circle">
            <SVGCodeTags />
          </div>
        </div>
      </div>
    </div>
  );
}
