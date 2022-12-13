import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import CategoryView from "../components/CategoryView/CategoryView";
import { cleanCategories } from "../utils/cleanData";
import { Client } from "../api/contentful";
import SEO from "../components/SEO";

const categories = ({ categoryList, total }) => {
  return (
    <Layout page="Products">
      <SEO title="Product categories" slug="categories" />
      <Banner title="Product Categories" />
      <CategoryView categoryList={categoryList} total={total} />
    </Layout>
  );
};

export default categories;

export async function getServerSideProps(context) {
  let categories = [];
  let total;
  try {
    const response = await Client.getEntries({
      content_type: "category",
      order: "fields.categoryName",
      limit: 12,
    });
    const responseData = response.items;

    if (responseData) {
      categories = cleanCategories(responseData);
      total = response.total;
    }
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      categoryList: categories,
      total: total,
    },
  };
}
