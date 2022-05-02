import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
});
