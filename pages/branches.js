import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner"
import Image from "next/image";
import Link from "next/link";
import BranchSection from "../components/BranchSection/BranchSection";

const branches = () => {
  return <Layout>
      <Banner title="Get in touch with us" />

      <BranchSection branchName="Espana Branch" 
      facebookLink="https://www.facebook.com/Jolis-Espa%C3%B1a-100338068399786"
      address="1567-69 España Blvd. Sampaloc Mla. 1000 Manila, Philippines"
      reverse={false}/>
          
      <BranchSection branchName="P.Noval Branch"
      facebookLink="https://www.facebook.com/profile.php?id=100057207919555"
      address="1567-69 España Blvd. Sampaloc Mla. 1000 Manila, Philippines"
      reverse={true}/>
    </Layout>;
};

export default branches;
