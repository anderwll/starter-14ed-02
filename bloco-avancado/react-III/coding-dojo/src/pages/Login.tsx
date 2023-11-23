import { Grid } from "@mui/material";
import LeftSideBar from "../components/LeftSidebar/LeftSideBar";
import SignInSide from "../components/RightSidebar/SignInSide";

function Login() {
    return (
      <Grid container width="100vw" height="100vh">
        <LeftSideBar />
        <SignInSide />
      </Grid>
    );
}

export default Login