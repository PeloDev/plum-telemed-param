import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

  
const Navbar = () => {
  return (
    <>
      <Nav>
      
        <Bars />
        
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Our Services
          </NavLink>
          <NavLink to='/whyplum' activeStyle>
            Why Plum Telemed
          </NavLink>
          <NavLink to='/features' activeStyle>
            Features
          </NavLink>
          <NavLink to='/contactus' activeStyle>
            Contact Us
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
          <NavBtnLink to='/signup'>Sign In</NavBtnLink>
        </NavBtn>
        
        
      </Nav>
    </>
  );
};
  
export default Navbar;