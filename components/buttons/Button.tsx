import Link from "next/link";
import { MainWrapper } from "./styled";

interface ButtonProps {
  buttonText?: string;
  route?: string;
}

export const Button = ({ buttonText, route }: ButtonProps) => {
  return (
    <MainWrapper className="button">
      <Link href={`/${route}`} className="buttonText">
        {buttonText}
      </Link>
    </MainWrapper>
  );
};
