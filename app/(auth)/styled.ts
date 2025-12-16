"use client";

import {
  Box,
  InputAdornment,
  InputLabel,
  ListItem,
  MenuItem,
  OutlinedInput,
  Paper,
  Stepper,
  TextField,
} from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

import theme from "@/theme/theme";
import { Field } from "formik";

export const AuthMainContainer = styled.main`
  min-height: 100vh;
  max-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 50px 0;
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: ${theme.color.common.light};
  box-shadow: 0px 0px 100px 16px rgba(12, 36, 113, 0.45);
  border-radius: 4px;
  width: 500px;
  gap: 0px;

  @media (max-width: 599px) {
    width: 94%;
    padding: 40px 20px;
  }
`;

export const AuthTitle = styled.h1`
  font-size: 34px;
  font-weight: 700;
  color: ${theme.color.primary.mainPrimary};
  text-transform: capitalize;

  @media (max-width: 599px) {
    font-size: 24px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 16px 0px;
`;

export const AuthButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #071c1f80;
  gap: 6px;
  width: 100%;
  padding: 12px 20px;
  border-radius: 4px;
  border: 1px solid ${theme.color.fade.blackFade};
  font-size: 15px;
  transition: border 0.3s ease, transform 0.1s ease;

  &:hover {
    border: 1px solid ${theme.color.primary.mainPrimary};
  }

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 599px) {
    font-size: 14px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.75;
  color: ${theme.color.primary.mainPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const DividerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 0;
  color: ${theme.color.text.darkBlackText};
`;
export const Divider = styled.div`
  flex: 1;
  height: 1px;
  color: black;
  background-color: ${theme.color.fade.blackFade};
`;

export const AccountText = styled("p")`
  font-size: 14px;
  font-weight: 400;
  /* color: ${theme.color.primary.mainPrimary}; */
  color: #071c1f80;
  width: fit-content;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  gap: 15px;
  padding: 16px 0px;
`;

export const ForgotPassword = styled.p`
  font-size: 14px;
  cursor: pointer;
  color: ${theme.color.primary.mainPrimary};

  @media (max-width: 599px) {
    font-size: 12px;
  }
`;

export const AcceptMessage = styled.p`
  font-size: 14px;
  color: #071c1f80;
  margin-top: 10px;

  @media (max-width: 599px) {
    margin-top: 0px;
    font-size: 12px;
  }
`;

export const LinkText = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.primary.mainPrimary};
`;

export const SubmitButton = styled.button`
  text-align: center;
  width: 100%;
  padding: 16px 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: ${theme.color.common.light};
  background-color: ${theme.color.primary.mainPrimary};
  cursor: pointer;
  font-weight: 400;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease,
    transform 0.1s ease;

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 599px) {
    font-size: 14px;
    padding: 14px;
  }
`;

export const PasswordStrengthWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledInputLabel = styled(InputLabel)(({}) => ({
  color: "#071C1FB3",
  fontSize: "16px",
  fontWeight: 400,
  backgroundColor: "white",
  "&.Mui-focused": {
    color: theme.color.primary.mainPrimary,
  },
  "&.MuiInputLabel-shrink": {
    backgroundColor: "white",
  },

  "@media (max-width: 599px)": {
    fontSize: "14px",
  },
}));

export const StyledOutlinedInput = styled(OutlinedInput)(({}) => ({
  width: "100%",
  backgroundColor: "white",
  borderRadius: "4px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.color.fade.blackFade,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.color.primary.mainPrimary,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.color.primary.mainPrimary,
    borderWidth: "1px",
  },

  "@media (max-width: 599px)": {
    fontSize: "14px",
    padding: "0px",
  },
}));

export const StyledInputAdornment = styled(InputAdornment)(() => ({
  "@media (max-width: 599px)": {
    marginRight: "10px",
  },
}));

export const StyledTextField = styled(TextField)(({}) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.color.fade.blackFade,
    },
    "&:hover fieldset": {
      borderColor: theme.color.primary.mainPrimary,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.color.primary.mainPrimary,
    },

    "&.Mui-error fieldset": {
      borderColor: "#d32f2f",
    },
  },

  "& .MuiInputLabel-root": {
    color: "#071c1f80",
    fontWeight: "400",
    fontSize: "15px",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.color.primary.mainPrimary,
  },

  "& .MuiInputLabel-root.Mui-error": {
    color: "#d32f2f",
  },

  "& .MuiInputBase-input": {
    fontSize: "14px",
  },
}));



//create profile styling
export const ProfileFormStepper = styled(Stepper)`
  width: 80%;

  @media (max-width: 599px) {
    width: 100%;
    padding: 0;

    & .MuiStep-root {
      min-width: auto;
    }

    & .MuiStepLabel-label {
      font-size: 11px;
    }

    & .MuiStepIcon-root {
      width: 18px;
      height: 18px;
    }

    & .MuiStepConnector-line {
      margin-left: -4px;
      margin-right: -4px;
    }
  }
`;

export const MainSection = styled.div`
  margin: 0;
  padding: 0;
`;

export const CreateProfileFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 0px;
  gap: 80px;

  @media (max-width: 599px) {
    padding: 30px 0px;
    gap: 20px;
  }

  .stepper {
    width: 100%;

    @media only screen and (max-width: 480px) {
      display: none;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      display: none;
    }
  }
`;

export const SubFormContainer = styled.div`
  border: 1px solid #f6f6f6;
  box-shadow: 0 16px 32px 0 rgba(7, 28, 31, 0.1);
  padding: 50px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 599px) {
    padding: 20px;
    box-shadow: none;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
  width: 100%;
`;

export const FormTitle = styled.h4`
  color: ${theme.color.primary.mainPrimary};
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  border-bottom: 1px solid #ccc;
  padding-bottom: 6px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #364152;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

export const ErrorText = styled.p`
  color: #e60909;
  font-size: 12px;
  margin: 0;
  padding-top: 4px;
`;

export const InputFieldLabel = styled.label`
  color: #323845;
  font-size: 14px;
  margin: 0 0 8px 0;
`;

export const CreateProfileButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
`;

export const Button = styled.button<{ $disabled?: boolean }>(
  ({ $disabled }) => `
  padding: 15px 60px;
  background-color: ${
    $disabled
      ? `${theme.color.border.headerBorder}`
      : `${theme.color.primary.mainPrimary}`
  };
  color:  ${
    $disabled
      ? `${theme.color.text.darkBlackText}`
      : `${theme.color.common.light}`
  };
  border-radius: 4px;
  border: ${$disabled ? "none" : "1px solid #0c1f7a"};
  text-align: center;
  cursor: pointer;
  font-weight: ${$disabled ? "400" : "300"};
  transition: all 0.4s;
  font-size: 14px;
  cursor: ${$disabled ? "not-allowed" : ""};
  pointer-events: ${$disabled ? "none" : "auto"};
  transition:
    background-color 0.3s,
    transform 0.2s;

  &:active {
    transform: ${$disabled ? "none" : "scale(0.9)"};
  }
`
);

export const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputField = styled(Field)<{ $hasError?: boolean }>(
  ({ $hasError = false }) => `
   padding: 14px;
   border-radius: 4px;
   border: ${$hasError ? "1px solid red" : "1px solid #ccc"};
   color: #364152;
   font-size: 13px;
   resize: none;
  -webkit-appearance: none;
  width: 100%;

   &::placeholder {
  color: #9ca3af;
  font-size: 14px;
}

   &:focus {
  outline: none;
  border-color: #0c1f7a;
}
`
);

export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input<{
  $fontSize?: string;
  $color?: string;
}>(
  ({ $fontSize = "13px", $color = "inherit" }) => `
  width: 100%;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: ${$fontSize};
  color: ${$color};

  &:focus {
  border-color: #0c1f7a;
  outline: none;
}
`
);

export const StyledPaper = styled(Paper)`
  position: absolute;
  margin-top: 4px;
  z-index: 2;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0;
  max-height: 250px;
  overflow-y: auto;
`;

export const StyledListItem = styled(ListItem)`
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background-color: #0c1f7a;
    color: #fff;
  }
`;

export const LoaderBox = styled(Box)`
  display: flex;
  align-items: center;
  padding: 10px 16px;
`;

export const ListMenuItems = styled(MenuItem)<{
  $fontSize?: string;
  $color?: string;
}>(
  ({ $fontSize = "13px", $color = "inherit" }) => `
  font-size: ${$fontSize};
  color: ${$color};
`
);
