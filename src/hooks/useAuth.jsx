import { useSelector } from "react-redux";

function useAuth() {
  const userData = useSelector((state) => state.auth);
  return userData;
}

export default useAuth;
