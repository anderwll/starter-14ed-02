/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Copyright from "../Copyright";

interface SignInSide {
  title: string;
  children: React.ReactNode;
}

export default function SignInSide({ title, children }: SignInSide) {
  return (
    <Grid
      item
      xs={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          px: 10,
        }}
      >
        <img src="./growdev.png" alt="Logo Growdev" />

        <Typography component="h1" variant="h5" mt={5}>
          {title}
        </Typography>

        {children}

        <Copyright />
      </Box>
    </Grid>
  );
}
