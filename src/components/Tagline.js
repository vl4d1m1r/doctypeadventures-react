import React, { useContext } from "react";
import { StateContext } from "../context/Context";

const Tagline = (props) => {
  const { state } = useContext(StateContext);
  return (
    <div className='tagline text-center'>
      <div className={props.bottom ? "tagline--text-bottom" : "tagline--text"}>
        {state.info.tagline}
      </div>
    </div>
  );
};

export default Tagline;
