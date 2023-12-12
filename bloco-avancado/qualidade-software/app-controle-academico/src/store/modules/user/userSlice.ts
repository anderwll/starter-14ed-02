import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "./action";
import { ETypeUser, User } from "./types";

const initialState: { loading: boolean; token: string; user: User } = {
  loading: false,
  token: "",
  user: {
    id: "",
    fullName: "",
    email: "",
    age: 0,
    type: ETypeUser.MATRICULADO,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // CADASTRO DE USER/ALUNO
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;

      if (!action.payload) return;

      state.user.id = action.payload.id;
      state.user.fullName = action.payload.nome;
      state.user.email = action.payload.email;
      state.user.age = action.payload.idade;

      return state;
    });

    // LOGIN
    builder.addCase(signIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload) return; // action.payload = // {token: ...., dadosAluno: {id:....}}

      state.token = action.payload.token;
      state.user.id = action.payload.dadosAluno.id;
      state.user.fullName = action.payload.dadosAluno.nomeCompleto;
      state.user.email = action.payload.dadosAluno.email;
      state.user.age = action.payload.dadosAluno.idade;
      state.user.type = action.payload.dadosAluno.tipo;

      localStorage.setItem("token", JSON.stringify(state.token));

      return state;
    });
  },
});

export default userSlice.reducer;
