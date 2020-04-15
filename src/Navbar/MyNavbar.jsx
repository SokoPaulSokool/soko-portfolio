import React, { Component } from 'react';
import { Link } from 'react-scroll';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from 'mdbreact';

import './MyNavbar.scss';

export default class MyNavbar extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  render() {
    // const navStyle = { marginTop: '4rem' };
    // const overlay = (
    //   <div
    //     id="sidenav-overlay"
    //     style={{ backgroundColor: 'transparent' }}
    //     onClick={this.handleTogglerClick}
    //   />
    // );
    return (
      <div>
        <MDBNavbar
          color="secondary-color"
          dark
          expand="md"
          fixed="top"
          transparent
        >
          <MDBContainer>
            <MDBNavbarBrand>
              <MDBNavLink to="">
                <h4 className="">Soko Paul</h4>
              </MDBNavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse')} />
            <MDBCollapse
              id="navbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav right>
                <MDBNavItem>
                  <Link
                    activeClass="active nav-link"
                    to="workDone"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                  Portfolio
                  </Link>
                  {/* <MDBNavLink to="#workDone">Work Done</MDBNavLink> */}
                </MDBNavItem>
                <MDBNavItem>
                     <Link
                    activeClass="active nav-link"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Skills
                  </Link>
                  {/* <MDBNavLink to="#skills">Skills</MDBNavLink> */}
                </MDBNavItem>
                <MDBNavItem>
                     <Link
                    activeClass="active nav-link"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                  {/* <MDBNavLink to="#about">About</MDBNavLink> */}
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </div>
    );
  }
}
