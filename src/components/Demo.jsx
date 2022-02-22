import React from "react";
import { useSelector } from "react-redux";
import Wrapper from "../commancomponent/Wrapper";

function Demo() {
  let isLogin = useSelector((state) => state.admin.isLogin);

  return (
    <Wrapper>
      <h1>Demo {isLogin ? "Logout" : "Login"} </h1>
    </Wrapper>
  );
}

export default Demo;
