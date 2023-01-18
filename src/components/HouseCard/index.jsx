import React from "react";
import {Container, Content, Details, Icons, Img} from "./style";
import noImg from '../../assets/img/noimg.jpeg';
export const HouseCard = ({ data = {}, gap, onClick}) => {
  const { attachments, salePrice, price, houseDetails, address, city, country, description } = data;
  return (
    <Container gap={gap} onClick={onClick}>
      <Img src={(attachments && attachments[0]?.imgPath) || noImg}  />
      <Content>
        <div className='subTitle inline'>{city}, {country}, {description}</div>
        <div className='info'>{address || 'Quincy St, Brooklyn, NY, USA'} -{' '}
          {houseDetails?.room || 0}-rooms</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className='info'>{houseDetails?.beds || '0'} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className='info'>{houseDetails?.bath || '0'} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className='info'>{houseDetails?.garage || '0'} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.HomeSize />
            <div className='info'>{houseDetails?.area || '1200'} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>

      <Content footer>
        <Details.Item footer>
          <div className='info'>${salePrice}/mo</div>
          <div className='subTitle'>${price}/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <div className='icon-bg'>
            <Icons.Love />
          </div>
        </Details.Item>
      </Content>
    </Container>
  );
};
export default HouseCard;
