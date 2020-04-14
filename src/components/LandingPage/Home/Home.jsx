import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import { gsap, MotionPathPlugin, TextPlugin, TimelineMax } from "gsap/all";
import "./Home.scss";

// import "debug.addIndicators";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import SVGCodeTags from "../../SvgComponents/CodeTags/SVGCodeTags";

export default class Home extends Component {
  componentDidMount() {
    ScrollMagicPluginGsap(ScrollMagic, TimelineMax);
    gsap.registerPlugin(MotionPathPlugin, TextPlugin);
    this.animateCircles();
    this.animateBoxes();
    this.moveOnScroll();
  }

  moveOnScroll = () => {
    var controller = new ScrollMagic.Controller({});
    var timelineOne = new TimelineMax();
    // timelineOne.to()

    timelineOne
      .fromTo("#i-2", { translateX: 0 }, { translateX: "-30vw" }, "in+=0.2")
      .fromTo("#i-5", { translateX: 0 }, { translateX: "-60vw" }, "in")
      .fromTo("#i-6", { translateX: 0 }, { translateX: "-60vw" }, "in")
      .fromTo("#i-1", { translateX: 0 }, { translateX: "-60vw" }, "in");
    timelineOne.pause(0);
    new ScrollMagic.Scene({
      triggerElement: ".boxes",
      duration: "30%", // scroll distance
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

  animateCircles = () => {
    var timelineOne = new TimelineMax();
    timelineOne
      .fromTo(
        ".circle-top",
        { x: "30%", y: "30%", scale: 5 },
        { opacity: 1, scale: 1, x: 0, y: 0, duration: 5 },
        "in-=0.56"
      )
      .to(".headers-details", { color: "#ffffff", duration: 2 }, "in")

      .to(
        ".headers-details-2",
        { "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)", duration: 2 },
        "in"
      )
      .to(".headers-details", { color: "#000000", duration: 2 }, "in+=2")
      .to(
        ".headers-details-2",
        {
          "clip-path": "polygon(-10% -10%, -10% 110%, 110% 110%, 110% -10%)",
          duration: 5,
        },
        "in+=0.82"
      )
      .fromTo(".skill-1", { opacity: 0, duration: 4 }, { opacity: 1 }, "in+=4")
      .fromTo(".skill-2", { opacity: 0, duration: 4 }, { opacity: 1 }, "in+=3");
  };

  componentWillUnmount() {}

  animateBoxes = () => {
    var timelineOne = new TimelineMax();
    // hide title clip
    timelineOne
      .to("#i-1", { y: 30, duration: 0.44, ease: "power2" }, "in+=0.32")
      .to("#i-2", { opacity: 0, duration: 0.32 }, "in+=0.32")
      .to("#i-3", { opacity: 0, scale: 3, duration: 0.32 }, "in+=2")
      .to("#i-3", { opacity: 0, scale: 0.4, duration: 0.32 }, "in+=2")
      .to("#i-4", { opacity: 0, duration: 0.32 }, "in+=0.32")
      .to("#i-5", { opacity: 0, duration: 0.32 }, "in+=0.7")
      .to("#i-2", { opacity: 1, duration: 0.32 }, "in+=0.32")
      .to("#i-3", { opacity: 1, duration: 0.32 }, "in+=0.82")
      .to("#i-6", { opacity: 1, duration: 0.32 }, "in+=0.82")
      .fromTo(
        "#i-5",
        { x: "30%" },
        { opacity: 1, x: 0, duration: 5 },
        "in+=0.56"
      );
  };
  render() {
    return (
      <div className="container hero comp-view">
        <div className="circle-top"></div>

        <div className="row boxes">
          <div id="i-1" className="col-3 box box-2">
            <h6>Quality Work</h6>
          </div>
          <div id="i-2" className="col-3 box box-2">
            <h6>Collaboration</h6>
          </div>
          <div id="i-3" className="col-3 box box-2">
            3
          </div>
          <div id="i-4" className="col-3 box box-2">
            4
          </div>
          <div id="i-5" className="col-3 box box-2">
            <h6>Fast Delivery</h6>{" "}
          </div>
          <div id="i-6" className="col-3 box box-2">
            <h6>Effective Communication</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 headers">
            <div className="headers-details">
              <h4 className="headers-details-1">Full Stack</h4>
              <h1 className="headers-details-2">Software Engineer</h1>
              <p className="headers-details-3">
                Who enjoys every aspect of{" "}
                <span className="skill-1">designing and building</span> websites
                & mobile apps from start to finish to provide{" "}
                <span className="skill-2"> a good user experience</span>
              </p>
            </div>
            {/* <div className="menu">
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
            </div> */}
          </div>
          <div className="col-md-4 col-12 side">
            <div className="side-circle">
              <SVGCodeTags />
              {/* <div className="side-circle__rotate"></div> */}
              {/* <div className="side-circle__profile">
                <div className="bio">
                  <div className="bio-circle">
                    <img src={profileImage} alt="" />
                  </div>
                  <div className="bio-text">
                    <h3>Soko Paul</h3>
                    <p>
                      I believe everything can be done through passion,
                      commitment and hard work
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
