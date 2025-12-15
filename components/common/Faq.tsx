"use client";

import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import {
  Answer,
  AnswerWrapper,
  FaqMainWrapper,
  IconWrapper,
  Question,
  QuestionWrapper,
} from "./styled";

interface FaqsProps {
  question: string;
  answer: string;
}

export const Faq = ({ question, answer }: FaqsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAnswer = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <FaqMainWrapper>
      <QuestionWrapper
        as="button"
        onClick={toggleAnswer}
        aria-expanded={isOpen}
      >
        <Question>{question}</Question>
        <IconWrapper className={`faq-open ${isOpen ? "rotate" : ""}`}>
          <AddIcon className="icon" />
        </IconWrapper>
      </QuestionWrapper>
      <AnswerWrapper className={isOpen ? "open" : ""}>
        <Answer>{answer}</Answer>
      </AnswerWrapper>
    </FaqMainWrapper>
  );
};
