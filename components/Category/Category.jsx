import Image from "next/image";
import Link from "next/link";

const Category = ({ imageLink, categoryName, slug }) => {
  return (
    <Link href={`/categories/${slug}`}>
      <div className="category_container border-2 text-center flex flex-col items-center 
      hover:cursor-pointer hover:bg-white-accent-lavender rounded-xl shadow-lg">
        <div className="relative lg:w-80 lg:h-80 md:w-56 md:h-56 w-40 h-40 mt-4 mb-2">
          <Image
            layout="fill"
            priority={true}
            src={imageLink}
            alt="category image"
          />
        </div>
        <p className="mb-3 text-xl font-bold text-secondary font-['Work_sans']">{categoryName}</p>
      </div>
    </Link>
  );
};

Category.defaultProps = {
  imageLink: "/images/default.jpg",
};

export default Category;
