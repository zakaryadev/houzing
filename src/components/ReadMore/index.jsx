import React from "react";
import { Container, Slider } from "./style";
import img1 from "../../assets/img/house2.png";
import { Button } from "../Generic";

export const ReadMore = () => {
  return (
    <Container>
        <Slider>
          <Slider.Content>
          <Slider.ContentTitle>
            Vermont Farmhouse With Antique Jail Is <br />
            the Week's Most Popular Home
          </Slider.ContentTitle>
            <Slider.ContentDesc className="subChild">
              <Button type={"primary"} width={200}>Read More</Button>
            </Slider.ContentDesc>
          </Slider.Content>
          <Slider.Bloor />
          <Slider.Img src={img1} />
        </Slider>
    </Container>
  );
};
export default ReadMore;