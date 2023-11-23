import { Box, Button, TextField } from "@mui/material";

function FormCadastro() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Senha"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        id="outlined-basic"
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
