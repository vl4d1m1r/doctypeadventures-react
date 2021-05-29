import React, { useContext } from "react";
import { StateContext } from "../context/Context";
import { stripHtml } from "../libs/utilities.js";
import buttonFacebook from "../assets/images/social/button-facebook-light.svg";
import buttonTwitter from "../assets/images/social/button-twitter-light.svg";

const Social = (props) => {
  const { state } = useContext(StateContext);
  const socialButtons = [
    {
      name: "facebook",
      target: state.social.facebookTarget + window.location.href,
      img: buttonFacebook,
    },
    {
      name: "twitter",
      target: state.social.twitterTarget + stripHtml(props.post.title.rendered),
      img: buttonTwitter,
    },
  ];
  const popup = (target) => {
    const windowWidth = state.social.windowWidth;
    const windowHeight = state.social.windowHeight;
    const windowTop = window.screen.height / 2 - windowHeight / 2;
    const windowLeft = window.screen.width / 2 - windowWidth / 2;
    window.open(
      target,
      "windowPopup",
      `toolbar=no, location=0, status=no, menubar=no, scrollbars=yes, resizable=yes, top=${windowTop}, left=${windowLeft}, width=${windowWidth}, height=${windowHeight}`
    );
  };

  return (
    <div className='social-integration'>
      {socialButtons.map((button) => {
        return (
          <button
            key={button.name}
            className={`social-integration--${button.name}`}
            onClick={() => popup(button.target)}
          >
            <img src={button.img} alt={`${button.name} share button`} />
            Share
          </button>
        );
      })}
    </div>
  );
};

export default Social;
