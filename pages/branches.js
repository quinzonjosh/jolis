import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import Image from "next/image";
import Link from "next/link";
import BranchSection from "../components/BranchSection/BranchSection";

const branches = () => {
  const espanaBranch = {__html: '<div class="mapouter"><div class="gmap_canvas"><iframe width="600px" height="400px" id="gmap_canvas" src="https://maps.google.com/maps?q=1567-69%20Espa%C3%B1a%20Blvd.%20Sampaloc%20Mla.%201000%20Manila,%20Philippines&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:absolute;text-align:right;height:100%;width:100%;top:0;left:0;border:0}</style><a href="https://www.embedgooglemap.net">how to add a google map to wordpress</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div></div>'};

  return (
    <Layout>
      <Banner title="Get in touch with us" />

      <BranchSection
        branchName="España Branch"
        facebookLink="/jolis.espana"
        address="1567-69 España Blvd. Sampaloc Mla. 1000 Manila, Philippines"
        mapFirst={false}
        mapEmbed={espanaBranch}
      />

      <BranchSection
        branchName="P.Noval Branch"
        facebookLink="/jolis.pnoval"
        address="1567-69 España Blvd. Sampaloc Mla. 1000 Manila, Philippines"
        mapFirst={true}
        mapEmbed={espanaBranch}
      />
    </Layout>
  );
};

export default branches;
