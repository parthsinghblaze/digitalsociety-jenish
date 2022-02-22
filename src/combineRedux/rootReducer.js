import { combineReducers } from "redux";
import { adminLoginReducer } from "./adminloginredux/adminLoginReducer";
export const rootReducer = combineReducers({
  admin: adminLoginReducer,
});
