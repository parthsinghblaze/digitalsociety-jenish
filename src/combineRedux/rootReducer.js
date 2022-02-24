import { combineReducers } from "redux";
import { adminLoginReducer } from "./adminloginredux/adminLoginReducer";
import { MemberReducer } from "./memberredux/MemberReducer";
export const rootReducer = combineReducers({
  admin: adminLoginReducer,
  member: MemberReducer,
});
