import React, { useState } from 'react';
import Category from '../Category/Category';
import Pagination from '../Pagination/Pagination';

const CategoryView = () => {
    let numCategories = 240; //Stores the number of categories
    let categoryPages = []; //Stores 12 cards each
    let categoryCards = []; //Stores the category cards
    const [pageNumber, setPageNumber] = useState(1);
    
    //Generate test cards
    let cardCount = 0;
    while(cardCount < numCategories)
    {
        for(let i = 0; i < 12; i++)
        {
            //Check if there are categs remaining
            if(cardCount == numCategories)
                break;
            categoryCards.push(<a href="/categories" key={i+1} className="m-1"><Category categoryName={"Test " + (cardCount+1)}/></a>);
            cardCount++;
        }
        //Push categoryCards into page
        categoryPages.push(categoryCards);
        //Clear current cards
        categoryCards = [];
    }
  
    return (
    <div className="py-6">
        <div className="grid grid-cols-4 grid-rows-3 py-10">
            {categoryPages[pageNumber-1]}           
        </div>
        <Pagination numPages={categoryPages.length} currentPage={pageNumber} pageChanger={setPageNumber}/>
    </div>
  )
}

export default CategoryView