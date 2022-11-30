import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import { GrSearch, GrSystem } from "react-icons/gr";
import { BsFilterLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import Product from "../../components/Product/Product";
import Banner from "../../components/Banner/Banner";
import { useState, useEffect, useCallback } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import {Client} from "../../api/contentful";
import { cleanCategories, cleanProducts } from "../../utils/cleanData";
import { GiConsoleController } from "react-icons/gi";
import Pagination from "../../components/Pagination/Pagination";

export default function ProductListing({ products }) {
  const router = useRouter();
  const category = router.query;

  /* Pagination handler */
  const PRODUCTS_PER_PAGE = 9;
  const [pageNumber, setPageNumber] = useState(1);
  const PRODUCT_CARDS = products.map((product, index) => {
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
  });
  const [productList, setProducts] = useState([]);
  const numPages = Math.ceil(PRODUCT_CARDS.length / PRODUCTS_PER_PAGE);

  useEffect(() => {
    const startPage = PRODUCTS_PER_PAGE * (pageNumber - 1);
    const endPage = PRODUCTS_PER_PAGE * pageNumber;
    setProducts(PRODUCT_CARDS.slice(startPage, endPage));
  }, [pageNumber]);

  const [hideFilter, setHideFilter] = useState(true);

  return (
    <Layout className="w-full">
      <Banner
        title={
          category["productListing"] != null
            ? category["productListing"]
            : "Product Listing"
        }
      />

      <section className="flex flex-col md:flex-row py-10 relative">
        {/* left panel */}
        <div className="md:w-[25%] flex flex-col px-3 md:px-10 gap-2">
          {/* Search bar (desktop view)*/}
          <div className="flex justify-between">
            {/* filter and Search bar (mobile view)*/}
            <div className="flex">
              <button
                className="md:hidden flex border-2 rounded-lg shadow-lg pl-2 pr-4 pt-1"
                onClick={() => {
                  document.body.style.overflow = hideFilter
                    ? "hidden"
                    : "scroll";

                  setHideFilter((hideFilter) => !hideFilter);
                }}
              >
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
          <div
            className={`${
              hideFilter ? " -left-full" : "left-0"
            } overflow-scroll max-h-[400px] md:max-h-[auto] transition-all w-full z-10 top-[90px] md:w-auto absolute md:static`}
          >
            {/* browse type */}
            <FilterBox
              title="Type"
              items={[
                "All Products",
                "Architecture",
                "Drawing Supplies",
                "School Supplies",
                "Tables",
                "Books",
              ]}
            />

            {/* browse brand */}
            <FilterBox
              title="Brand"
              items={[
                "All Brands",
                "Faber Castell",
                "Best Buy",
                "G-Tec",
                "Muji",
              ]}
            />
          </div>
        </div>

        {/* All products grid */}
        <div className="w-[90%] mx-auto py-5">
          <h2 className="font-bold text-3xl text-secondary pb-5">
            All Products
          </h2>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:px-0 md:py-5 md:w-[80%] gap-3 md:gap-x-24 ">
            {productList}
          </div>
        </div>
      </section>
      <div className="border-b border-black">
        <div className="pb-12">
          <Pagination
              numPages={numPages}
              currentPage={pageNumber}
              pageChanger={setPageNumber}
            />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  let allCategories = [];
  try{
    const response = await Client.getEntries({'content_type': 'category'})
    const responseData = response.items;
    if(responseData){
      allCategories = cleanCategories(responseData);
    }
  } catch(error){
    console.log(error)
  }
  const paths = allCategories.map((item) => {
    return { params: { productListing: item.slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  console.log(Client)
  let allProducts = [];
  try{
    const response = await Client.getEntries({'content_type' : 'products'})
    const responseData = response.items
    if(responseData){
        allProducts = cleanProducts(responseData)
    }
  } catch (error) {
  console.log(error)
  }

  const productsinCategory = allProducts.filter((item) => {
    const category = item.category.toLowerCase().split(" ").join("-");
    return category == context.params.productListing;
  });

  return {
    props: {
      products: productsinCategory,
    },
  };
}
