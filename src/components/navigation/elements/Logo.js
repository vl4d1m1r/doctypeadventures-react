import React from "react";
import { NavLink } from "react-router-dom";
import logoCircle from "../../../assets/images/logos/logo-doctype-circle.jpg";
import logoText from "../../../assets/images/logos/logo-doctype-text.png";

const Logo = () => {
  return (
    <NavLink to='/page/1' className='logo'>
      <img src={logoCircle} className='logo--image' alt='Logo Circle' />
      <img
        src={logoText}
        className='logo--text d-none d-sm-inline'
        alt='Logo Text'
      />
    </NavLink>
  );
};

export default Logo;
