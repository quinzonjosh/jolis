import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Banner from "../components/Banner/Banner";
import ProductCTA from "../components/ProductCTA/ProductCTA";
import { Client } from "../api/contentful";
import { cleanProducts } from "../utils/cleanData";

export default function Home({ featuredProducts }) {
  return (
    <Layout page="Home" className="w-full">
      <Banner title="Welcome to Joli's" />
      <FeaturedProducts data={featuredProducts} />
      <ProductCTA />
    </Layout>
  );
}

export async function getServerSideProps() {
  let products = [];
  try{
    const response = await Client.getEntries({'content_type' : 'products'})
    const responseData = response.items

    if(responseData){
        products = cleanProducts(responseData)
    }
  } catch (error) {
  console.log(error)
  }

  const featuredProducts = products.filter((item) => {
    return item.featured == true;
  });

  return {
    props: {
      featuredProducts: featuredProducts,
    },
  };
}
