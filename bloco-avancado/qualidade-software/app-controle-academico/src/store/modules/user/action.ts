/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { showAlert } from "../alerts/alertsSlice";
import { CreateUser, UserLogin } from "./types";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

// ok: boolean
// code: number
// mensagem: string
// dados?: any

export const signUp = createAsyncThunk(
  "user/signUp",
  async (data: CreateUser, { dispatch }) => {
    try {
      const response = await api.post("/alunos", {
        nome: data.fullName,
        email: data.email,
        senha: data.password,
        tipo: data.type,
        idade: data.age,
      });

      dispatch(
        showAlert({
          message: response.data.mensagem,
          type: "success",
        })
      );

      return response.data.dados; // {id:....}
    } catch (error: any) {
      dispatch(
        showAlert({
          message: error.response.data.mensagem,
          type: "error",
        })
      );
      return {};
    }
  }
);

export const signIn = createAsyncThunk(
  "user/signIn",
  async (data: UserLogin, { dispatch }) => {
    try {
      const response = await api.post("/auth/login", {
        email: data.email,
        senha: data.password,
      });

      dispatch(
        showAlert({
          message: response.data.mensagem,
          type: "success",
        })
      );

      return response.data.dados; // {token: ...., user: {id:....}}
    } catch (error: any) {
      dispatch(
        showAlert({
          message: error.response.data.mensagem,
          type: "error",
        })
      );
      return {};
    }
  }
);
