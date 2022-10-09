import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex justify-evenly w-full items-center p-10 border-t-2 border-black">
      <div className="font-bold">JOLIS</div>

      <div className="">
        <span className="font-bold">Overview</span>
        <ul>
          <li>
            <Link href="">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Our branches</a>
            </Link>
          </li>
          <li>
            <Link href="">
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
        <FaFacebookSquare />
      </div>
    </section>
  );
};

export default Footer;
