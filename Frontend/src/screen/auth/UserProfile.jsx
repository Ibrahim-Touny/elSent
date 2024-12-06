import React, { useEffect } from "react";
import { User2 } from "../hero/Hero";
import { Caption, Title, commonClassNameOfInput, PrimaryButton } from "../../components/common/Design";
import { UseRedirectLoggedOutUser } from "../../hooks/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/features/authSlice";

export const UserProfile = () => {
  //UseRedirectLoggedOutUser("/login");         //UseRedirect deh maarafsh malha

  const {user} = useSelector((state) => state.auth); //user hena lama beyhsalo print beybaa true or false bs howa aando beybaa array
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Dispatching getUserProfile...");
    dispatch(getUserProfile());
  }, [dispatch]);

  console.log("===============");   //elmafrod yetshalo
  console.log(user);
  console.log("===============");


  return (
    <>
      <section className="shadow-s1 p-8 rounded-lg">
        <div className="profile flex items-center gap-8">
          <img src={User2} alt="" className="w-24 h-24 rounded-full object-cover" />
          <div>
            <Title level={5} className="capitalize">
              {user?.name || "Default Name"}
            </Title>
            <Caption>{user?.email || "Default Email"}</Caption>
          </div>
        </div>
        <form>
          <div className="flex items-center gap-5 mt-10">
            <div className="w-full">
              <Caption className="mb-2">Full Name </Caption>
              <input type="search" value={user?.name || "Default Name"} className={`capitalize ${commonClassNameOfInput}`} placeholder="Sunil" readOnly />
            </div>
          </div>
          <div className="flex items-center gap-5 mt-10">
            <div className="w-1/2">
              <Caption className="mb-2">Contact Number</Caption>
              <input type="search" className={commonClassNameOfInput} placeholder="Contact Number" />
            </div>
            <div className="w-1/2">
              <Caption className="mb-2">Email</Caption>
              <input type="search" value={user?.email || "Default Email"} className={commonClassNameOfInput} placeholder="example@gmail.com" disabled />
            </div>
          </div>
          <div className="my-8">
            <Caption className="mb-2">Role</Caption>
            <input type="search" value={user?.role || "Default Role"} className={commonClassNameOfInput} />
          </div>
          <div className="my-8">
            <Caption className="mb-2">Profile Picture</Caption>
            <input type="search" className={commonClassNameOfInput} placeholder="Working" />
          </div>
          <PrimaryButton>Update Profile</PrimaryButton>
        </form>
      </section>
    </>
  );
};
