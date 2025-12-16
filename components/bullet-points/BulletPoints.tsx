import CheckIcon from "@mui/icons-material/Check";
import {
  BulletPointsIconWrapper,
  BulletPointsSubWrapper,
  BulletPointsWrapper,
  Points,
} from "./styled";

interface BulletPointsProps {
  text: string[];
  width?: string;
  column?: boolean;
  icon?: string;
  gap?: string;
}

export const BulletPoints = ({
  text,
  column = false,
  icon = "true",
  gap,
  width = "90%"
}: BulletPointsProps) => {
  return (
    <BulletPointsWrapper $column={column} $gap={gap} $width={width}>
      {text.map((string, index) => (
        <BulletPointsSubWrapper key={index}>
          {icon === "true" ? (
            <BulletPointsIconWrapper>
              <CheckIcon className="check" />
            </BulletPointsIconWrapper>
          ) : (
            ""
          )}
          <Points>{string}</Points>
        </BulletPointsSubWrapper>
      ))}
    </BulletPointsWrapper>
  );
};
