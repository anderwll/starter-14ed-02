import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { showAlert } from "../../store/modules/alerts/alertsSlice";
import { signUp } from "../../store/modules/user/action";
import { CreateUser, ETypeUser } from "../../store/modules/user/types";

function FormCadastro() {
  const [type, setType] = useState("");
  const dispatch = useAppDispatch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (event.currentTarget.senha.value !== event.currentTarget.reSenha.value) {
      dispatch(
        showAlert({
          message: "Senhas não condizem",
          type: "warning",
        })
      );
      return;
    }

    const data: CreateUser = {
      fullName: event.currentTarget.nome.value,
      age: Number(event.currentTarget.idade.value),
      email: event.currentTarget.email.value,
      password: event.currentTarget.senha.value,
      type: type as ETypeUser,
    };

    const {
      payload: { id },
    } = await dispatch(signUp(data));

    if (id) {
      event.currentTarget.reset();
      setType("");
    }
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="nome"
        label="Nome Completo"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        id="email"
        label="E-mail"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        id="senha"
        label="Senha"
        variant="outlined"
        type="password"
        required
        fullWidth
      />
      <TextField
        id="reSenha"
        label="Repetir senha"
        variant="outlined"
        type="password"
        required
        fullWidth
      />

      <TextField
        id="idade"
        label="Idade"
        variant="outlined"
        type="number"
        required
        fullWidth
      />

      <FormControl fullWidth>
        <InputLabel id="tipo-label">Papel</InputLabel>
        <Select
          labelId="tipo-label"
          id="tipo"
          label="Papel"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="M">Matriculado</MenuItem>
          <MenuItem value="T">Tech Helper</MenuItem>
          <MenuItem value="F">Formado</MenuItem>
        </Select>
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="large"
        sx={{ mt: 3, mb: 2 }}
      >
        Criar conta
      </Button>

      <Link href="/" variant="body2">
        {"Já possui conta? Faça o login"}
      </Link>
    </Box>
  );
}

export default FormCadastro;
