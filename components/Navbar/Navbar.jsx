import Link from "next/link";
import { GrSearch } from "react-icons/gr";

const Navbar = () => {
  return (
    <section className="flex justify-center w-full gap-2 py-5 items-center border-b-2 border-black">
      <span className="text-3xl font-bold">JOLI'S</span>

      <div className="flex w-[60%]">
        <input
          type="search"
          name="Search here"
          className="w-[100%] border-2 border-black border-r-0 p-2 text-xs"
        />
        <button className="border-2 border-l-0 border-black p-1">
          <GrSearch />
        </button>
      </div>

      <ul className="flex flex-row gap-2">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Get in touch</a>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
