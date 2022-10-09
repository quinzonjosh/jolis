import Category from "../components/Category/Category";
import Layout from "../components/Layout/Layout";
import Pagination from "../components/Pagination/Pagination";
import Titlebar from "../components/Titlebar/Titlebar";

const categories = () => {
  //Note: Can't quite figure out how to make the multiple pages thing yet
  
  let numCategories = 20; //Stores the number of categories
  //let categoryPages = []; //Stores 12 cards each
  let categoryCards = []; //Stores the category cards

  //Generate test cards
  for(let i = 0; i < 12; i++)
  {
    categoryCards.push(<a href="/" key={i+1} className="m-1"><Category categoryName={"Test " + (i+1)}/></a>);
  }

  //Determine page numbers
  const pageNum = Math.ceil((numCategories)/12);

  return (
    <Layout>
        <Titlebar text="Product Categories"/>
        <div className="py-6">
            <div className="grid grid-cols-4 grid-rows-3 py-10">
                {categoryCards}           
            </div>
            <Pagination numPages={pageNum} />
        </div>
    </Layout>
  )
}

export default categories