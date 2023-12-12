import Alert from "@mui/material/Alert";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { hiddenAlert } from "../../store/modules/alerts/alertsSlice";

function MyAlert() {
  const dispatch = useAppDispatch();
  const alertRedux = useAppSelector((state) => state.alert);

  useEffect(() => {
    if (alertRedux.open) {
      setTimeout(() => {
        dispatch(hiddenAlert());
      }, 2000);
    }
  }, [alertRedux, dispatch]);

  if (!alertRedux.open) {
    return <></>;
  }

  return (
    <Alert
      variant="standard"
      severity={alertRedux.type}
      sx={{ position: "absolute", top: 40, right: 40 }}
    >
      {alertRedux.message}
    </Alert>
  );
}

export default MyAlert;
