import { useState } from "react";

import { useResetPassword, useTriggerResetPassword } from "@/api/query_hooks";
import { useSnackBar } from "./useSnackbar";

export const useResetPasswordDialog = (onClose: () => void) => {
  const [step, setStep] = useState<"email" | "confirmation">("email");

  const showMessage = useSnackBar();

  const {
    mutate: triggerResetPassword,
    isPending: isSendingEmail,
    error: triggerError,
  } = useTriggerResetPassword();

  const {
    mutate: resetPassword,
    isPending: isResetting,
    error: resetError,
  } = useResetPassword();

  const onSendClick = (email: string) => {
    if (!email) return;
    triggerResetPassword(
      { email },
      {
        onSuccess: () => {
          showMessage(
            "Verification code has been sent. Please check your email.",
            "info"
          );
          setStep("confirmation");
        },
        onError: () => {
          showMessage(
            "Failed to send verification code. Try again later.",
            "error"
          );
        },
      }
    );
  };

  const onSubmit = (email: string, code: string, password: string) => {
    resetPassword(
      { email, code, password },
      {
        onSuccess: () => {
          showMessage("Password reset successful. Please log in.", "info");
          onClose();
        },
        onError: () => {
          showMessage(
            "Failed to reset password. Please check your code and try again.",
            "error"
          );
        },
      }
    );
  };

  return {
    step,
    onSendClick,
    onSubmit,
    isSendDisabled: isSendingEmail,
    isSubmitTriggered: isResetting,
    triggerError,
    resetError,
  };
};
