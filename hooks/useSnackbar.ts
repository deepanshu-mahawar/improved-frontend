import { AlertType, SnackBarContext } from "@/providers/SnackbarProvider";
import { useContext } from "react";

export const useSnackBar = (): ((
  message: string,
  alertType?: AlertType
) => void) => {
  const { setMessage, setOpen, setType } = useContext(SnackBarContext);

  return (message: string, alertType?: AlertType) => {
    setMessage(message);
    setType(alertType ?? "info");
    setOpen(true);
  };
};
