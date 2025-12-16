"use client";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert, FormControl, InputAdornment, Tab, Tabs } from "@mui/material";

import { Formik } from "formik";
import Image from "next/image";
import Link from "next/link";

import google from "@/assets/logos/auth-logos/google.png";

import theme from "@/theme/theme";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import {
  LocalStorageKeys,
  localStorageUtils,
} from "@/utils/local_storage_utils";

import { useTranslations } from "next-intl";
import { signUpSchema } from "@/schemas/schema";
import {
  AcceptMessage,
  AccountText,
  AuthButton,
  AuthContainer,
  AuthMainContainer,
  AuthTitle,
  ButtonContainer,
  Divider,
  DividerWrapper,
  FormContainer,
  LinkText,
  PasswordStrengthWrapper,
  StyledTextField,
  SubmitButton,
  Text,
} from "@/app/(auth)/styled";
import { useSignUp } from "@/hooks/useSignUp";
import { useSignIn } from "@/hooks/useSignIn";
import { ProgressBar } from "../common/ProgressBar";

export const SignUp = () => {
  const {
    isSignUpLoading,
    signUpErrorMessage,
    currentTab,
    strength,
    strengthLabel,
    strengthColorValue,
    isPasswordVisible,
    handleTabChange,
    formik,
    setIsPasswordVisible,
    handlePasswordChange,
  } = useSignUp();

  const { googleHandler } = useSignIn();

  const searchParams = useSearchParams();

  const t = useTranslations("signUp");

  useEffect(() => {
    const landlordId = searchParams?.get("id") ?? "";
    if (landlordId) {
      localStorageUtils.setItem(LocalStorageKeys.LANDLORD_USER_ID, landlordId);
    }
  }, [searchParams]);

  return (
    <AuthMainContainer>
      {signUpErrorMessage && (
        <Alert
          severity="error"
          sx={{
            borderRadius: "10px",
            mb: 2,
            justifyContent: "center",
            "& .MuiAlert-icon": {
              color: "#f88120",
            },
          }}
        >
          {signUpErrorMessage}
        </Alert>
      )}
      <AuthContainer>
        <AuthTitle>{t("title")}</AuthTitle>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="secondary"
          sx={{
            "& .MuiTab-root": {
              textTransform: "capitalize",
              fontWeight: 400,
              color: "#071c1f80",
              fontSize: "14px",
            },

            "& .Mui-selected": {
              color: theme.color.primary.mainPrimary,
              fontWeight: 400,
            },

            "& .MuiTabs-indicator": {
              backgroundColor: theme.color.primary.mainPrimary,
              height: "2px",
              borderRadius: "2px",
            },
          }}
        >
          <Tab value={"tenant"} disableRipple label={t("tabs.tenant")} />
          <Tab value={"landlord"} disableRipple label={t("tabs.landlord")} />
        </Tabs>

        <ButtonContainer>
          <AuthButton onClick={googleHandler}>
            <Image src={google} alt="Google sign-in" />
            {t("googleSignIn")}
          </AuthButton>
        </ButtonContainer>

        <DividerWrapper>
          <Divider />
          {t("dividerOr")}
          <Divider />
        </DividerWrapper>

        <Formik
          initialValues={formik.initialValues}
          validationSchema={signUpSchema}
          onSubmit={() => formik.handleSubmit()}
        >
          {() => (
            <FormContainer onSubmit={formik.handleSubmit}>
              {/* Email */}
              <FormControl fullWidth>
                <StyledTextField
                  id="email"
                  label={t("form.emailLabel")}
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </FormControl>

              {/* Password */}
              <FormControl fullWidth>
                <StyledTextField
                  id="password"
                  label={t("form.passwordLabel")}
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={handlePasswordChange}
                  error={Boolean(
                    formik.touched.password && formik.errors.password
                  )}
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    endAdornment: formik.values.password && (
                      <InputAdornment
                        position="end"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        sx={{ cursor: "pointer" }}
                      >
                        {isPasswordVisible ? (
                          <RemoveRedEyeIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>

              {/* Password Strength */}
              {formik.values.password && (
                <PasswordStrengthWrapper style={{ marginTop: "8px" }}>
                  <ProgressBar
                    value={strength}
                    max={5}
                    color={strengthColorValue}
                  />
                  <Text>{strengthLabel}</Text>
                </PasswordStrengthWrapper>
              )}

              <AcceptMessage>
                I Accept{" "}
                <LinkText href="/terms-and-conditions">
                  Terms & Conditions
                </LinkText>{" "}
                and <LinkText href="/privacy-policy">Privacy Policy</LinkText>
              </AcceptMessage>

              <SubmitButton type="submit" disabled={isSignUpLoading}>
                {isSignUpLoading
                  ? t("submitLoading")
                  : `${
                      currentTab === "tenant"
                        ? t("continueAsTenant")
                        : t("continueAsLandlord")
                    }`}
              </SubmitButton>
            </FormContainer>
          )}
        </Formik>

        <AccountText>
          {t("accountText.alreadyHaveAccount")}{" "}
          <Link
            href="/sign-in"
            style={{
              color: theme.color.primary.mainPrimary,
              fontWeight: "500",
            }}
          >
            {t("accountText.signIn")}
          </Link>
        </AccountText>
      </AuthContainer>
    </AuthMainContainer>
  );
};
