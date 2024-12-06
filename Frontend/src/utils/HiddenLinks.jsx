//dh elmafrod yekon .js bs mesh rady mesh aaref leh f khaleto .jsx

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/features/authSlice";

export const ShowOnLogin = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (isLoggedIn) {
        return <>{children}</>
    }
    return null;
}

export const ShowOnLogout = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (!isLoggedIn) {
        return <>{children}</>
    }
    return null;
};