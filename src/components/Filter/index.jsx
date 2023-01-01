import React, { useRef } from "react";
import { Container, Icons, MenuWrapper, Section, Wrapper } from "./styles";
import { Button, Input } from "../Generic";
import { Dropdown } from "antd";
import { uzeReplace } from "../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";


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
  const query = useSearch();
  const navigate = useNavigate();
  const location = useLocation();
  const OnChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };
  const items = (
    <MenuWrapper shadow={true}>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          defaultValue={query.get("country")}
          onChange={OnChange}
          name="country"
          ref={countryRef}
          width={200}
          height={44}
          placeholder={"Country"}
        />
        <Input
          defaultValue={query.get("address")}
          onChange={OnChange}
          name="address"
          ref={regionRef}
          width={200}
          height={44}
          placeholder={"Region"}
        />
        <Input
          defaultValue={query.get("city")}
          onChange={OnChange}
          name="city"
          ref={cityRef}
          width={200}
          height={44}
          placeholder={"City"}
        />
        <Input
          defaultValue={query.get("zip_code")}
          onChange={OnChange}
          name="zip_code"
          ref={zipCodeRef}
          width={200}
          height={44}
          placeholder={"Zip Code"}
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomsRef} width={200} placeholder={"Rooms"} />
        <Input ref={sizeRef} width={200} placeholder={"Size"} />
        <Input ref={sortRef} width={200} placeholder={"Sort"} />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriceRef} width={200} placeholder={"Min price"} />
        <Input ref={maxPriceRef} width={200} placeholder={"Max price"} />
      </Section>
    </MenuWrapper>
  );

  return (
    <Wrapper>
      <Container margin={"10px 0"}>
        <Input
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
          icon={<Icons.Houses />}
        />
        <Dropdown
          overlay={items}
          menu={null}
          placement="bottomRight"
          align={"center"}
          arrow={{ pointAtCenter: true }}
          trigger="click"
        >
          <div>
            <Button icon={true} width={131} type={"light"}>
              <Icons.Filter /> Advanced
            </Button>
          </div>
        </Dropdown>
        
        <Button icon={true} width={180} type={"primary"}>
          {" "}
          <Icons.Search /> Search
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Filter;
