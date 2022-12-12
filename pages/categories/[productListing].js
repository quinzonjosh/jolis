import Layout from "../../components/Layout/Layout";
import { GrSearch, GrSystem } from "react-icons/gr";
import { BsFilterLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import Product from "../../components/Product/Product";
import Banner from "../../components/Banner/Banner";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import { Client } from "../../api/contentful";
import { cleanCategories, cleanProducts } from "../../utils/cleanData";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";

export default function ProductListing({
  products,
  productsPerPage,
  numPages,
  category,
}) {
  const [hideFilter, setHideFilter] = useState(true);
  const [productList, setProductList] = useState(products);

  const [query, setQuery] = useState("");
  const type = "products";
  const limit = productsPerPage;
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(numPages);
  const mounted = useRef(true);
  const categoryName = category.split("-").join(" ");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setQuery(event.target.search.value);
    const { data, status } = await axios.get("/api/search/products", {
      params: {
        type,
        query: event.target.search.value,
        category,
        page,
        limit,
      },
    });

    setProductList(data.products);
    setTotalPages(data.numPages);
  };

  useEffect(() => {
    (async () => {
      if (mounted.current) {
        mounted.current = false;
        return;
      }
      const { data, status } = await axios.get("/api/search/products", {
        params: {
          type,
          query,
          category,
          page,
          limit,
        },
      });

      setProductList(data.products);
      setTotalPages(data.numPages);
    })();
  }, [page]);

  return (
    <Layout className="w-full">
      <Banner
        title={
          categoryName
        }
      />

      <section className="flex flex-col lg:flex-row py-10 relative">
        {/* left panel */}
        <div className="lg:w-[25%] flex flex-col px-3 md:px-10 gap-2">
          {/* Search bar (desktop view)*/}
          <div className="flex justify-between">
            {/* filter and Search bar (mobile view)*/}
            <div className="flex">
              <button
                className="lg:hidden flex border-2 rounded-lg shadow-lg pl-2 pr-4 pt-1"
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

            <div className="lg:w-[100%] border-2 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="flex">
                <input
                  name="search"
                  type="text"
                  placeholder="Search products"
                  className="w-[150px] md:w-[100%] text-xs md:text-xl p-2 rounded-xl"
                />
                <button type="submit" className="p-1">
                  <GrSearch />
                </button>
              </form>
            </div>
          </div>
          <div
            className={`${hideFilter ? " -left-full" : "left-0"
              } overflow  lg:max-h-[auto] transition-all w-full z-[1002] top-0 lg:w-auto fixed lg:static`}
          >
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
              setHideFilter={setHideFilter}
            />
          </div>
        </div>

        {/* All products grid */}
        <div className="w-[90%] mx-auto py-5">
          <h2 className="font-bold text-3xl text-secondary pb-5 capitalize">
            {categoryName}
          </h2>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:px-0 md:py-5 md:w-[80%] gap-3 md:gap-x-24 lg:mx-0 mx-auto">
            {productList.map((product, index) => {
              return (
                <Product
                  key={index}
                  image={product.image}
                  name={product.name}
                  categories={product.categories}
                  espana_stock={product.espana_stock}
                  pnoval_stock={product.pnoval_stock}
                />
              );
            })}
          </div>
        </div>
      </section>
      <div className="border-b border-black">
        <div className="pb-12">
          <Pagination
            numPages={totalPages}
            currentPage={page}
            pageChanger={setPage}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await Client.getEntries({ 'content_type': 'category', order: "fields.categoryName" });

  const paths = cleanCategories(response.items).map((category) => { return { params: { productListing: category.slug } } }) // [{ params: { id: '1' } }, { params: { id: '2' } }],

  return {
    paths,
    fallback: false
  }


}

export async function getStaticProps(context) {
  try {
    const LIMIT = 9;
    const category = context.params.productListing;
    const response = await Client.getEntries({
      content_type: "products",
    });
    const products = cleanProducts(response.items).filter((item) => {
      return [...item.categories.map((category) => category.slug)].includes(
        category
      );
    });
    return {
      props: {
        products: products.slice(0, LIMIT),
        productsPerPage: LIMIT,
        numPages: Math.ceil(products.length / LIMIT),
        category: category,
        revalidate: 10
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        products: [],
        productsPerPage: 0,
        numPages: 0,
        category: "",
        revalidate: 10
      },
    };
  }
}
