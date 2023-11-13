import { Box, Button, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 500,
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h4" color="initial">
        Meu modal
      </Typography>

      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h2" color="initial">
            Meu titulo
          </Typography>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            modi, provident fuga vitae, esse voluptate dolorum labore officia
            atque architecto eos corrupti ad molestias, dolores quia doloribus
            maiores dolor vel.
          </Typography>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </>
  );
}

export default App;
