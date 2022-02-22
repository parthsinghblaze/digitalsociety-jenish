import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { adminLoginFunction } from "../combineRedux/adminloginredux/action";

function AdminLogin() {
  const [adminLoginFormValue, setAdminLoginFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const isAdminLogin = useSelector((state) => state.admin.isAdminLogin);

  useEffect(() => {
    console.log("Hey");
    if (isAdminLogin) {
      navigate("/");
    }
  }, [isAdminLogin]);

  const dispatch = useDispatch();

  function handlingChange(e) {
    const { value, name } = e.target;
    setAdminLoginFormValue({ ...adminLoginFormValue, [name]: value });
  }

  function handlingSumit(e) {
    e.preventDefault();
    dispatch(adminLoginFunction(adminLoginFormValue));
  }

  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-md-6 offset-md-3 py-5">
          <h3 className="text-center text-primary">Admin Login</h3>
          <form action="">
            <input
              className="form-control mb-2"
              type="email"
              placeholder="email"
              name="email"
              value={adminLoginFormValue.email}
              onChange={handlingChange}
            />
            <input
              className="form-control mb-2"
              type="password"
              placeholder="password"
              name="password"
              value={adminLoginFormValue.password}
              onChange={handlingChange}
            />
            <button className="btn btn-primary w-100" onClick={handlingSumit}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
