import React from "react";
import { useSelector } from "react-redux";
import Aside from "./components/Aside";
import Demo from "./components/Demo";
import Nav from "./components/Nav";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Wrapper from "./commancomponent/Wrapper";
import Home from "./pages/Home";
import AddMember from "./pages/AddMember";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-members" element={<AddMember />} />
      <Route path="/admin-login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
