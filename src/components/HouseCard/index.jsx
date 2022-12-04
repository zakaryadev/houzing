import React from "react";
import {Container, Content, Details, Divider, Footer, Icons, Img} from "./style";
import noImg from '../../assets/img/noimg.jpeg';
export const HouseCard = ({ url, title, info, bed, bath, garage, size,  }) => {
  return (
    <Container>
      <Img src={ url || noImg } />
      <Content>
        <div className='subTitle'>{ title || 'New Apartment Nice Wiew' }</div>
        <div className='info'>{ info || 'Quincy St, Brooklyn, NY, USA' }</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className='info'>{bed || '0'} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className='info'>{bath || '0'} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className='info'>{garage || '0'} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.HomeSize />
            <div className='info'>{size || '1200'} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className='info'>$2,800/mo</div>
          <div className='subTitle'>$7,500/mo</div>
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