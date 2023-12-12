import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./alerts/alertsSlice";
import userReducer from "./user/userSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
});
