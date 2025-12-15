import Image, { StaticImageData } from "next/image";

import { HpNutshellMainWrapper, HpNutshellTitle, ImageWrapper } from "./styled";

interface HousingpassNutshellCardProps {
  image: string | StaticImageData;
  title: string;
}

export const HpNutshellCard = ({
  image,
  title,
}: HousingpassNutshellCardProps) => {
  return (
    <HpNutshellMainWrapper>
      <ImageWrapper>
        <Image src={image} alt="#" className="image" width={100} height={100}/>
      </ImageWrapper>

      <HpNutshellTitle>{title}</HpNutshellTitle>
    </HpNutshellMainWrapper>
  );
};


