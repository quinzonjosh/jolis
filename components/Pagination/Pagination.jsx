import React, { useState } from 'react';

const Pagination = ({numPages, currentPage, pageChanger}) => {
    const pageNums = [];

    const changePage = (event) => {
        pageChanger(event.target.innerHTML);
    };

    const nextPage = () => {
        if(currentPage < numPages)
        {
            console.log(currentPage++); //This is needed for proper functioning for some reason???
            pageChanger(currentPage++);
        }
    };

    const prevPage = () => {
        if(currentPage > 1)
        {
            console.log(currentPage--); //This is needed for proper functioning for some reason???
            pageChanger(currentPage--);
        }
    };

    for(let i = 0; i < numPages; i++)
    {
        if(i == currentPage-1)
            pageNums.push(<a onClick={event => changePage(event)} key={i+1} className="hover:bg-gray-200 m-1 font-bold">{i+1}</a>);
        else    
            pageNums.push(<a onClick={event => changePage(event)} key={i+1} className="hover:bg-gray-200 m-1">{i+1}</a>);
    }
  
    return (
    <p className="text-center">
        <a onClick={prevPage} className="hover:bg-gray-200 mr-7">←PREV</a>
        {pageNums}
        <a onClick={nextPage} className="hover:bg-gray-200 ml-7">NEXT→</a>
    </p>
  )
}

export default Pagination