import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import CategoryView from "../components/CategoryView/CategoryView";

const categories = () => { 
  return (
    <Layout>
        <Banner title="Product Categories"/>
        <CategoryView />
    </Layout>
  )
}

export default categories