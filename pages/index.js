import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Banner from "../components/Banner/Banner";
import data from "../data/products.json";
import ProductCTA from "../components/ProductCTA/ProductCTA";

export default function Home({ featuredProducts }) {
  return (
    <Layout className="w-full">
      <Banner title="Welcome to Joli's" />
      <FeaturedProducts data={data} />
      <ProductCTA />
    </Layout>
  );
}

export function getStaticProps() {
  const featuredProducts = data.filter((item) => {
    return item.featured == true;
  });

  return {
    props: {
      featuredProducts: featuredProducts,
    },
  };
}
