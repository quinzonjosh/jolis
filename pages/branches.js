import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import BranchSection from "../components/BranchSection/BranchSection";
import SEO from '../components/SEO';

const branches = () => {
  const espanaBranch = {
    __html:
      '<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=1567-69 España Blvd. Sampaloc Mla. 1000 Manila, Philippines&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://formatjson.org/">format json</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div>'
  };
  const pnovalBranch = {
    __html:
      '<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=957-963 Padre Noval St, 469 Z-46 Sampaloc, Manila, 1008 Metro Manila&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://formatjson.org/">format json</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div>'
  };

  return (
    <Layout page="Get in touch">
      <SEO title="Get in touch with us" slug="branches" />
      <Banner title="Get in touch with us" />

      <BranchSection
        branchName="España Branch"
        facebookLink="https://www.facebook.com/jolis.espana"
        address="1567-69 España Blvd. Sampaloc Mla. 1000 Manila, Philippines"
        mapFirst={false}
        mapEmbed={espanaBranch}
      />

      <BranchSection
        branchName="P.Noval Branch"
        facebookLink="https://www.facebook.com/jolis.pnoval"
        address="957-963 Padre Noval St, 469 Z-46 Sampaloc, Manila, 1008 Metro Manila"
        mobile="0287-366361"
        mapFirst={true}
        mapEmbed={pnovalBranch}
      />
    </Layout>
  );
};

export default branches;
