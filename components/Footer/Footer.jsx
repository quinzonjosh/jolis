import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import links from "../../data/navLinks.json";
import styles from "./Footer.module.css";

const Footer = () => {
  const tempProducts = [
    {
      name: "Architecture",
      link: "/",
    },
    {
      name: "School supplies",
      link: "/",
    },
    {
      name: "Drawing supplies",
      link: "/",
    },
    {
      name: "Tables",
      link: "/",
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className={styles.footer_wrapper}>
        <div className="font-bold text-[2rem] md:text-[3rem]">JOLI&apos;S</div>
        <div>
          <span className="font-bold text-lg">Overview</span>
          <ul>
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link href={link}>
                    <a className="font-light hover:underline">{name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <span className="font-bold text-lg">Our products</span>
          <ul>
            {tempProducts.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link href={link}>
                    <a className="font-light">{name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <span className="font-bold text-lg">Contact us</span>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="text-2xl">
              <FaFacebookSquare />
            </span>
            <div>
              <p className="font-bold font-heading">Facebook:</p>
              <Link href="https://www.facebook.com/jolis.espana">
                <a className="text-sm text-white-accent-ghost hover:underline">
                  jolis.españa
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-2xl">
              <FaFacebookSquare />
            </span>
            <div>
              <p className="font-bold font-heading">Facebook:</p>
              <Link href="https://www.facebook.com/jolis.pnoval">
                <a className="text-sm text-white-accent-ghost hover:underline">
                  jolis.pnoval
                </a>
              </Link>
            </div>
          </div>
          {/* 
          <div className="md:flex-none md:justify-start flex justify-center">
            <Link href="https://www.facebook.com/jolis.espana">
              <a>
              </a>
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
