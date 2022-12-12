import React, { useState, useEffect, useRef } from "react";
import Category from "../Category/Category";
import Pagination from "../Pagination/Pagination";
import Link from "next/link";
import styles from "./CategoryView.module.css";
import { GrSearch } from "react-icons/gr";
import axios from "axios";
import { GiMountedKnight } from "react-icons/gi";
import { TailSpin } from "react-loader-spinner";


const CategoryView = ({ categoryList, total }) => {

  //Pagination Handler
  const CATEGORIES_PER_PAGE = 12;
  const [pageNumber, setPageNumber] = useState(1);
  const [categories, setCategories] = useState(categoryList);
  const [numPages, setNumPages] = useState(Math.ceil(total / CATEGORIES_PER_PAGE));
  const mounted = useRef(true);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setQuery(event.target.search.value);
    setLoading(true);
    const { data, status } = await axios.get("/api/search/categories", { params: { type: "category", limit: CATEGORIES_PER_PAGE, pageNumber, query:event.target.search.value } });
    setCategories(data.categories);
    setNumPages(data.numPages);
    setPageNumber(1);
    setLoading(false);
  }
  useEffect(() => {
    const fetchData = async () => {
      if (mounted.current) {
        mounted.current = false;
        return;
      }
      setLoading(true);
      const { data, status } = await axios.get("/api/search/categories", { params: { type: "category", limit: CATEGORIES_PER_PAGE, query, pageNumber } });
      setLoading(false);
      setCategories(data.categories);
      // console.log(data.categories);
    };
    fetchData();
  }, [pageNumber]);

  return (

    <section className="py-6 px-5">

      <div className="container mx-auto flex flex-col">
        <div className="flex justify-center w-[100%]">
          <form className="flex justify-center w-[90%] lg:w-[50%]" onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              placeholder="Search a category"
              className={styles.searchbar}
            />
            <button className="border-2 border-l-0 bg-white border-white-accent-lavender rounded-r-lg p-1">
              <GrSearch className={styles.search_icon} />
            </button>
          </form>
        </div>

        <div className="grid md:gap-5 sm:gap-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:px-10 py-10">
          {loading ?
            (
              <TailSpin
                height="80"
                width="80"
                color="#474B60"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="mx-auto col-span-4 "
                visible={loading}
              />
            ) : (categories.map((item) => {
              return (
                <Link href="/categories" key={item.id}>
                  <Category
                    categoryName={item.name}
                    imageLink={item.image}
                    slug={item.slug}
                  />
                </Link>
              );
            })

            )
          }
        </div>
        <Pagination
          numPages={numPages}
          currentPage={pageNumber}
          pageChanger={setPageNumber}
        />
      </div>
    </section>
  );
};

export default CategoryView;
