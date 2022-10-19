import React, { useState, useEffect } from "react";
import Category from "../Category/Category";
import Pagination from "../Pagination/Pagination";
import Link from "next/link";

const CategoryView = ({ categoryList }) => {
  const CATEGORIES_PER_PAGE = 12;
  const [pageNumber, setPageNumber] = useState(1);
  const CATEGORY_CARDS = categoryList.map((item) => {
    return (
      <Link href="/categories" key={item.name}>
        <Category categoryName={item.name} imageLink={item.image} slug={item.slug} />
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
    <section className="py-6">
      <div className="container mx-auto">
        <div className="grid gap-5 lg:grid-cols-4 lg:grid-rows-3 md:grid-cols-3 md:grid-rows-4 grid-cols-1 py-10">
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
