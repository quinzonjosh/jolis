import Image from "next/image";
import Link from "next/link";

const Category = ({ imageLink, categoryName, slug }) => {
  return (
    <Link href={`/categories/${slug}`}>
      <div className="hover:cursor-pointer hover:scale-110 duration-300 transition-all rounded-xl shadow-lg w-[90%] mx-auto ">
        <div className="flex flex-col items-center text-center justify-center mx-auto w-[90%]">
          <div className="relative w-full h-64 mt-4 mb-2 aspect-h-1 aspect-w-1">
            <Image
              layout="fill"
              src={imageLink}
              alt="category image"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <p className="mb-3 text-xl font-bold text-secondary">
            {categoryName}
          </p>
        </div>
      </div>
    </Link>
  );
};

Category.defaultProps = {
  imageLink: "/images/default.jpg",
};

export default Category;
