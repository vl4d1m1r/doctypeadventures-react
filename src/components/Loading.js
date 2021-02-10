import React from "react";
import LoadingAnimation from "../assets/images/animations/loading-animation.svg";

const Header = () => {
  return (
    <div className='loading text-center mt-5 mb-5'>
      <img src={LoadingAnimation} alt='Loading' />
      <div className='loading--text mt-3'>Please wait...</div>
    </div>
  );
};

export default Header;
