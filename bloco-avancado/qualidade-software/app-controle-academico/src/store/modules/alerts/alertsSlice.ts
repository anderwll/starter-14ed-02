import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MyAlert } from "./types";

const initialState: MyAlert = {
  open: false,
  type: "success",
  message: "",
};

const alertsSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert(state, action: PayloadAction<Omit<MyAlert, "open">>) {
      state.open = true;
      state.message = action.payload.message;
      state.type = action.payload.type;

      return state;
    },
    hiddenAlert() {
      return initialState;
    },
  },
});

export default alertsSlice.reducer;
export const { showAlert, hiddenAlert } = alertsSlice.actions;
