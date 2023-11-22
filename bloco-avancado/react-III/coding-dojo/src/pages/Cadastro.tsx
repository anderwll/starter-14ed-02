import VerifiedUser from "@mui/icons-material/VerifiedUser";
import {
  Box,
  Container,
  Grid,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import FormCadastro from "../components/FormCadastro";

function Cadastro() {
  return (
    <Box component="main">
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <ImageListItem>
              <img alt="Imagem de praia" src="/praia.jpg" />
            </ImageListItem>
          </Grid>
          <Grid item xs={4} display="flex">
            <Stack justifyContent="center" alignItems="center">
              <VerifiedUser color="success" />
              <Typography variant="h5">Cadastrar</Typography>
              <FormCadastro />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Cadastro;
