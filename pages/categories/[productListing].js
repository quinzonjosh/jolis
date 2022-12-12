import Layout from "../../components/Layout/Layout";
import { useRouter } from "next/router";
import Banner from "../../components/Banner/Banner";
import { useState, useEffect,  useRef } from "react";
import { Client } from "../../api/contentful";
import { cleanCategories, cleanProducts } from "../../utils/cleanData";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";
import ProductList from "../../components/Products/ProductList";
import ProductFilter from "../../components/Products/ProductFilter";
import SEO from '../../components/SEO';


export default function ProductListing({
  products,
  productsPerPage,
  numPages,
  category,
  brands
}) {
  const [productList, setProductList] = useState(products);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(numPages);
  const [loading, setLoading] = useState(false);

  const type = "products";
  const limit = productsPerPage;

  const mounted = useRef(true);
  const categoryName = category.split("-").join(" ");
  const searchRef = useRef();

  const router = useRouter();
  const categoryTitle = router.asPath.split("/")[2].split("-").join(" ");

  const handleFilter = async (event) => {
    event.preventDefault();
    const brand = event.target.value === "All brands" ? "" : event.target.value;
    setLoading(true);
    const { data, status } = await axios.get("/api/search/products", {
      params: {
        type,
        query: "",
        category,
        page,
        limit,
        brand
      },
    });
    setLoading(false);
    setProductList(data.products);
    setTotalPages(data.numPages);
    setPage(1);
    searchRef.current.value = "";
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setQuery(event.target.search.value);
    setLoading(true);
    const { data, status } = await axios.get("/api/search/products", {
      params: {
        type,
        query: event.target.search.value,
        category,
        page,
        limit,
      },
    });
    setLoading(false);
    setProductList(data.products);
    setTotalPages(data.numPages);
    setPage(1);
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
          category,
          page,
          limit,
        },
      });
      setLoading(false);
      setProductList(data.products);
      setTotalPages(data.numPages);
    })();
  }, [page]);

  return (
    <Layout className="w-full">
      <SEO title={categoryTitle} slug={`categories/${categoryName}`} />
      <Banner
        title={
          categoryName
        }
      />

      <section className="flex flex-col lg:flex-row py-10 relative">
        {/* left panel */}
        <ProductFilter handler={""} brands={brands} handleSubmit={handleSubmit} searchRef={searchRef}  handleFilter={handleFilter} />
        {/* All products grid */}
        <ProductList categoryName={categoryName} productList={productList} loading={loading} />
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

  const paths = cleanCategories(response.items).map((category) => { return { params: { productListing: category.slug } } })

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

    const brands = new Set();
    products.forEach((product) => {
      brands.add(product.brand)
    })

    return {
      props: {
        products: products.slice(0, LIMIT),
        productsPerPage: LIMIT,
        numPages: Math.ceil(products.length / LIMIT),
        category: category,
        brands: [...brands]
      },
      revalidate: 10
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        products: [],
        productsPerPage: 0,
        numPages: 0,
        category: "",
        brands: []
      },
      revalidate: 10
    };
  }
}
