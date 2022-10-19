import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { GrSearch } from "react-icons/gr";
import { useRouter } from "next/router";

export default function ProductListing() {
  const router = useRouter();
  const data = router.query;

  return (
    <Layout className="w-full">
      <section className="text-4xl font-bold text-center p-10 border-b border-black">
        {data.categoryName != null ? data.categoryName : "Product Listing"}
      </section>

      <section className="flex py-10">
        {/* left panel */}
        <div className="md:w-[20%]">
          {/* search bar */}
          <div className="flex md:w-[350px] m-auto mb-4">
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
          {/* browse type list */}
          <div className="md:w-[350px] m-auto border border-black p-2 mb-4">
            <div className="text-3xl pb-2">Browse Type</div>
            <ul className="flex flex-col gap-2 text-2xl">
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
          {/* browse brand list */}
          <div className="md:w-[350px] m-auto border border-black p-2 mb-4">
            <div className="text-3xl pb-2">Browse Brand</div>
            <ul className="flex flex-col gap-2 text-2xl">
              <li>
                <Link href="/">
                  <a>All brands</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>mongol</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Faber Castell</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Best-Buy</a>
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
          {/* right panel */}
          <div></div>
        </div>
      </section>
    </Layout>
  );
}
