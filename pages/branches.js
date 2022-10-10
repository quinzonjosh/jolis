import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner"
import Image from "next/image";
import Link from "next/link";

const branches = () => {
  //This is so janky...

  return <Layout>
      <Banner title="Get in touch with us" />
      <section className="border-b-2 border-black">
        <div className="container">
            <p className="float-left relative top-12 left-10 mb-10 text-2xl font-bold">
              Espana Branch
            </p>
            <p className="float-left relative top-12 left-10 mb-10 clear-left text-xl font-bold">
              Reach Us
            </p>
            <p className="float-left relative top-12 left-10 mb-10 clear-left">
              Facebook
            </p>
            <Link href="https://www.facebook.com/Jolis-Espa%C3%B1a-100338068399786">
              <p className="float-left relative top-9 left-20 mb-10 hover:text-blue-400">
                https://www.facebook.com/Jolis-
                <br />
                Espa%C3%B1a-100338068399786
              </p>
            </Link>
            <p className="float-left relative top-8 left-10 mb-10 clear-left">
              Phone
            </p>
            <p className="float-left relative top-8 left-12 ml-14 mb-10">
              09xx xxxx xxx
            </p>
            <p className="float-left relative top-8 left-10 mb-10 clear-left">
              Address
            </p>
            <p className="float-left relative top-5 left-10 ml-12 mb-10">
                1567-69 España Blvd. Sampaloc
                <br />
                Mla. 1000 Manila, Philippines
              </p>
            <div className='relative lg:w-2/5 lg:h-96 lg:left-0 lg:mr-10 lg:my-10 md:w-2/5 md:h-56 
            md:left-10 md:my-6 w-2/5 h-24 left-3 mr-6 ml-auto my-3'>
                <Image layout='fill' priority="true" src="/images/default.jpg" alt="branch image" />
            </div>
        </div>
      </section>
      <section>
        <div className="container">
          <p className="float-right relative right-96 mr-16 top-12 mb-10 text-2xl font-bold">
              P.Noval Branch
          </p>
          <p className="float-right clear-right relative right-96 mr-16 top-12 mb-10 text-xl font-bold">
              Reach Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p className="float-right clear-right relative right-96 mr-16 top-12 mb-10">
              Facebook&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <Link href="https://www.facebook.com/profile.php? id=100057207919555">
              <p className="float-right relative left-1 top-9 mb-10 hover:text-blue-400">
                https://www.facebook.com/profile.php?
                <br />
                id=100057207919555
              </p>
          </Link>
          <p className="float-right clear-right relative right-96 mr-16 top-8 mb-10">
              Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p className="float-right relative right-66 mr-40 top-8 mb-10">
              09xx xxxx xxx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p className="float-right clear-right relative right-96 mr-16 top-8 mb-10">
              Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p className="float-right relative right-14 top-5 mb-10">
                1567-69 España Blvd. Sampaloc
                <br />
                Mla. 1000 Manila, Philippines
              </p>
          <div className='relative lg:w-2/5 lg:h-96 lg:right-0 lg:ml-10 lg:my-10 md:w-2/5 md:h-56 
            md:left-2 md:my-6 w-2/5 h-24 right-3 ml-6 mr-auto my-3'>
                <Image layout='fill' priority="true" src="/images/default.jpg" alt="branch image" />
            </div>
        </div>
      </section>
    </Layout>;
};

export default branches;
