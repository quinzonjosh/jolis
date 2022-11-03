import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex md:flex-row flex-col justify-evenly w-full items-center text-center p-10 gap-2 border-t-2 border-black">
      <div className="font-bold text-[2rem] md:text-[3rem]">JOLI&apos;S</div>

      <div className="">
        <span className="font-bold">Overview</span>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="/branches">
              <a>Our branches</a>
            </Link>
          </li>
          <li>
            <Link href="/branches">
              <a>Contact us</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="">
        <span className="font-bold">Our products</span>
        <ul>
          <li>
            <Link href="">
              <a>Architecture</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>School supplies</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Drawing supplies</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Tables</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <span className="font-bold">Contact us</span>
        <div className="md:flex-none md:justify-start flex justify-center">
          <Link href="https://www.facebook.com/jolis.espana">
            <a>
              <FaFacebookSquare />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
