import Image, { StaticImageData } from "next/image";
import {
  ContentWrapper,
  Description,
  ImageWrapper,
  MainWrapper,
  Title,
} from "./styled";

interface ThisIsHowCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
}

export const ThisIsHowCard = ({ image, title, description }: ThisIsHowCardProps) => {
  return (
    <MainWrapper>
      <ImageWrapper>
        <Image src={image} alt="#" width={80} height={80}/>
      </ImageWrapper>

      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
    </MainWrapper>
  );
};


