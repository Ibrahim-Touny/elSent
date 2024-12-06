import { NavLink } from "react-router-dom";
import { Title, ProfileCard } from "../../routes";
import { User2 } from "../../screen/hero/Hero";
import { UseUserProfile } from "../../hooks/useUserProfile";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/features/authSlice";
import { UseRedirectLoggedOutUser } from "../../hooks/useRedirectLoggedOutUser";
import { useEffect } from "react";
import { TiEyeOutline } from "react-icons/ti";

export const UserList = () => {
  UseRedirectLoggedOutUser("/login");

  const dispatch = useDispatch();
  const { users, isLoading, isError, message } = useSelector((state) => state.auth);

  // Fetch all users when component mounts
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  // Show loading message while data is being fetched
  if (isLoading) return <p>Loading users...</p>;

  // Show error message if there is an error fetching the users
  if (isError) return <p>Error: {message}</p>;

  // Check if users array is valid and not empty
  if (!Array.isArray(users) || users.length === 0) {
    return <p>No users available</p>;
  }

  console.log(users); // To verify the users array content

  return (
    <section className="shadow-s1 p-8 rounded-lg">
      <div className="flex justify-between">
        <Title level={5} className="font-normal">
          User Lists
        </Title>
      </div>
      <hr className="my-5" />
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-5">
                S.N
              </th>
              <th scope="col" className="px-6 py-5">
                Username
              </th>
              <th scope="col" className="px-6 py-5">
                Email
              </th>
              <th scope="col" className="px-6 py-5">
                Role
              </th>
              <th scope="col" className="px-6 py-5">
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3 flex justify-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 capitalize">{user?.name}</td>
                <td className="px-6 py-4">{user?.email}</td>
                <td className="px-6 py-4 capitalize">{user?.role || "N/A"}</td>
                <td className="px-6 py-4">
                  <ProfileCard>
                    <img src={User2} alt="User Profile" />
                  </ProfileCard>
                </td>
                <td className="px-6 py-4">{user?.createdAt}</td>
                <td className="py-4 flex justify-end px-8">
                  <NavLink to="#" type="button" className="font-medium text-indigo-500">
                    <TiEyeOutline size={25} style={{ color: "indigo" }} />
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
