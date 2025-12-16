"use client";

import styled from "styled-components";
import theme from "@/theme/theme";
import { TextField } from "@mui/material";
import ReactGoogleAutocomplete from "react-google-autocomplete";

//testimonial styling
export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  border-radius: 10px;
  gap: 20px;
  border: 1px solid ${theme.color.border.testimonialBorder};
  background: ${theme.color.common.light};
  cursor: pointer;

  @media (max-width: 599px) {
    width: 100%;
    padding: 30px;
    height: 200px;
  }

  @media (min-width: 767px) and (max-width: 959px) {
    padding: 20px;
    height: 200px;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NameSubWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ShortName = styled.p`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.common.dark};
  color: ${theme.color.common.light};
  font-weight: 600;
  font-size: 16px;

  @media (max-width: 599px) {
    font-size: 14px;
    width: 40px;
    height: 40px;
  }
`;

export const FullName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.color.text.darkBlackTitle};

  @media (max-width: 599px) {
    font-size: 14px;
  }
`;

export const Message = styled.p`
  font-size: 15px;
  color: ${theme.color.text.darkBlackText};

  @media (max-width: 959px) {
    font-size: 14px;
  }
`;

// faq styling
export const FaqMainWrapper = styled.div`
  background-color: ${theme.color.common.light};
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 1px 1px 0 rgba(7, 28, 31, 0.1);
  border: 1px solid ${theme.color.border.cardBorder};

  @media (max-width: 959px) {
    padding: 16px;
  }
  @media (max-width: 599px) {
    padding: 14px;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;

export const Question = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.color.text.darkBlackTitle};

  @media (max-width: 959px) {
    font-size: 14px;
    text-align: start;
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${theme.color.text.darkBlackTitle};
  cursor: pointer;
  transition: transform 300ms ease-in-out;

  &.rotate {
    transform: rotate(45deg);
  }

  @media (max-width: 959px) {
    .icon {
      font-size: 20px;
    }
  }
`;

export const AnswerWrapper = styled.div`
  width: 90%;
  max-height: 0;
  overflow: hidden;
  transition: max-height 200ms ease-in-out, margin-top 200ms ease-in-out;
  margin-top: 0;

  &.open {
    max-height: 200px;
    margin-top: 12px;
  }

  @media (max-width: 959px) {
    &.open {
      margin-top: 0px;
    }
  }
`;

export const Answer = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding-top: 5px;
  color: ${theme.color.text.darkBlackText};

  @media (max-width: 959px) {
    font-size: 14px;
    padding-top: 10px;
  }
  @media (max-width: 599px) {
    font-size: 12px;
  }
`;

//loader styling
export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1301;
  width: 100%;
`;

//reset password styling
export const ResetModalContainer = styled.div`
  width: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 12px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
`;

export const ResetModalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10;
`;

export const ResetModalInputfield = styled(TextField)`
  & .MuiInputBase-root {
    font-size: 14px;
    width: 100%;
  }
`;

export const ResetModalTitle = styled.h1`
  font-size: 16px;
  color: ${theme.color.text.darkBlackTitle};
`;

export const ResetModalButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

export const ResetModalButton = styled.button`
  width: 150px;
  padding: 10px 13px;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  border-radius: 4px;
  text-transform: capitalize !;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease,
    transform 0.1s ease;

  &:active {
    transform: scale(0.9);
  }
  color: ${({ disabled }) =>
    disabled ? theme.color.text.darkBlackText : theme.color.common.light};
  background-color: ${({ disabled }) =>
    disabled
      ? theme.color.border.headerBorder
      : theme.color.primary.mainPrimary};
`;

//progressBar styling
export const BarWrapper = styled.div`
  width: 30%;
  height: 8px;
  border-radius: 4px;
  background-color: #e0e0e0;
`;

export const Bar = styled.div<{ width: number; color: string }>`
  width: ${({ width }) => width}%;
  height: 100%;
  border-radius: 4px;
  background-color: ${({ color }) => color};
  transition: width 0.3s ease-in-out;
`;

//customStep styling
export const StepIconRoot = styled("div")<{
  $ownerState: { active?: boolean; completed?: boolean };
}>(({ $ownerState }) => ({
  display: "flex",
  height: 24,
  width: 24,
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: $ownerState.completed
    ? "green"
    : $ownerState.active
    ? `${theme.color.primary.mainPrimary}`
    : "#ccc",
  color: "#fff",
  fontWeight: 400,
  fontSize: 14,
}));

//addressAutoComplete
export const GoogleAutoComplete = styled(ReactGoogleAutocomplete)<{
  $padding?: string;
  $fontSize?: string;
}>(
  ({ $padding = "14px", $fontSize = "14px" }) => `
  width: 100%;
  padding: ${$padding};
  outline: none;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: ${$fontSize};

  :hover{
    font-size: ${$fontSize};
  }

  &:focus {
    outline: none;
    border-color: ${theme.color.primary.mainPrimary};
  }
`
);
