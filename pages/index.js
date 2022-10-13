import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Banner from "../components/Banner/Banner";
import Link from "next/link";
import data from "../data/products.json";

export default function Home({ featuredProducts }) {
  return (
    <Layout className="w-full">
      <Banner title="Welcome to Joli's" />

      <FeaturedProducts data={data} />

      <section>
        <div>
          <div className="flex flex-row border-black">
            <div className="flex flex-col w-[50%] border-r-2 border-black px-[5%] pt-[5%] pb-[10%] items-center">
              <div className="text-2xl font-bold text-center py-[5%]">
                Some Catchy Heading Here
              </div>
              <button className="border-2 p-1 border-black w-[55%]">
                <Link href="/productListing">
                  <a> See our products </a>
                </Link>
              </button>
            </div>

            <div className="flex flex-col w-[50%] border-black px-[5%] pt-[5%] pb-[10%] items-center">
              <div className="text-2xl font-bold text-center py-[5%]">
                Visit our stores
              </div>
              <button className="border-2 p-1 border-black w-[55%]">
                Check out our branch locations
              </button>
            </div>
          </div>
        </div>
      </section>
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
