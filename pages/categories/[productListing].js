import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import { GrSearch } from "react-icons/gr";
import { BsFilterLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import categories from "../../data/categories.json";
import Product from "../../components/Product/Product";
import productsList from "../../data/products.json";
import Banner from "../../components/Banner/Banner";

export default function ProductListing({ products }) {
  const router = useRouter();
  const category = router.query;
  console.log(products);
  return (
    <Layout className="w-full">
      <Banner title={category["productListing"] != null
          ? category["productListing"]
          : "Product Listing"}/>

      <section className="flex flex-col md:flex-row border-b border-black py-10">
        {/* left panel */}
        <div className="md:w-[25%] flex flex-col px-3 md:px-10 gap-2">
          {/* Search bar (desktop view)*/}
          <div className="flex justify-between">
            {/* filter and Search bar (mobile view)*/}
            <div className="flex">
              <button className="md:hidden flex border-2 rounded-lg shadow-lg pl-2 pr-4 pt-1">
                <div className="pt-[2px] text-secondary pr-3">
                  <BsFilterLeft size={22} />
                </div>
                <a className="text-secondary">Filter</a>
              </button>
            </div>

            <div className="flex md:w-[100%] border-2 rounded-xl shadow-lg">
              <input
                type="search"
                name="Search here"
                placeholder="Search products"
                className="w-[150px] md:w-[100%] text-xs md:text-xl p-2"
              />
              <button className="p-1">
                <GrSearch />
              </button>
            </div>
          </div>
          {/* browse type */}
          <div className="hidden md:block w-[100%] border-2 rounded-xl shadow-lg p-2">
            <div className="text-xl py-2 text-secondary font-bold">Type</div>
            <ul className="flex flex-col gap-1">
              <li className="hover:cursor-pointer text-primary hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1">
                <button>All products</button>
              </li>
              <li className="hover:cursor-pointer text-primary hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1">
                <button>Architecture</button>
              </li>
              <li className="hover:cursor-pointer text-primary hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1">
                <button>Drawing Supplies</button>
              </li>
              <li className="hover:cursor-pointer text-primary hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1">
                <button>School Supplies</button>
              </li>
              <li className="hover:cursor-pointer text-primary hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1">
                <button>Tables</button>
              </li>
              <li className="hover:cursor-pointer text-primary hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1">
                <button>Books</button>
              </li>
            </ul>
          </div>
          {/* browse type */}
          <div className="hidden md:block w-[100%] border-2 rounded-xl shadow-lg p-2">
            <div className="text-xl py-2 text-secondary font-bold">Brand</div>
            <ul className="flex flex-col gap-1">
              <li className="hover:cursor-pointer text-primary hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1">
                <button>All Brands</button>
              </li>
              <li className="hover:cursor-pointer text-primary hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1">
                <button>Mongol</button>
              </li>
              <li className="hover:cursor-pointer text-primary hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1">
                <button>Faber Castell</button>
              </li>
              <li className="hover:cursor-pointer text-primary hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1">
                <button>Best Buy</button>
              </li>
              <li className="hover:cursor-pointer text-primary hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1">
                <button>G-Tec</button>
              </li>
              <li className="hover:cursor-pointer text-primary hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1">
                <button>Muji</button>
              </li>
            </ul>
          </div>
        </div>

        {/* All products grid */}
        <div className="w-[90%] mx-auto py-5">
          <div>
            <h2 className="font-bold text-3xl text-secondary pb-5">All Products</h2>
            <div className="grid md:gap-5 sm:gap-5 md:grid-cols-3 grid-cols-2 lg:px-0 md:py-5">
              {products.map((product, index) => {
                return (
                  <Product
                    key={index}
                    image={product.image}
                    name={product.name}
                    category={product.category}
                    espana_stock={product.espana_stock}
                    pnoval_stock={product.pnoval_stock}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function getStaticPaths() {
  const paths = categories.map((item) => {
    return { params: { productListing: item.slug } };
  });
  return { paths, fallback: false };
}

export function getStaticProps(context) {
  const productinCategory = productsList.filter((item) => {
    const category = item.category.toLowerCase().split(" ").join("-");
    return category == context.params.productListing;
  });

  return {
    props: {
      products: productinCategory,
    },
  };
}
