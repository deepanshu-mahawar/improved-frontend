import React from "react";

import {
  Alert,
  CircularProgress,
  Stack,
  styled,
  TextField,
} from "@mui/material";

import {
  ResetModalButton,
  ResetModalButtonContainer,
  ResetModalContainer,
  ResetModalInputContainer,
  ResetModalTitle,
} from "./styled";

import theme from "@/theme/theme";
import { useTranslations } from "next-intl";

type ResetPasswordDialogEmailProps = {
  onSendClick: () => void;
  onClose: () => void;
  onEmailSet: (value: string) => void;
  email: string;
  isSendDisabled: boolean;
};

export const ResetPasswordEmail = ({
  onSendClick,
  onEmailSet,
  isSendDisabled,
  email,
  onClose,
}: ResetPasswordDialogEmailProps) => {
  const t = useTranslations("signIn.resetPasswordDialog");
  return (
    <ResetModalContainer>
      <ResetModalTitle>{t("title")}</ResetModalTitle>
      <ResetModalInputContainer>
        <Stack spacing={2}>
          <Alert
            severity="info"
            sx={{
              "@media (max-width:600px)": {
                fontSize: "13px",
              },
            }}
          >
            {t("infoText")}
          </Alert>

          <StyledInput
            autoFocus
            required
            name="email"
            label={t("emailLabel")}
            type="email"
            fullWidth
            variant="outlined"
            disabled={isSendDisabled}
            value={email}
            onChange={(e) => {
              onEmailSet(e.target.value);
            }}
          />
        </Stack>
      </ResetModalInputContainer>
      <ResetModalButtonContainer>
        <ResetModalButton
          onClick={onSendClick}
          type="submit"
          disabled={!email || isSendDisabled}
        >
          {isSendDisabled ? (
            <CircularProgress size={20} style={{ color: "#ffff" }} />
          ) : (
            t("send")
          )}
        </ResetModalButton>
        <ResetModalButton onClick={onClose} disabled={isSendDisabled}>
          {t("cancel")}
        </ResetModalButton>
      </ResetModalButtonContainer>
    </ResetModalContainer>
  );
};

const StyledInput = styled(TextField)(() => ({
  backgroundColor: "#f9f9f9",
  "& .MuiInputLabel-root": {
    color: `${theme.color.fade.blackFade}`,
    fontWeight: 500,
    fontSize: "15px",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: `${theme.color.primary.mainPrimary} `,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ccc",
    },
    "&:hover fieldset": {
      borderColor: `${theme.color.fade.blackFade} `,
    },
    "&.Mui-focused fieldset": {
      borderColor: `${theme.color.primary.mainPrimary} `,
      borderWidth: "1px",
    },
  },
  "& .MuiInputBase-input": {
    "@media (max-width: 600px)": {
      fontSize: "13px",
    },
  },
}));
