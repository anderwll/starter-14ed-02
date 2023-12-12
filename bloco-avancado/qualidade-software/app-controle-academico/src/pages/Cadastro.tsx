import { Grid } from "@mui/material";
import FormCadastro from "../components/FormCadastro";
import LeftSideBar from "../components/LeftSidebar/LeftSideBar";
import SignInSide from "../components/RightSidebar/SignInSide";

function Cadastro() {
  return (
    <Grid container height="100vh">
      <LeftSideBar />
      <SignInSide title="Cadastre-se">
        <FormCadastro />
      </SignInSide>
    </Grid>
  );
}

export default Cadastro;
