import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import CategoryView from "../components/CategoryView/CategoryView";
import data from "../data/categories.json";

const categories = ({ categoryList }) => {
  //This works but it is a bit sus

  return (
    <Layout>
      <Banner title="Product Categories" />
      <div className="lg:block md:block hidden">
        <CategoryView categoryList={categoryList} catPageNum={12}/>
      </div>
      <div className="lg:hidden md:hidden block">
        <CategoryView categoryList={categoryList} catPageNum={3}/>
      </div>
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
