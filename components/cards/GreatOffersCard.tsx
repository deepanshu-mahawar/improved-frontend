import React from "react";

import {
  GreatOffersCardWrapper,
  GreatOffersContentWrapper,
  GreatOffersTitle,
  IconWrapper,
} from "./styled";
import { ItemList } from "./ItemList";

interface GreatOffersCardProps {
  icon: React.ElementType;
  title: string;
  description: string[];
}

export const GreatOffersCard = ({
  icon: Icon,
  title,
  description,
}: GreatOffersCardProps) => {
  return (
    <GreatOffersCardWrapper>
      <IconWrapper>
        <Icon className="logo" />
      </IconWrapper>
      <GreatOffersContentWrapper>
        <GreatOffersTitle>{title}</GreatOffersTitle>
        <ItemList content={description} />
      </GreatOffersContentWrapper>
    </GreatOffersCardWrapper>
  );
};
