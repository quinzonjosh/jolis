import Layout from "../components/Layout/Layout";
import Titlebar from "../components/Titlebar/Titlebar";
import CategoryView from "../components/CategoryView/CategoryView";

const categories = () => { 
  return (
    <Layout>
        <Titlebar text="Product Categories"/>
        <CategoryView />
    </Layout>
  )
}

export default categories