import Grid from "@mui/material/Grid/Grid";

function LeftSideBar() {
  return (
    <Grid
      item
      xs={8}
      sx={{
        backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}

export default LeftSideBar;
