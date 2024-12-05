import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UseRedirectLoggedOutUser = (path) => {
  const navigate = useNavigate();

  useEffect(() => {
    let isLoggedIn;

    const redirectLoggedOutUser = async () => {
      try {
        isLoggedIn = ""; // get user status of user
      } catch (error) {
        console.log(error.message);
      }

      if (isLoggedIn) {
        navigate(path);
        return;
      }
    };

    redirectLoggedOutUser();
  }, [path, navigate]);
};