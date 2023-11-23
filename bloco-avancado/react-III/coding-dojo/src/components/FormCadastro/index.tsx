import { Box, Button, TextField } from "@mui/material";
import React from "react";

function FormCadastro() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      email: event.currentTarget.email.value,
      senha: event.currentTarget.senha.value,
      reSenha: event.currentTarget.reSenha.value,
    });
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
        id="email"
        label="Email"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        id="senha"
        label="Senha"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        id="reSenha"
        label="Repetir senha"
        variant="outlined"
        required
        fullWidth
      />

      <Button type="submit" variant="contained" fullWidth>
        Criar conta
      </Button>
    </Box>
  );
}

export default FormCadastro;
