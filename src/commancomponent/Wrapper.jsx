import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Aside from "../components/Aside";
import Nav from "../components/Nav";

function Wrapper({ children }) {
  const isAdminLogin = useSelector((state) => state.admin.isAdminLogin);

  if (!isAdminLogin) {
    return <Navigate to="/admin-login" />;
  }

  return (
    <>
      <Nav />
      <Aside />
      <div className="content-wrapper">
        <div className="content"> {children} </div>
      </div>
    </>
  );
}

export default Wrapper;
