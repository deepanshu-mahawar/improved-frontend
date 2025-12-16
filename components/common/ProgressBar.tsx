"use client";

import { Bar, BarWrapper } from "./styled";

interface ProgressBarProps {
  value: number;
  max: number;
  color: string;
}

export const ProgressBar = ({ value, max, color }: ProgressBarProps) => {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <BarWrapper>
      <Bar width={percentage} color={color} />
    </BarWrapper>
  );
};
