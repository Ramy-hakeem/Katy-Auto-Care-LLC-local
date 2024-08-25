import PropTypes from "prop-types";
import Home from "../pages/guest/Home";
import useAuth from "../hooks/useAuth";

function RoleBoundry({ children, page }) {
  const { state } = useAuth();

  if (state) {
    if (page.afterAuth) {
      return <>{children}</>;
    } else {
      return <Home />;
    }
  } else {
    if (page.role === "guest") {
      return <>{children}</>;
    } else {
      return <Home />;
    }
  }
}

RoleBoundry.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.shape({
    role: PropTypes.string.isRequired,
    afterAuth: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RoleBoundry;
