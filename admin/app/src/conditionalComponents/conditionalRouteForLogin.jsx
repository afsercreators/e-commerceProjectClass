import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function useConditionalForLogin(child) {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.token) {
      console.log("User is authenticated, redirecting to home");
      navigate("/");
    }
  }, [auth, navigate]); //

  return auth.token ? null : child;
}

export default useConditionalForLogin;
