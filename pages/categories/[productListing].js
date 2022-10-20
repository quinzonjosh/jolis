import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import { GrSearch } from "react-icons/gr";
import { useRouter } from "next/router";
import categories from "../../data/categories.json";
import Product from "../../components/Product/Product";
import productsList from "../../data/products.json";

export default function ProductListing({ products }) {
  const router = useRouter();
  const category = router.query;
  console.log(products);
  return (
    <Layout className="w-full">
      <section className="text-4xl font-bold text-center p-10 border-b border-black">
        {category["productListing"] != null
          ? category["productListing"]
          : "Product Listing"}
      </section>

      <section className="flex flex-row border-b border-black py-10">
        {/* left panel */}
        <div className="w-[25%] flex flex-col px-10 gap-2">
          {/* Search bar */}
          <div className="flex">
            <input
              type="search"
              name="Search here"
              placeholder="Search products"
              className="w-[100%] border-2 border-black border-r-0 p-2"
            />
            <button className="border-2 border-l-0 border-black p-1">
              <GrSearch />
            </button>
          </div>
          {/* browse type */}
          <div className="w-[100%] border border-black p-2">
            <div className="text-xl">Browse Type</div>
            <ul className="flex flex-col gap-1">
              <li>
                  <button>All products</button>
              </li>
              <li>
                  <button>Architecture</button>
              </li>
              <li>
                  <button>Drawing Supplies</button>
              </li>
              <li>
                  <button>School Supplies</button>
              </li>
              <li>
                  <button>Tables</button>
              </li>
              <li>
                  <button>Books</button>
              </li>
            </ul>
          </div>
          {/* browse type */}
          <div className="w-[100%] border border-black p-2">
            <div className="text-xl">Browse Brands</div>
            <ul className="flex flex-col gap-1">
              <li>
                  <button>All Brands</button>
              </li>
              <li>
                  <button>Mongol</button>
              </li>
              <li>
                  <button>Faber Castell</button>
              </li>
              <li>
                  <button>Best Buy</button>
              </li>
              <li>
                  <button>G-Tec</button>
              </li>
              <li>
                  <button>Muji</button>
              </li>
            </ul>
          </div>
        </div>

        {/* All products grid */}
        <div className="w-[70%]">
          <div>
            <h2 className="font-bold text-3xl">All Products</h2>
            <div className="grid md:gap-5 sm:gap-2 md:grid-cols-3 grid-cols-2 lg:px-10 py-10">
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
