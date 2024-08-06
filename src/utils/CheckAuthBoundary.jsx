import { useDispatch } from "react-redux";
import { useGetUserDataQuery } from "../api/authApi";
import { addUserData } from "../features/auth/authSlice";
import PropTypes from "prop-types";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

function CheckAuthBoundry({ children }) {
  const dispatch = useDispatch();
  const { id } = useAuth();

  const { data, error, isLoading } = useGetUserDataQuery(id, {
    skip: !id,
  });

  useEffect(() => {
    if (data) {
      const userData = {
        ...data,
        isAuthenticated: true,
      };
      dispatch(addUserData(userData));
    }
  }, [data, dispatch]); // Only run this effect when `data` or `dispatch` changes

  // Handle loading states
  if (isLoading) {
    return (
      <>
        <div className="flex justify-center flex-col items-center min-h-screen">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-500 animate-pulse"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l2 2m-4 0l2-2V8m0 0a4 4 0 00-4 4v4m0-4a4 4 0 014-4m0 0a4 4 0 014 4v4a4 4 0 01-4 4m0-8a4 4 0 00-4 4v4a4 4 0 004 4 4 4 0 004-4v-4a4 4 0 00-4-4z"
                />
              </svg>
            </div>
          </div>
          <div>&nbsp;Loading</div>
        </div>
      </>
    );
  }

  if (error) {
    console.error("User data error:", error);
  }

  // Render children only when the component is ready
  return <>{children}</>;
}

export default CheckAuthBoundry;

CheckAuthBoundry.propTypes = {
  children: PropTypes.node,
};
