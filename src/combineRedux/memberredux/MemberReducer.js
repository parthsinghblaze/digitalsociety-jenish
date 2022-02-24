import { ADD_MEMBERS, ALL_MEMBERS } from "./type";

const initialState = {
  members: [],
  allMembers: {},
};

export const MemberReducer = (state = initialState, action) => {
  console.log(action.payload);
  if (action.type === ALL_MEMBERS) {
    return { ...state, allMembers: action.payload };
  }
  return state;
};
