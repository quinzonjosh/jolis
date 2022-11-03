import Image from "next/image";
import Link from "next/link";

const Category = ({ imageLink, categoryName, slug }) => {
  return (
    <Link href={`/categories/${slug}`}>
      <div className="category_container text-center flex flex-col items-center hover:font-bold hover:cursor-pointer hover:text-blue-400">
        <div className="relative lg:w-80 lg:h-80 md:w-56 md:h-56 w-40 h-40">
          <Image
            layout="fill"
            priority={true}
            src={imageLink}
            alt="category image"
          />
        </div>
        <p>{categoryName}</p>
      </div>
    </Link>
  );
};

Category.defaultProps = {
  imageLink: "/images/default.jpg",
};

export default Category;
