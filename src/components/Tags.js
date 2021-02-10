import React from "react";
import { NavLink } from "react-router-dom";

const Tags = (props) => {
  const tagLink = "/page/1/tags/";

  return (
    <React.Fragment>
      {props.tags.map((tag) => {
        return (
          <NavLink className='tag' key={tag.id} to={tagLink + tag.id}>
            {tag.name}
          </NavLink>
        );
      })}
    </React.Fragment>
  );
};

export default Tags;
