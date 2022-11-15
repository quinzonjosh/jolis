import Link from "next/link";
import useScrollPosition from "../../hooks/useScrollPosition";

import styles from "./Navbar.module.css";

import { GrSearch } from "react-icons/gr";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import links from "../../data/navLinks.json";

const Navbar = ({ page }) => {
  const [hideNav, setHideNav] = useState(true);
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={styles.navbar}
      data-style={scrollPosition > 0 ? "scroll" : "initial"}
    >
      <div className="flex justify-center w-full gap-6 md:gap-0 py-5 items-center">
        <Link href="/">
          <a className={styles.nav_logo}>JOLI&apos;S</a>
        </Link>
        {/* search bar */}
        <div className="flex w-[50%] lg:w-[55%]">
          <input
            type="search"
            name="Search here"
            placeholder="Search products"
            className={styles.searchbar}
          />
          <button className="border-2 border-l-0 bg-white border-white-accent-lavender rounded-r-lg p-1">
            <GrSearch className={styles.search_icon} />
          </button>
        </div>
        <button
          className={styles.hamburger_menu}
          onClick={() => {
            document.body.style.overflow = "hidden";
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
          <ul className="flex flex-col md:flex-row md:justify-center p-5 md:p-0 gap-6">
            <button
              className="md:hidden text-2xl block self-end text-primary"
              onClick={() => {
                document.body.style.overflow = "scroll";
                setHideNav((hideNav) => {
                  return !hideNav;
                });
              }}
            >
              <AiOutlineClose />
            </button>
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link href={link}>
                    <a
                      className={`${page === name ? styles.nav_active : ""} ${
                        styles.nav_link
                      }`}
                    >
                      {name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
