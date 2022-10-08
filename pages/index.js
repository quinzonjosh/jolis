import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout className="w-full">
      <section className="text-4xl font-bold text-center p-20 border-b-2 border-black">
        Welcome to Joli's
      </section>

      <section className="py-8 border-b-2 border-black">
        <div className="text-2xl font-bold pl-[5%] py-[3%]">
          Featured Products
        </div>
      </section>

      <section className="flex flex-row border-b-2 border-black">
        <div className="flex flex-col w-[50%] border-r-2 border-black px-[5%] pt-[5%] pb-[10%] items-center">
          <div className="text-2xl font-bold text-center py-[5%]">
            Some Catchy Heading Here
          </div>
          <button className="border-2 p-1 border-black w-[55%]">
            See our products
          </button>
        </div>
        <div className="flex flex-col w-[50%] border-black px-[5%] pt-[5%] pb-[10%] items-center">
          <div className="text-2xl font-bold text-center py-[5%]">
            Visit our stores
          </div>
          <button className="border-2 p-1 border-black w-[55%]">
            Check out our branch locations
          </button>
        </div>
      </section>
    </Layout>
  );
}
