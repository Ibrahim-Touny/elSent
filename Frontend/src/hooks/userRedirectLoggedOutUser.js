import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../redux/services/authFeature";

export const UseRedirectLoggedOutUser = (path) => {
  const navigate = useNavigate();

  useEffect(() => {
    let isLoggedIn;

    const redirectLoggedOutUser = async () => {
      try {
        isLoggedIn = await authService.getLogInStatus();
      } catch (error) {
        console.log(error.message);
      }

      if (!isLoggedIn) {
        navigate(path);
        return;
      }
    };

    redirectLoggedOutUser();
  }, [path, navigate]);
};