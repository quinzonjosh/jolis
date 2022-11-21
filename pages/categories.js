import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import CategoryView from "../components/CategoryView/CategoryView";
import data from "../data/categories.json";
import { cleanCategories } from "../utils/cleanData";
import {Client} from "../api/contentful";

const categories = ({ categoryList }) => {
  return (
    <Layout page="Products">
      <Banner title="Product Categories" />
      <CategoryView categoryList={categoryList} />
    </Layout>
  );
};

export default categories;

export async function getStaticProps(context) {
  let categories = [];
  try{
    const response = await Client.getEntries({'content_type' : 'category'})
    const responseData = response.items

    if(responseData){
        categories = cleanCategories(responseData)
        console.log(categories)
    }
  } catch (error) {
  console.log(error)
  }

  return {
    props: {
      categoryList: categories,
    },
  };
}
