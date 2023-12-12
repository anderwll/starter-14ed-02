import { CssBaseline } from "@mui/material";
import MyAlert from "./components/MyAlert";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <>
      <CssBaseline />
      <RoutesApp />
      <MyAlert />
    </>
  );
}

export default App;
