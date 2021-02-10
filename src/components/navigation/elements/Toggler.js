import React from "react";
import { ReactComponent as Hamburger } from "../../../assets/images/icons/hamburger.svg";

const Toggler = () => {
  return (
    <button
      className='navbar-toggler'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#navbarNavigation'
    >
      <Hamburger />
    </button>
  );
};

export default Toggler;
