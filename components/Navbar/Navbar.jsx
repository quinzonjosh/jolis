import Link from "next/link";
import { GrSearch } from "react-icons/gr";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [hideNav, setHideNav] = useState(true);

  return (
    <section className="flex justify-center w-full gap-2 py-5 items-center border-b-2 border-black">
      <Link href="/">
        <span className="md:text-4xl text-2xl font-bold cursor-pointer">
          <a>JOLI&apos;S</a>
        </span>
      </Link>
      {/* search bar */}
      <div className="flex w-[60%]">
        <input
          type="search"
          name="Search here"
          placeholder="Search products"
          className="w-[100%] border-2 border-black border-r-0 p-2 text-xs"
        />
        <button className="border-2 border-l-0 border-black p-1">
          <GrSearch />
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

      <div
        className={`${hideNav ? "-left-full" : "left-0"} ${styles.nav_links}`}
      >
        <ul className="flex flex-col md:flex-row gap-2 p-5 text-xl">
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
              <a className="lg:text-xl md:text-base text:xl relative lg:top-0 md:top-6 top-0 lg:right-0 md:right-4 right-0">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <a className="lg:text-xl md:text-base text:xl relative lg:top-0 md:top-6 top-0 lg:right-0 md:right-4 right-0">
                Products
              </a>
            </Link>
          </li>
          <li>
            <Link href="/branches">
              <a className="lg:text-xl md:text-base text:xl relative lg:right-0 md:right-4 right-0">
                Get in touch
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
