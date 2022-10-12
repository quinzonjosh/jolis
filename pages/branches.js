import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import Image from "next/image";
import Link from "next/link";
import BranchSection from "../components/BranchSection/BranchSection";

const branches = () => {
  return (
    <Layout>
      <Banner title="Get in touch with us" />

      <BranchSection
        branchName="Espana Branch"
        facebookLink="https://www.facebook.com/jolis.espana"
        address="1567-69 España Blvd. Sampaloc Mla. 1000 Manila, Philippines"
        mapFirst={false}
      />

      <BranchSection
        branchName="P.Noval Branch"
        facebookLink="https://www.facebook.com/jolis.pnoval"
        address="1567-69 España Blvd. Sampaloc Mla. 1000 Manila, Philippines"
        mapFirst={true}
      />
    </Layout>
  );
};

export default branches;
