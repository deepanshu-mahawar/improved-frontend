import { Rating } from "@mui/material";

import {
  FullName,
  MainWrapper,
  Message,
  NameSubWrapper,
  NameWrapper,
  ShortName,
} from "./styled";

interface TestimonialsProps {
  name: string;
  message: string;
  rating?: number;
}

export const Testimonial = ({
  name,
  message,
  rating = 3,
}: TestimonialsProps) => {
  return (
    <MainWrapper>
      <NameWrapper>
        <NameSubWrapper>
          <ShortName>
            {name[0]}
            {name.split(" ")[1][0]}
          </ShortName>
          <FullName>{name}</FullName>
        </NameSubWrapper>
        <Rating
          name="size-small"
          defaultValue={rating}
          precision={0.5}
          readOnly
          size="small"
        />
      </NameWrapper>
      <Message>{message}</Message>
    </MainWrapper>
  );
};
