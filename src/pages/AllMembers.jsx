import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllMember } from "../combineRedux/memberredux/action";

function AllMembers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMember());
  }, []);

  return <div>AllMembers</div>;
}

export default AllMembers;
