import { ADMIN_LOGIN } from "./type";

function checkingLocalStorage() {
  return false;
}

const intialState = {
  isAdminLogin: checkingLocalStorage(),
};

export const adminLoginReducer = (state = intialState, action) => {
  if (action.type === ADMIN_LOGIN) {
    return {
      ...state,
      isAdminLogin: true,
    };
  }
  return state;
};
