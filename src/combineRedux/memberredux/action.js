import { ADD_MEMBERS, ALL_MEMBERS } from "./type";

export const addMembers = () => {
  return {
    type: ADD_MEMBERS,
  };
};

export const allMembers = (data) => {
  return {
    type: ALL_MEMBERS,
    payload: data,
  };
};

export const getAllMember = () => {
  return (dispatch) => {
    fetch(
      `https://jenish-digital-society-default-rtdb.firebaseio.com/members.json`
    )
      .then((resp) => resp.json())
      .then((data) => dispatch(allMembers(data)));
  };
};
export const addMemberFunction = (formValue) => {
  console.log(formValue);

  return (dispatch) => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAaGnp7Yo-aG8bZLne9f5f-B-hVtT6sIiA",
      {
        method: "POST",
        body: JSON.stringify(formValue),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.localId) {
          fetch(
            ` https://jenish-digital-society-default-rtdb.firebaseio.com/members/${json.localId}.json`,
            {
              method: "PUT",
              body: JSON.stringify(formValue),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          );
        }
      });
  };
};

// https://jenish-digital-society-default-rtdb.firebaseio.com/
