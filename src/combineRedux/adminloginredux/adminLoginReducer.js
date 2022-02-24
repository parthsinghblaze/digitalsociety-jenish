import { ADMIN_LOGIN } from "./type";

function getLocalStorage() {
  let adminLogin = localStorage.getItem("adminLogin");
  return adminLogin;
}

const intialState = {
  isAdminLogin: getLocalStorage(),
};

console.log(typeof intialState.isAdminLogin);

export const adminLoginReducer = (state = intialState, action) => {
  if (action.type === ADMIN_LOGIN) {
    return {
      ...state,
      isAdminLogin: true,
    };
  }

  if (action.type === "LOGOUT") {
    return {
      ...state,
      isAdminLogin: localStorage.removeItem("adminLogin"),
    };
  }

  return state;
};
