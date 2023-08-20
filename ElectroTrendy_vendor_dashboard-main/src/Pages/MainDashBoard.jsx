import React from "react";
import { Route, Routes } from "react-router-dom";
import Aside from "../VendorDashBoard/Aside";
import AddProduct from "../VendorDashBoard/AddProduct";
import EditProduct from "../VendorDashBoard/EditProduct";
import Inbox from "../VendorDashBoard/Inbox";
import ProductList from "../VendorDashBoard/ProductList";
import LoginVendor from "../VendorDashBoard/LoginVendor";
export default function MainDashBoard() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginVendor />} />

        <Route
          path="/add"
          element={
            <>
              <Aside />
              <AddProduct />
            </>
          }
        />
        <Route
          path="/home/:id"
          element={
            <>
              <Aside />
              <EditProduct />
            </>
          }
        />
        <Route
          path="/inbox"
          element={
            <>
              <Aside />
              <Inbox />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Aside />
              <ProductList />
            </>
          }
        />
      </Routes>
    </>
  );
}
