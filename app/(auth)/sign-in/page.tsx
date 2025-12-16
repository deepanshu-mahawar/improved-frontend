"use client";

import { useState } from "react";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert, Button, FormControl, InputAdornment } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import {
  AuthButton,
  AuthContainer,
  AuthMainContainer,
  AuthTitle,
  ButtonContainer,
  ForgotPassword,
  FormContainer,
  SubmitButton,
  DividerWrapper,
  Divider,
  AccountText,
  StyledTextField,
} from "../styled";


import { useTranslations } from "next-intl";

import theme from "@/theme/theme";
import { ResetPassword } from "@/components/common/ResetPassword";
import { useSignIn } from "@/hooks/useSignIn";

export default function SignIn() {
  const {
    handleResendVerification,
    isResendingEmail,
    showRegisteredSuccess,
    isEmailNotVerified,
    resendErrorMessage,
    invalidCredentialsMessage,
    formik,
    isResendSuccess,
    isLoading,
    googleHandler,
    handleForgotPasswordClick,
    isForgotPasswordModalOpen,
    setForgotPasswordModalOpen,
  } = useSignIn();

  const [open, setIsOpen] = useState(false);

  const t = useTranslations("signIn");

  return (
    <AuthMainContainer>
      {showRegisteredSuccess && (
        <Alert
          severity="success"
          variant="filled"
          sx={{
            position: "absolute",
            top: "40px",
            fontWeight: "400",
          }}
        >
          {t("registeredSuccess")}
        </Alert>
      )}

      <AuthContainer>
        <AuthTitle>{t("title")}</AuthTitle>
        {isEmailNotVerified && (
          <Alert
            severity={isResendSuccess ? "success" : "error"}
            variant={isResendSuccess ? "outlined" : "standard"}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            action={
              !resendErrorMessage &&
              !isResendSuccess && (
                <Button
                  color="inherit"
                  size="small"
                  onClick={handleResendVerification}
                  disabled={isResendingEmail}
                  sx={{
                    textTransform: "capitalize",
                    padding: "0px",
                  }}
                >
                  {isResendingEmail
                    ? t("emailNotVerified.sending")
                    : t("emailNotVerified.resendVerification")}
                </Button>
              )
            }
          >
            <span>
              {resendErrorMessage ? (
                resendErrorMessage
              ) : isResendSuccess ? (
                <span style={{ fontWeight: 400 }}>
                  {t("emailNotVerified.resentSuccess")}
                </span>
              ) : (
                <span style={{ fontWeight: 400 }}>
                  {t("emailNotVerified.verifyFirst")}
                </span>
              )}
            </span>
          </Alert>
        )}

        {invalidCredentialsMessage && (
          <Alert
            severity="error"
            style={{
              width: "100%",
              marginTop: "10px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {invalidCredentialsMessage}
          </Alert>
        )}

        <ButtonContainer>
          <AuthButton onClick={googleHandler}>
            <Image src="/google.png" alt="#" width={20} height={20}/>
            {t("googleSignIn")}
          </AuthButton>
        </ButtonContainer>

        <DividerWrapper>
          <Divider />
          {t("dividerOr")}
          <Divider />
        </DividerWrapper>

        <FormContainer onSubmit={formik.handleSubmit}>
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
              type={open ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: formik.values.password && (
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
          </FormControl>

          <ForgotPassword onClick={handleForgotPasswordClick}>
            {t("form.forgotPassword")}
          </ForgotPassword>
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? t("form.submitLoading") : t("form.submit")}
          </SubmitButton>
        </FormContainer>

        <AccountText>
          {t("accountText.noAccount")}{" "}
          <Link
            href="/sign-up"
            style={{
              color: theme.color.primary.mainPrimary,
              fontWeight: "500",
            }}
          >
            {t("accountText.signUp")}
          </Link>
        </AccountText>
      </AuthContainer>

      {isForgotPasswordModalOpen && (
        <ResetPassword onClose={() => setForgotPasswordModalOpen(false)} />
      )}
    </AuthMainContainer>
  );
}
