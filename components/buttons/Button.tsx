import Link from "next/link";
import { ButtonWrapper } from "./styled";


interface ButtonProps {
  buttonText?: string;
  route?: string;
}

export const Button = ({ buttonText, route }: ButtonProps) => {
  return (
    <ButtonWrapper className="button">
      <Link href={`/${route}`} className="buttonText">
        {buttonText}
      </Link>
    </ButtonWrapper>
  );
};
