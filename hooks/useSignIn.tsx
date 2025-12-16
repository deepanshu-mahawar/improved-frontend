"use client";

import { useMemo, useState, useEffect, useCallback } from "react";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import {
  useSignin,
  useResendVerification,
  useAddTenantToLandlord,
  useCurrentUser,
} from "@/api/query_hooks";
import {
  jwtStorage,
  LocalStorageKeys,
  localStorageUtils,
  sessionStorageUtils,
} from "@/utils/local_storage_utils";
import { getUrl } from "@/utils/constructions";
import { handleSocialSignIn } from "@/utils/handleSocialSignIn";

import { signInSchema, signInValues } from "@/schemas/schema";
import { useSnackBar } from "./useSnackbar";

export const useSignIn = () => {
  const router = useRouter();
  const sendNotif = useSnackBar();

  const [isSignedIn, setIsSignedIn] = useState(false);

  const { data: currentUser } = useCurrentUser(isSignedIn);

  const { mutateAsync: addTenantToLandlord, isPending: addTenantLoading } =
    useAddTenantToLandlord();
  const {
    mutate: signIn,
    isPending: isSignInLoading,
    error: signInError,
  } = useSignin();

  const {
    mutate: resendVerification,
    isPending: isResendingEmail,
    isSuccess: isResendSuccess,
    error: resendError,
  } = useResendVerification();

  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] =
    useState(false);
  const [socialError, setSocialError] = useState<string | null>(null);

  const formik = useFormik<{ email: string; password: string }>({
    initialValues: signInValues,
    validationSchema: signInSchema,
    validateOnBlur: false,
    onSubmit: ({ email, password }) => handleSubmit(email, password),
  });

  const isEmailNotVerified = useMemo(() => {
    const message = (signInError as any)?.response?.data?.message;
    return message?.toLowerCase()?.includes("verify your email");
  }, [signInError]);

  const invalidCredentialsMessage = useMemo(() => {
    const message = (signInError as any)?.response?.data?.message;
    return message?.toLowerCase()?.includes("verify your email")
      ? ""
      : message || "";
  }, [signInError]);

  const isJustRegistered = sessionStorageUtils.getItem("justRegistered");
  const url = getUrl();

  const handleAddTenantToLandlord = useCallback(async () => {
    try {
      const landlordId = localStorageUtils.getItem<string>(
        LocalStorageKeys.LANDLORD_USER_ID
      );
      const currentUserId = currentUser?.id;

      if (!landlordId || !currentUserId || !!currentUser?.isViewer) return;

      await addTenantToLandlord({ landlordId, tenantId: currentUserId });
      sendNotif("Tenant added successfully", "success");
      localStorageUtils.removeItem(LocalStorageKeys.LANDLORD_USER_ID);
    } catch (error) {
      sendNotif("Failed to add Tenant to Landlord", "error");
    }
  }, [addTenantToLandlord, currentUser, sendNotif]);

  const handleSubmit = (email: string, password: string) => {
    signIn(
      { email, password },
      {
        onSuccess: async (data) => {
          if (data?.accessToken) {
            jwtStorage.set(data);
            setIsSignedIn(true);
          }

          await handleAddTenantToLandlord();

          router.refresh();
        },
      }
    );
  };

  const handleResendVerification = () => {
    resendVerification({ email: formik.values.email });
  };

  const handleForgotPasswordClick = () => {
    setForgotPasswordModalOpen(true);
  };

  const googleHandler = () => {
    handleSocialSignIn("google", setSocialError, url);
  };

  useEffect(() => {
    if (currentUser?.id) {
      const landlordId = localStorageUtils.getItem<string>(
        LocalStorageKeys.LANDLORD_USER_ID
      );

      if (landlordId) {
        handleAddTenantToLandlord();
      }
    }
  }, [currentUser?.id, handleAddTenantToLandlord]);

  return {
    formik,
    handleSubmit,
    handleResendVerification,
    showRegisteredSuccess: !!isJustRegistered,
    isEmailNotVerified,
    invalidCredentialsMessage,
    resendErrorMessage: resendError ? "Error while resending email." : "",
    isLoading: isSignInLoading || addTenantLoading,
    isResendingEmail,
    isResendSuccess,
    googleHandler,
    handleForgotPasswordClick,
    isForgotPasswordModalOpen,
    setForgotPasswordModalOpen,
    socialError,
  };
};
