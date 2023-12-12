import { Grid } from "@mui/material";
import FormLogin from "../components/FormLogin";
import LeftSideBar from "../components/LeftSidebar/LeftSideBar";
import SignInSide from "../components/RightSidebar/SignInSide";

function Login() {
  return (
    <Grid container height="100vh">
      <LeftSideBar />
      <SignInSide title="Faça seu login">
        <FormLogin />
      </SignInSide>
    </Grid>
  );
}

export default Login;
