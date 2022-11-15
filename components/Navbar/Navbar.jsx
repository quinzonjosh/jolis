import Link from "next/link";
import { GrSearch } from "react-icons/gr";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [hideNav, setHideNav] = useState(true);

  return (
    <header className="flex justify-center w-full gap-4 py-5 items-center border-b-2 border-black">
      <Link href="/">
        <a className="md:text-4xl text-2xl font-bold cursor-pointer font-heading text-primary">
          JOLI&apos;S
        </a>
      </Link>
      {/* search bar */}
      <div className="flex w-[60%]">
        <input
          type="search"
          name="Search here"
          placeholder="Search products"
          className={styles.searchbar}
        />
        <button className="border-2 border-l-0 border-white-accent-lavender rounded-r-lg p-1">
          <GrSearch className={styles.search_icon} />
        </button>
      </div>
      <button
        className="md:hidden block"
        onClick={() => {
          setHideNav((hideNav) => {
            return !hideNav;
          });
        }}
      >
        <GiHamburgerMenu />
      </button>

      <nav
        className={`${hideNav ? "-left-full" : "left-0"} ${styles.nav_links}`}
      >
        <ul className="flex flex-col md:flex-row gap-2 p-5">
          <button
            className="md:hidden block self-end"
            onClick={() => {
              setHideNav((hideNav) => {
                return !hideNav;
              });
            }}
          >
            <AiOutlineClose />
          </button>
          <li>
            <Link href="/">
              <a className="text-base  relative lg:top-0 md:top-6 top-0 lg:right-0 md:right-4 right-0">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <a className="text-base relative lg:top-0 md:top-6 top-0 lg:right-0 md:right-4 right-0">
                Products
              </a>
            </Link>
          </li>
          <li>
            <Link href="/branches">
              <a className="text-base relative lg:right-0 md:right-4 right-0">
                Get in touch
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
