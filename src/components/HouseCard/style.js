import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as homeSize } from "../../assets/icons/home-size.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  width: 380px;
  height: 430px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  margin: 100px;
  border-radius: 3px;
`;

const Img = styled.img`
  border-radius: 3px 3px 0 0;
  width: 100%;
  max-height: 220px;
  border: 1px solid transparent;
  border-bottom: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? 'row' : 'column')};
  justify-content: ${({ footer }) => footer && 'space-between'};
  padding: 16px 20px;
  padding-top: 24px;
  padding: ${({ footer }) => footer && '10px 20px'};
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-top: none;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 16px;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({footer}) => footer ? "left" : "center"};
  flex-direction: ${({row}) => row ? "row" : "column"};
`;

const Icons = styled.div`
  
`;

Icons.Bed = styled(bed)`margin-bottom: 5px;`;
Icons.Bath = styled(bath)`margin-bottom: 5px;`;
Icons.Garage = styled(garage)`margin-bottom: 5px;`;
Icons.HomeSize = styled(homeSize)`margin-bottom: 5px;`;
Icons.Love = styled(love)`
  
`;
Icons.Resize = styled(resize)`
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

const Divider = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
`;

const Footer = styled.div`
  border-bottom: 1px solid #e6e9ec;
`;

export { Container, Img, Content, Details, Icons, Divider, Footer };
