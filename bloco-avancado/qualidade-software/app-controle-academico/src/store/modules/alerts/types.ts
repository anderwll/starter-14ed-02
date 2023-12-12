import { AlertColor } from "@mui/material";

export interface MyAlert {
  open: boolean;
  message: string;
  type: AlertColor;
}
