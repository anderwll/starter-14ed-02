import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
} from "@mui/material";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { signIn } from "../../store/modules/user/action";

function FormLogin() {
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const data = {
      email: ev.currentTarget.email.value,
      password: ev.currentTarget.password.value,
    };

    const {
      payload: { token },
    } = await dispatch(signIn(data));

    if (token) {
      formRef.current?.reset();
      navigate("/home");
    }
  }

  return (
    <Box
      ref={formRef}
      component="form"
      noValidate
      sx={{ mt: 1 }}
      onSubmit={handleSubmit}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="E-mail"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Senha"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        sx={{ mt: 3, mb: 2 }}
      >
        ENTRAR
      </Button>

      <Link href="/cadastro" variant="body2">
        {"Não tem uma conta? Cadastra-se"}
      </Link>
    </Box>
  );
}

export default FormLogin;
