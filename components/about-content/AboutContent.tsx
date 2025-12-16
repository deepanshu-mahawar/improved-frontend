import { AboutDescription, AboutTitle, AboutWrapper } from "./styled";

interface AboutContentProps {
  title: string;
  description: string;
}

export const AboutContent = ({ title, description }: AboutContentProps) => {
  return (
    <AboutWrapper>
      <AboutTitle>{title}</AboutTitle>
      <AboutDescription>{description}</AboutDescription>
    </AboutWrapper>
  );
};
