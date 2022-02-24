import { ADMIN_LOGIN, IS_ADMIN_LOGIN } from "./type";

export const isadminLogin = () => {
  return {
    type: IS_ADMIN_LOGIN,
  };
};

export const adminLogin = () => {
  return {
    type: ADMIN_LOGIN,
  };
};

export const adminLoginFunction = (value) => {
  return (dispatch) => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAaGnp7Yo-aG8bZLne9f5f-B-hVtT6sIiA",
      {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.localId) {
          console.log("Yes local Id Founded");
          localStorage.setItem("adminLogin", "true");
          dispatch(adminLogin());
        }
      });
  };
};
