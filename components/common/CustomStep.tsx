import Check from "@mui/icons-material/Check";
import { StepIconProps } from "@mui/material/StepIcon";
import { StepIconRoot } from "./styled";

export const CustomStepIcon = (props: StepIconProps) => {
  const { active, completed, className, icon } = props;
  return (
    <StepIconRoot $ownerState={{ active, completed }} className={className}>
      {completed ? <Check fontSize="small" /> : icon}
    </StepIconRoot>
  );
};
