import Footer from "../components/sections/Footer";
import propTypes from "prop-types";
import { StickyNavbar } from "../components/sections/StickyNavbar";
function MainLayout({ children }) {
  return (
    <>
      <StickyNavbar />
      {children}

      <Footer />

    </>
  );
}

export default MainLayout;

MainLayout.propTypes = {
  children: propTypes.node,
};
