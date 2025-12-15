import CircleIcon from "@mui/icons-material/Circle";

import { ItemListSubWrapper, ItemListWrapper } from "./styled";
import { Points } from "../bullet-points/styled";

interface ListProps {
  content: string[];
}

export const ItemList = ({ content }: ListProps) => {
  return (
    <ItemListWrapper>
      {content.map((string, index) => (
        <ItemListSubWrapper key={index}>
          <CircleIcon className="bullet" />
          <Points>{string}</Points>
        </ItemListSubWrapper>
      ))}
    </ItemListWrapper>
  );
};


