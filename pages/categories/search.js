import Layout from "../../components/Layout/Layout";
import Banner from "../../components/Banner/Banner";
import { useState, useEffect, useRef } from "react";
import { Client } from "../../api/contentful";
import { cleanProducts } from "../../utils/cleanData";
import axios from "axios";
import ProductList from "../../components/Products/ProductList";
import ProductFilter from "../../components/Products/ProductFilter";
import SEO from "../../components/SEO";

export default function ProductListing({
  products,
  productsPerPage,
  numPages,
  brands,
  searchQuery,
}) {

  const [productList, setProductList] = useState(products);
  const [query, setQuery] = useState(searchQuery);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(numPages);
  const [loading, setLoading] = useState(false);
  const type = "products";
  const limit = productsPerPage;

  const mounted = useRef(true);
  const handler = "global";

  const handleFilter = async (event) => {
    event.preventDefault();
    const brand = event.target.value === "All brands" ? "" : event.target.value;
    setLoading(true);
    const { data, status } = await axios.get("/api/search/products", {
      params: {
        type,
        query: "",
        page,
        limit,
        brand,
        handler,
      },
    });
    setLoading(false);
    setProductList(data.products);
    setTotalPages(data.numPages);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setQuery(event.target.search.value);
    setLoading(true);
    const { data, status } = await axios.get("/api/search/products", {
      params: {
        type,
        query: event.target.search.value,
        page,
        limit,
        handler,
      },
    });
    setLoading(false);
    setProductList(data.products);
    setTotalPages(data.numPages);
  };

  useEffect(() => {
    (async () => {
      if (mounted.current) {
        mounted.current = false;
        return;
      }
      setLoading(true);

      const { data, status } = await axios.get("/api/search/products", {
        params: {
          type,
          query,
          page,
          limit,
          handler,
        },
      });
      setLoading(false);
      setProductList(data.products);
      setTotalPages(data.numPages);
    })();
  }, [page]);

  return (
    <Layout className="w-full">
      <SEO title="Search products" slug={`categories/search`} />

      <Banner title={"All products"} />

      <section className="flex flex-col lg:flex-row py-10 relative">
        {/* left panel */}
        <ProductFilter
          handler={handler}
          brands={brands}
          handleSubmit={handleSubmit}
          handleFilter={handleFilter}
        />

        {/* All products grid */}
        <ProductList
          productList={productList}
          loading={loading}
          numPages={totalPages}
          currentPage={page}
          pageChanger={setPage}
        />
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const LIMIT = 9;
    const response = await Client.getEntries({
      content_type: "products",
      query: context.query.query,
    });

    const products = cleanProducts(response.items);

    const brands = new Set();
    products.forEach((product) => {
      brands.add(product.brand);
    });
    console.log(context.query.query);

    return {
      props: {
        products: products.slice(0, LIMIT),
        productsPerPage: LIMIT,
        numPages: Math.ceil(products.length / LIMIT),
        brands: [...brands],
        searchQuery: context.query.query,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        products: [],
        productsPerPage: 0,
        numPages: 0,
        brands: [],
        searchQuery: "",
      },
    };
  }
}
