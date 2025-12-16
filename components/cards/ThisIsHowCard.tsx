import Image, { StaticImageData } from "next/image";
import {
  ContentWrapper,
  Description,
  ImageWrapper,
  ThisIsHowCardWrapper,
  Title,
} from "./styled";

interface ThisIsHowCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
}

export const ThisIsHowCard = ({
  image,
  title,
  description,
}: ThisIsHowCardProps) => {
  return (
    <ThisIsHowCardWrapper>
      <ImageWrapper>
        <Image src={image} alt="#" width={100} height={100} />
      </ImageWrapper>

      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
    </ThisIsHowCardWrapper>
  );
};
