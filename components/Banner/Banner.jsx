import Image from "next/image";

const Banner = ({ title, image }) => {
  return (
    <section className="text-4xl font-bold text-center p-20 relative max-h-[300px] h-[100vh] overflow-hidden">
      <div className="w-full bg-primary opacity-70 h-[100vh] z-[1] absolute left-0 top-0"></div>
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
      <div className="relative z-[2] text-white h-full flex items-center justify-center text-center">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

Banner.defaultProps = {
  image: "/images/default-banner.jpg",
};
export default Banner;
