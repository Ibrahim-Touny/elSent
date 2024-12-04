import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout,ProductsDetails, Register,Login } from "./routes/index.js";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
