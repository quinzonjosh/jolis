import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import links from "../../data/navLinks.json";
import styles from "./Footer.module.css";

const Footer = () => {
  const tempProducts = [
    {
      name: "Architecture",
      link: "/categories/architecture",
    },
    {
      name: "School supplies",
      link: "/categories/school-supplies",
    },
    {
      name: "Drawing supplies",
      link: "/categories/drawing-supplies",
    },
    {
      name: "Tables",
      link: "/categories",
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className={styles.footer_wrapper}>
        <div className="font-bold text-[2rem] md:text-[3rem]">JOLI&apos;S</div>
        <div className="relative bottom-4">
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

        <div className="relative bottom-2">
          <span className="font-bold text-lg">Our Products</span>
          <ul>
            {tempProducts.map(({ name, link }) => {
              return (
                <li key={name}>
                    <a href={link} className="font-light hover:underline">{name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative bottom-1">
          <span className="font-bold text-lg">Contact us</span>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="text-2xl">
              <FaFacebookSquare />
            </span>
            <div>
              <Link href="https://www.facebook.com/jolis.espana">
                <a className="font-bold font-heading hover:underline">
                  jolis.españa
                </a>
              </Link>
              <p className="text-sm text-white-accent-ghost">Facebook</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-2xl">
              <FaFacebookSquare />
            </span>
            <div>
              <Link href="https://www.facebook.com/jolis.pnoval">
                <a className="font-bold font-heading hover:underline">
                  jolis.pnoval
                </a>
              </Link>
              <p className="text-sm text-white-accent-ghost">Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
