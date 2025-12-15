import CheckIcon from "@mui/icons-material/Check";
import { IconWrapper, MainWrapper, Points, SubWrapper } from "./styled";

interface BulletPointsProps {
  text: string[];
  column?: boolean;
  icon?: string;
  gap?: string;
}

export const BulletPoints = ({
  text,
  column = false,
  icon = "true",
  gap,
}: BulletPointsProps) => {
  return (
    <MainWrapper $column={column} $gap={gap}>
      {text.map((string, index) => (
        <SubWrapper key={index}>
          {icon === "true" ? (
            <IconWrapper>
              <CheckIcon className="check" />
            </IconWrapper>
          ) : (
            ""
          )}
          <Points>{string}</Points>
        </SubWrapper>
      ))}
    </MainWrapper>
  );
};
