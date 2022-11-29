import React, { useRef } from 'react';
import {Container, Icons, MenuWrapper, Section, Wrapper} from "./styles";
import {Button, Input} from "../Generic";
import {Dropdown} from "antd";


export const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipCodeRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const items = (<MenuWrapper shadow={true} >
    <h1 className='subTitle'>
      Adress
    </h1>
    <Section>
      <Input ref={countryRef} width={200} height={44} placeholder={'Country'} />
      <Input ref={regionRef} width={200} height={44} placeholder={'Region'} />
      <Input ref={cityRef} width={200} height={44} placeholder={'City'} />
      <Input ref={zipCodeRef} width={200} height={44} placeholder={'Zip Code'} />
    </Section>
    <h1 className='subTitle'>
      Apartment info
    </h1>
    <Section>
      <Input ref={roomsRef} width={200} placeholder={'Rooms'} />
      <Input ref={sizeRef} width={200} placeholder={'Size'} />
      <Input ref={sortRef} width={200} placeholder={'Sort'} />
    </Section>
    <h1 className='subTitle'>
      Price
    </h1>
    <Section>
      <Input ref={minPriceRef} width={200} placeholder={'Min price'} />
      <Input ref={maxPriceRef} width={200} placeholder={'Max price'} />
    </Section>
  </MenuWrapper>);
  return (
      <Wrapper>
        <Container margin={"10px 0"}>
          <Input placeholder={"Enter an address, neighborhood, city, or ZIP code"} icon={<Icons.Houses />} />
          <Dropdown overlay={items} menu={"NULL"} placement="bottomRight" align={'center'} arrow={{ pointAtCenter: true }} >
            <div>
              <Button icon={true} width={131} type={'light'}><Icons.Filter /> Advanced</Button>
            </div>
          </Dropdown>
          <Button icon={true}  width={180} type={'primary'} > <Icons.Search /> Search</Button>
        </Container>
      </Wrapper>
  );
};

export default Filter;