import Button from "../Button/Button";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Navbar from "../Navbar/Navbar";

const Layout = ({ page, children }) => {
  return (
    <>
      <Navbar page={page} />
      <main> {children} </main>
      <Footer />
      {/* <Category /> */}
    </>
  );
};

export default Layout;
