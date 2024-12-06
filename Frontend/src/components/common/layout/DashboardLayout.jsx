import { useEffect } from "react";
import { Sidebar } from "../../admin/SideBar";
import { Container } from "../Design";
import { getUserProfile } from "../../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UseUserProfile } from "../../../hooks/UseUserProfile";


export const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { role, isLoggedIn} = UseUserProfile();
  
  useEffect(() => {
    if(isLoggedIn){
      dispatch(getUserProfile()); 
    }
  }, [location, dispatch, isLoggedIn]);

  return (
    <>
      <div className="mt-32">
        <Container className="flex">
          <div className={`${role === "admin" ? "h-[110vh]" : role === "seller" ? "h-[80vh]" : "h-[80vh]"} w-[25%] shadow-s1 py-8 p-5 rounded-lg`}>
            <Sidebar role={role} />
          </div>
          <div className="w-[75%] px-5 ml-10 rounded-lg">{children}</div>
        </Container>
      </div>
    </>
  );
};