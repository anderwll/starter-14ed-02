import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Transacao {
  id: number;
  value: number;
  type: "income" | "outcome";
  description: string;
  createdAt: Date;
}

export interface Carteira {
  balance: number;
  transactions: Transacao[];
}

const initialState: Carteira = {
  balance: 0,
  transactions: [],
};

const carteiraSlice = createSlice({
  name: "carteira",
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Transacao>) => {
      action.payload.type == "outcome"
        ? (state.balance -= action.payload.value)
        : (state.balance += action.payload.value);

      state.transactions.push(action.payload);
    },
  },
});

export const { cadastrar } = carteiraSlice.actions;
export default carteiraSlice.reducer;
