import styled from "styled-components";

const Container = styled.div`
  margin-top: 96px;
  position: relative;
  height: 571px;
`;

const Slider = styled.div`
  height: 571px;
  position: relative;
`;

Slider.Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  max-width: 1440px;
  margin: 0 auto;
  z-index: 9;
`;

Slider.ContentTitle = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-align: center;
  margin-bottom: 48px;
`;

Slider.ContentDesc = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

Slider.Bloor = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
`;

Slider.Img = styled.img`
  width: 100%;
  height: 571px;
`;

export { Container, Slider };
