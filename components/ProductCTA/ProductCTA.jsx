import Link from "next/link";
import Image from "next/image";

const ProductCTA = ({image, image2}) => {
  return (
    <section>
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col relative md:w-[50%] px-[5%] pt-[5%] pb-[10%] items-center">
            <div className="text-3xl text-white-accent-ghost font-bold text-center py-[5%] z-10">
              Some Catchy Heading Here
            </div>
            <button className="border border-secondary bg-secondary rounded-xl hover:border-white-accent-lavender p-1 w-[55%] z-10">
              <Link href="/categories">
                <a className="text-white-accent-ghost"> See our products </a>
              </Link>
            </button>
            <div className="w-full bg-primary opacity-70 h-full z-[1] absolute left-0 top-0"/>
            <Image className="z-0" src={image2} layout="fill" objectFit="cover" />
          </div>

          <div className="flex flex-col relative md:w-[50%] px-[5%] pt-[5%] pb-[10%] items-center">
            <div className="text-3xl text-white-accent-ghost font-bold text-center py-[5%] z-10">
              Visit our stores
            </div>
            <button className="border border-secondary bg-secondary rounded-xl hover:border-white-accent-lavender p-1 w-[55%] z-10">
              <Link href="/branches">
                <a className="text-white-accent-ghost"> Check out our branch locations </a>
              </Link>
            </button>
            <div className="w-full bg-primary opacity-70 h-full z-[1] absolute left-0 top-0"/>
            <Image className="z-0" src={image2} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

ProductCTA.defaultProps = {
  image2: "/images/default-banner.jpg",
};

export default ProductCTA;
