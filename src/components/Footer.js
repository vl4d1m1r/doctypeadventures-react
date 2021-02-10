import React, { useContext } from "react";
import { StateContext } from "../context/Context";
import fancyLogos from "../assets/images/logos/fancy-logos.svg";
import nameImage from "../assets/images/name-image.png";

const Footer = () => {
  const { state } = useContext(StateContext);
  return (
    <footer className='container-fluid footer'>
      <div className='row'>
        <div className='col-12 order-2 col-lg order-lg-1 footer__col'>
          <div className='footer__text'>
            React CMS and React responsive theme by
            <img className='ms-1' src={nameImage} alt='V-Name' />
          </div>
          <div className='footer__text'>
            Ⓒ <img src={nameImage} alt='V-Name' /> {state.info.copyrightYear},
            All Rights Reserved
          </div>
          <div className='footer__version'>
            <span className='footer__software-version'>
              Version: {state.info.version}
            </span>
          </div>
        </div>
        <div className='col-12 order-1 col-lg order-lg-2 footer__col'>
          <div className='footer__label'>Achieved with:</div>
          <div className='footer__icons'>
            {state.info.technology.map((techItem) => {
              return (
                <a
                  className='footer--icon'
                  href={techItem.url}
                  target='_blank'
                  key={techItem.name}
                  rel='noopener noreferrer'
                >
                  <img
                    src={`${fancyLogos}#svg-logo-${techItem.name}`}
                    alt={techItem.name}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
