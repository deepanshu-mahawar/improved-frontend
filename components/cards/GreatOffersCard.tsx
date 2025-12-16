import React from "react";

import {
  GreatOffersCardIconWrapper,
  GreatOffersCardWrapper,
  GreatOffersContentWrapper,
  GreatOffersTitle,
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
      <GreatOffersCardIconWrapper>
        <Icon className="logo" />
      </GreatOffersCardIconWrapper>
      <GreatOffersContentWrapper>
        <GreatOffersTitle>{title}</GreatOffersTitle>
        <ItemList content={description} />
      </GreatOffersContentWrapper>
    </GreatOffersCardWrapper>
  );
};
