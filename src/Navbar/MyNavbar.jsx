import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from 'mdbreact';

import './MyNavbar.scss';

export default function MyNavbar() {
  const [collapseID, setCollapseID] = useState('');

  const toggleCollapse = (currentCollapseID) => () => {
    setCollapseID(collapseID !== currentCollapseID ? currentCollapseID : '');
  };

  return (
    <div>
      <MDBNavbar color="secondary-color" dark expand="md" fixed="top" transparent>
        <MDBContainer>
          <MDBNavbarBrand>
            <li className=" active">
              <a className="nav-link" aria-current="page" href="./">
                Soko Paul
              </a>
            </li>
            {/* <MDBNavLink to=""> */}
            {/* <h4 className="primary-color">Soko Paul</h4> */}
            {/* </MDBNavLink> */}
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={toggleCollapse('navbarCollapse')} />
          <MDBCollapse id="navbarCollapse" isOpen={collapseID} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <Link
                  activeClass="active nav-link"
                  to="workDone"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Portfolio
                </Link>
                {/* <MDBNavLink to="#workDone">Work Done</MDBNavLink> */}
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  activeClass="active nav-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  About
                </Link>
                {/* <MDBNavLink to="#about">About</MDBNavLink> */}
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  activeClass="active nav-link"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Skills
                </Link>
                {/* <MDBNavLink to="#skills">Skills</MDBNavLink> */}
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
