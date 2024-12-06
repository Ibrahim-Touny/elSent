import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, selectIsLoggedIn } from "../redux/features/authSlice";
import { useEffect, useState } from "react";

export const UseUserProfile = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const { user, isloading } = useSelector((state) => state.auth);

    // Correctly using useState to manage role
    const [role, setRole] = useState(() => user?.role || JSON.parse(localStorage.getItem("user"))?.role);

    useEffect(() => {
        if (isloading && !user) {
            dispatch(getUserProfile());
        } else if (user) {
            setRole(user.role);
        }
    }, [dispatch, isLoggedIn, user, isloading]);

    // Optional: You may not need this if the role is already set in the first useEffect
    useEffect(() => {
        if (user) {
            setRole(user.role);
        }
    }, [user]);

    return { role, isLoggedIn, isloading };
};
