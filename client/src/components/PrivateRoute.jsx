import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Assuming you're using Redux for auth
import PropTypes from "prop-types";

const PrivateRoute = (props) => {
  const { children } = props;
  const { currentUser } = useSelector((state) => state.user); // Example auth check
  return currentUser ? children : <Navigate to="/sign-in" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
