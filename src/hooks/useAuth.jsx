import { useSelector } from "react-redux";

function useAuth() {
  const userData = useSelector((state) => state.auth.userData);
  return userData;
}

export default useAuth;
