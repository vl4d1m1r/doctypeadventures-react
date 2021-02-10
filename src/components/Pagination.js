import React from "react";
import { NavLink } from "react-router-dom";
import iconArrowRight from "../assets/images/icons/arrow-right.svg";
import iconArrowLeft from "../assets/images/icons/arrow-left.svg";

const Search = (props) => {
  const { currentPage, filter, filterValue, totalPages } = props.paginationData;
  let linkPrev = `/page/${Number(currentPage) - 1}`;
  let linkNext = `/page/${Number(currentPage) + 1}`;
  if (filter && filterValue) {
    const linkAddFilter = `/${filter}/${filterValue}`;
    linkPrev += linkAddFilter;
    linkNext += linkAddFilter;
  }

  return (
    <nav className='row pagination'>
      <div className='col text-start'>
        {currentPage > 1 && (
          <NavLink to={linkPrev}>
            <button className='pagination--button'>
              <img src={iconArrowLeft} alt='Arrow left' />
            </button>
          </NavLink>
        )}
      </div>
      <div className='col text-center my-auto'>
        {currentPage} / {totalPages}
      </div>
      <div className='col text-end'>
        {currentPage < totalPages && (
          <NavLink to={linkNext}>
            <button className='pagination--button'>
              <img src={iconArrowRight} alt='Arrow right' />
            </button>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Search;
