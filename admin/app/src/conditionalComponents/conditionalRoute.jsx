import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function useConditional(child) {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  console.log(852, auth);

  if (!auth) {
    navigate("/login");
    return null;
  }

  return child;
}

export default useConditional;
