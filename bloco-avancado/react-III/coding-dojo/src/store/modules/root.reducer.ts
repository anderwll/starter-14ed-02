import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
const rootReducer = combineReducers({
    users: userSlice
});

export default rootReducer
