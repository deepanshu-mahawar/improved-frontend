import React, { useState } from "react";

import { Alert, Stack, CircularProgress, InputAdornment } from "@mui/material";

import {
  ResetModalButton,
  ResetModalButtonContainer,
  ResetModalContainer,
  ResetModalInputContainer,
  ResetModalInputfield,
  ResetModalTitle,
} from "./styled";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useTranslations } from "next-intl";

type ResetPasswordDialogConfirmationProps = {
  onSubmit: () => void;
  onClose: () => void;
  onVerificationCode: (value: string) => void;
  password: string;
  isSubmitTriggered: boolean;
  verificationCode: string;
  onPassword: (value: string) => void;
};

export const ResetPasswordConfirmation = ({
  onSubmit,
  password,
  onVerificationCode,
  isSubmitTriggered,
  onClose,
  onPassword,
  verificationCode,
}: ResetPasswordDialogConfirmationProps) => {
  const t = useTranslations("signIn.resetPasswordDialogConfirmation");
  const [open, setIsOpen] = useState(false);
  return (
    <ResetModalContainer>
      <ResetModalTitle>{t("title")}</ResetModalTitle>
      <ResetModalInputContainer>
        <Stack spacing={2}>
          <Alert severity="info">{t("infoText")}</Alert>
          <ResetModalInputfield
            autoFocus
            required
            margin="dense"
            name="verification code"
            label={t("verificationCodeLabel")}
            type="text"
            fullWidth
            variant="outlined"
            disabled={isSubmitTriggered}
            value={verificationCode}
            onChange={(e) => {
              onVerificationCode(e.target.value);
            }}
          />
          <ResetModalInputfield
            autoFocus
            required
            disabled={!verificationCode || isSubmitTriggered}
            margin="dense"
            name="password"
            label={t("passwordLabel")}
            type={open ? "text" : "password"}
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => {
              onPassword(e.target.value);
            }}
            InputProps={{
              endAdornment: password && (
                <InputAdornment
                  position="end"
                  onClick={() => setIsOpen(!open)}
                  sx={{ cursor: "pointer" }}
                >
                  {open ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </ResetModalInputContainer>
      <ResetModalButtonContainer>
        <ResetModalButton
          onClick={onSubmit}
          type="submit"
          disabled={!password || isSubmitTriggered}
        >
          {isSubmitTriggered ? (
            <CircularProgress size={20} style={{ color: "#ffff" }} />
          ) : (
            t("reset")
          )}
        </ResetModalButton>
        <ResetModalButton onClick={onClose} disabled={isSubmitTriggered}>
          {t("cancel")}
        </ResetModalButton>
      </ResetModalButtonContainer>
    </ResetModalContainer>
  );
};
