"use client";

import { useState } from "react";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import { useSignup, useSignupViewer } from "@/api/query_hooks";

import { sessionStorageUtils } from "@/utils/local_storage_utils";
import { strengthIndicator, strengthColor } from "@/utils/password-strength";

import { handleSocialSignIn } from "@/utils/handleSocialSignIn";
import { getUrl } from "@/utils/constructions";
import { signUpSchema, signUpValues } from "@/schemas/schema";
import { routes } from "@/lib/route";

export const useSignUp = () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState<string>("tenant");
  const [strength, setStrength] = useState(0);
  const [strengthLabel, setStrengthLabel] = useState("");
  const [strengthColorValue, setStrengthColorValue] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    mutate: signUpTenant,
    isPending: isTenenatSignUpPending,
    error: tenantError,
  } = useSignup();
  const {
    mutate: signUpLanlord,
    isPending: isLandlordSignUpPending,
    error: landlordError,
  } = useSignupViewer();

  const formik = useFormik({
    initialValues: signUpValues,
    validationSchema: signUpSchema,
    validateOnBlur: false,
    onSubmit: (values) => {
      if (currentTab === "tenant") {
        signUpTenant(
          {
            email: values.email,
            password: values.password,
          },
          {
            onSuccess: () => {
              sessionStorageUtils.setItem("justRegistered", "true");
              router.replace(routes.signIn);
            },
          }
        );
      } else {
        signUpLanlord(
          {
            email: values.email,
            password: values.password,
          },
          {
            onSuccess: () => {
              sessionStorageUtils.setItem("justRegistered", "true");
              router.replace(routes.signIn);
            },
          }
        );
      }
    },
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    const val = e.target.value;
    const score = strengthIndicator(val);
    const { label, color } = strengthColor(score);
    setStrength(score);
    setStrengthLabel(label);
    setStrengthColorValue(color);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  const getErrorMessage = (error?: any) => {
    if (!error) return "";
    const status = error?.response?.status;
    const message = error?.response?.data?.message || "Something went wrong";

    if (status === 409) {
      return "User already exists";
    } else if (status === 400) {
      return "Invalid signup details";
    } else {
      return message;
    }
  };

  const [socialError, setSocialError] = useState<string | null>(null);

  const url = getUrl();

  const googleHandler = () => {
    handleSocialSignIn("google", setSocialError, url);
  };

  return {
    isSignUpLoading: isTenenatSignUpPending || isLandlordSignUpPending,
    signUpErrorMessage: getErrorMessage(tenantError || landlordError),
    handleTabChange,
    handlePasswordChange,
    currentTab,
    strength,
    strengthLabel,
    strengthColorValue,
    isPasswordVisible,
    formik,
    setIsPasswordVisible,
    googleHandler,
  };
};
