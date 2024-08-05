import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import propTypes from "prop-types";
function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;

MainLayout.propTypes = {
  children: propTypes.node,
};
