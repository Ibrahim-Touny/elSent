import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  Home,
  Layout,
  ProductsDetails,
  Register,
  Login,
  Dashboard,
  UserProfile, 
  PrivateRoute, 
  DashboardLayout, 
  AddProduct, 
  UserList,
  createCategory,
  UpdateCategory,
  Categorylist,
 } from "./routes/index.js";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux';
import { getLogInStatus } from './redux/features/authSlice.js';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getLogInStatus());
  }, [dispatch]);

  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout>
              <Home/>
            </Layout>
          }
        />
         <Route
            path="/details"
            element={
              <Layout>
                <ProductsDetails />
              </Layout>
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <Layout>
                  <DashboardLayout>
                    <AddProduct />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
        <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Layout>
                  <DashboardLayout>
                    <UserProfile />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />        
          <Route
            path="/userlist"
            element={
              <PrivateRoute>
                <Layout>
                  <DashboardLayout>
                    <UserList />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
           <Route
            path="/category"
            element={
              <PrivateRoute>
                <Layout>
                  <DashboardLayout>
                    <Categorylist />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/category/create"
            element={
              <PrivateRoute>
                <Layout>
                  <DashboardLayout>
                    <createCategory/>
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/category/update/:id"
            element={
              <PrivateRoute>
                <Layout>
                  <DashboardLayout>
                    <UpdateCategory />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
