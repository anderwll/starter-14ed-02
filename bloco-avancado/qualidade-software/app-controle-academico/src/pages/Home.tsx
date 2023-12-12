import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { showAlert } from "../store/modules/alerts/alertsSlice";

function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(showAlert({ message: "Bem vindo 😊", type: "info" }));
  }, []);

  return (
    <Box width="100vw" height="100vh" textAlign="center">
      <Typography variant="h4" color="initial">
        Página Home - Seja Bem Vindo
      </Typography>
    </Box>
  );
}
export default Home;
