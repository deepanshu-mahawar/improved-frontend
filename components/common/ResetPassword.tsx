import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";

import { useResetPasswordDialog } from "@/hooks/useResetPassword";
import { ResetPasswordConfirmation } from "./ResetPasswordConfirmation";
import { ResetPasswordEmail } from "./ResetPasswordEmail";

type ResetPasswordDialogProps = {
  onClose: () => void;
};

export const ResetPassword = ({ onClose }: ResetPasswordDialogProps) => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");

  const { step, onSendClick, onSubmit, isSendDisabled, isSubmitTriggered } =
    useResetPasswordDialog(onClose);

  return (
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth>
      {step === "email" ? (
        <ResetPasswordEmail
          email={email}
          onEmailSet={setEmail}
          onSendClick={() => onSendClick(email)}
          onClose={onClose}
          isSendDisabled={isSendDisabled}
        />
      ) : (
        <ResetPasswordConfirmation
          verificationCode={verificationCode}
          onVerificationCode={setVerificationCode}
          password={password}
          onPassword={setPassword}
          onSubmit={() => onSubmit(email, verificationCode, password)}
          onClose={onClose}
          isSubmitTriggered={isSubmitTriggered}
        />
      )}
    </Dialog>
  );
};
