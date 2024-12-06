//1:28:30 error in this file so in UserProfile and Login as well elcode maktob w bayen fe 1:49:06

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