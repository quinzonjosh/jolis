import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import CategoryView from "../components/CategoryView/CategoryView";
import data from "../data/categories.json";

const categories = ({ categoryList }) => {
  return (
    <Layout page="Products">
      <Banner title="Product Categories" />
      <CategoryView categoryList={categoryList} />
    </Layout>
  );
};

export default categories;

export function getStaticProps() {
  return {
    props: {
      categoryList: data,
    },
  };
}
