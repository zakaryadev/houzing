import styled from "styled-components";
import { ReactComponent as favourite } from "../../assets/icons/love.svg";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as homeSize } from "../../assets/icons/home-size.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  ~ .user {
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    background-color: #ffffff;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: fit-content;
    .ant-checkbox-input {
      width: 18px;
      height: 18px;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  margin-top: 24px;
  padding: var(--padding);
  display: flex;
  gap: ${({ gap }) => gap && `${gap}px`};
`;

const Section = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (!row ? "row" : "column")};
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${({ mb }) => mb && mb + "px"};
  gap: ${({ gap }) => gap && `${gap}px`};
`;

const Content = styled.div`
  display: flex;
  align-items: ${({ flex }) => flex && "center"};
  justify-content: ${({ flex }) => !flex && "center"};
  flex-direction: ${({ flex }) => !flex && "column"};
  gap: ${({ gap }) => gap && `${gap}px`};
  & img {
    cursor: pointer;
    :active {
      transform: scale(0.9);
    }
    width: 16px;
    border-radius: ${({ user }) => user && "50%"};
    box-shadow: ${({ user }) => user && "0px 0px 10px rgba(13, 38, 59, 0.2);"};
    height: 16px;
  }
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: var(--colorPrimary);
`;

Content.SubTitle = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: var(--secondaryColor);
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 50px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Like = styled(favourite)`
  width: 14px;
  height: 14px;
`;

Icons.Share = styled(share)`
  width: 14px;
  height: 14px;
`;

Icons.Bed = styled(bed)`
  // margin-bottom: 5px;
`;

Icons.Bath = styled(bath)`
  // margin-bottom: 5px;
`;

Icons.Garage = styled(garage)`
  // margin-bottom: 5px;
`;

Icons.HomeSize = styled(homeSize)`
  // margin-bottom: 5px;
  width: 17px;
  height: 17px;
`;

Icons.Calendar = styled(calendar)`
  // margin-bottom: 5px;
  width: 19px;
  height: 19px;
`;

Icons.Resize = styled(resize)`
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #696969;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 16px;
  align-items: center;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  vertical-aligment: middle;
  align-items: center;
`;

Details.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  padding: 0 24px 0 8px;
`;

Details.Secprice = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
  margin-right: 8px;
`;

Details.Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

Details.Username = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-right: 0;
  color: #696969;
  text-align: right;
`;

const Description = styled.div`
  position: relative;
  width: 100%;
  margin-top: 92px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  margin-bottom: 24px;
`;

Description.Content = styled.div`
  margin-top: 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  height: 50px;
  color: #696969;
  overflow: hidden;
`;

Description.Gradient = styled.div`
  z-index: 5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;

const User = styled.div`
  display: flex;
  gap: 10px;
`;

User.Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 56px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export {
  Container,
  Content,
  Section,
  Icons,
  Details,
  Description,
  Title,
  Wrapper,
  User,
  Box,
};
