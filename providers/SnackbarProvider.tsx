"use client";
import React, { createContext, useState } from "react";

import { Alert, Snackbar } from "@mui/material";

interface SnackBarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  type: AlertType;
  setType: React.Dispatch<React.SetStateAction<AlertType>>;
}

export const SnackBarContext = createContext<SnackBarContextProps>(
  {} as SnackBarContextProps
);

export type AlertType = "error" | "warning" | "info" | "success";

export const SnackBarComp: React.FC = () => {
  const { message, open, setOpen, type } = React.useContext(SnackBarContext);
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity={type}
        sx={{ width: "100%", fontFamily: "poppins" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export const SnackbarProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<AlertType>("info");

  return (
    <SnackBarContext.Provider
      value={{ open, setOpen, message, setMessage, type, setType }}
    >
      <SnackBarComp />
      {children}
    </SnackBarContext.Provider>
  );
};
