import React, { useState, useEffect } from "react";
import Category from "../Category/Category";
import Pagination from "../Pagination/Pagination";
import Link from "next/link";
import styles from "./CategoryView.module.css";
import { GrSearch } from "react-icons/gr";


const CategoryView = ({ categoryList }) => {
  const CATEGORIES_PER_PAGE = 12;
  const [pageNumber, setPageNumber] = useState(1);
  const CATEGORY_CARDS = categoryList.map((item) => {
    return (
      <Link href="/categories" key={item.id}>
        <Category
          categoryName={item.name}
          imageLink={item.image}
          slug={item.slug}
        />
      </Link>
    );
  });
  const [categories, setCategories] = useState([]);
  const numPages = Math.ceil(CATEGORY_CARDS.length / CATEGORIES_PER_PAGE);

  useEffect(() => {
    const startPage = CATEGORIES_PER_PAGE * (pageNumber - 1);
    const endPage = CATEGORIES_PER_PAGE * pageNumber;
    setCategories(CATEGORY_CARDS.slice(startPage, endPage));
  }, [pageNumber]);

  return (
    <section className="py-6 px-5">
      <div className="container mx-auto flex flex-col">
        <div className="flex justify-center w-[100%]">
            <form className="flex justify-center w-[90%] lg:w-[50%]">
              <input
              type="search"
              name="Search here"
              placeholder="Search a category"
              className={styles.searchbar}
              />
              <button className="border-2 border-l-0 bg-white border-white-accent-lavender rounded-r-lg p-1">
                <GrSearch className={styles.search_icon} />
              </button>
            </form>
        </div>
        
        <div className="grid md:gap-5 sm:gap-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:px-10 py-10">
          {categories}
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
