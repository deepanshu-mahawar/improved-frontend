import Image, { StaticImageData } from "next/image";

import {
  ContentWrapper,
  Description,
  ImageWrapper,
  PrivateItemCardWrapper,
  Title,
} from "./styled";

interface PrivateItemCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
}

export const PrivateItemCard = ({
  image,
  title,
  description,
}: PrivateItemCardProps) => {
  return (
    <PrivateItemCardWrapper>
      <ImageWrapper>
        <Image src={image} alt="#" className="image" width={100} height={100} />
      </ImageWrapper>

      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
    </PrivateItemCardWrapper>
  );
};


