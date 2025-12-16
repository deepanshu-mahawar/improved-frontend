import { LinearProgress } from "@mui/material";
import { LoaderContainer } from "./styled";
import theme from "@/theme/theme";

export const Loader = () => {
  return (
    <LoaderContainer>
      <LinearProgress
        sx={{
          height: 4,
          borderRadius: 0,
          backgroundColor: `${theme.color.fade.blackFade}`,
          "& .MuiLinearProgress-bar": {
            borderRadius: 0,
            backgroundColor: `${theme.color.primary.mainPrimary}`,
          },
        }}
      />
    </LoaderContainer>
  );
};
