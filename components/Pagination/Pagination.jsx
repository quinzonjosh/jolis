import React, { useState } from "react";

const Pagination = ({ numPages, currentPage, pageChanger }) => {

  const changePage = (event) => {
    pageChanger(event.target.getAttribute("data-page"));
  };

  const nextPage = () => {
    if (currentPage < numPages) {
      pageChanger(++currentPage);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      pageChanger(--currentPage);
    }
  };

 

  return (
    <div className="text-center">
      <button onClick={prevPage} className="hover:bg-gray-200 mr-7 text-gray-500 font-heading">
        ←PREV
      </button>
      {[...Array(numPages).keys()].map((item) => {
        return (
          <button
            onClick={(event) => changePage(event)}
            key={item + 1}
            className={`hover:bg-gray-200 m-1  font-heading ${
              item === currentPage - 1 ? "font-bold text-secondary" : "text-gray-400"
            }`}
            data-page={item+1}
          >
            {item + 1}
          </button>
        );
      })}
      <button onClick={nextPage} className="hover:bg-gray-200 ml-7 text-gray-500 font-heading">
        NEXT→
      </button>
    </div>
  );
};

export default Pagination;
