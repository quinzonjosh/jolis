import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { GrSearch } from "react-icons/gr";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const data = router.query;

  return (
    <Layout className="w-full">
      <section className="text-4xl font-bold text-center p-10 border-b border-black">
        {data.query != null ? data.categoryName : "Product Listing"}
      </section>

      <section className="flex flex-row border-b border-black py-10">
        {/* left panel */}
        <div className="w-[25%] flex flex-col px-10 gap-2">
          {/* Search bar */}
          <div className="flex">
            <input
              type="search"
              name="Search here"
              value="Search products"
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
                <Link href="/">
                  <a>All products</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Architecture</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Drawing Supplies</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>School Supplies</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Tables</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Books</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* browse type */}
          <div className="w-[100%] border border-black p-2">
            <div className="text-xl">Browse Brands</div>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href="/">
                  <a>All Brands</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Mongol</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Faber Castell</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Best Buy</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>G-Tec</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Muji</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* All products grid */}
        <div className="w-[70%]">
          <div className="font-bold text-3xl">All Products</div>
        </div>
      </section>
    </Layout>
  );
}

// export default
