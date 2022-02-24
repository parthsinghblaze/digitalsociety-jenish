import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMemberFunction } from "../combineRedux/memberredux/action";
import Wrapper from "../commancomponent/Wrapper";

function AddMember() {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handlingChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handlingSubmit(e) {
    e.preventDefault();
    dispatch(addMemberFunction(formValue));
  }

  return (
    <Wrapper>
      <h3 className="text-center text-primary py-3">Add Members</h3>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form action="">
            <input
              type="text"
              placeholder="Enter First Name"
              className="form-control my-2"
              value={formValue.firstName}
              name="firstName"
              onChange={handlingChange}
            />

            <input
              type="text"
              placeholder="Enter Last Name"
              className="form-control my-2"
              value={formValue.lastName}
              name="lastName"
              onChange={handlingChange}
            />

            <input
              type="text"
              placeholder="Email"
              className="form-control  my-2"
              value={formValue.email}
              name="email"
              onChange={handlingChange}
            />

            <input
              type="text"
              placeholder="Password"
              className="form-control  my-2"
              value={formValue.password}
              name="password"
              onChange={handlingChange}
            />
            <button className="btn btn-primary" onClick={handlingSubmit}>
              Add Members
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default AddMember;
