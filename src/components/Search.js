import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import searchIcon from "../assets/images/icons/search.svg";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchLink = "/page/1/search/";
  return (
    <div className='search'>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search'
        ></input>
        <NavLink
          className='btn btn-outline-secondary'
          to={searchLink + searchTerm}
        >
          <img src={searchIcon} className='search--icon' alt='Search' />
        </NavLink>
      </div>
    </div>
  );
};

export default Search;
