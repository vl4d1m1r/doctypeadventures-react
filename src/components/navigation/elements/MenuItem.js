import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  const catRoute = "/page/1/categories/";

  return (
    <li className='nav-item'>
      <NavLink className='nav-link' to={catRoute + props.category.id}>
        <div
          className='nav-text'
          data-bs-toggle='collapse'
          data-bs-target='.navbar-collapse.show'
        >
          {props.category.name}
        </div>
      </NavLink>
    </li>
  );
};

export default MenuItem;
