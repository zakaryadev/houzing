import React, { useEffect, useState } from "react";
import {
  Container,
  Icons,
  MenuWrapper,
  Section,
  Wrapper,
  SelectAnt,
} from "./styles";
import { Button, Input } from "../Generic";
import { uzeReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import { Dropdown } from "antd";

export const Filter = () => {
  const query = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  const { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);
  const [value, setValue] = useState("Select");

  useEffect(() => {
    fetch(`${url}categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let [res] = data.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    res?.name && setValue(res?.name);
    !query.get("category_id") && setValue("Select Category");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.search, data]);

  const handleChange = (category_id) => {
    navigate(`/properties${uzeReplace("category_id", category_id)}`);
  };
  const handleSort = (value) => {
    navigate(`/properties${uzeReplace("sort", value)}`);
  };
  const OnChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  const menu = (
    <MenuWrapper shadow={true}>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          defaultValue={location.search && query.get("country")}
          onChange={OnChange}
          name="country"
          width={200}
          height={44}
          placeholder={"Country"}
        />
        <Input
          defaultValue={location.search && query.get("address")}
          onChange={OnChange}
          name="address"
          width={200}
          height={44}
          placeholder={"Region"}
        />
        <Input
          defaultValue={location.search && query.get("city")}
          onChange={OnChange}
          name="city"
          width={200}
          height={44}
          placeholder={"City"}
        />
        <Input
          defaultValue={location.search && query.get("zip_code")}
          onChange={OnChange}
          name="zip_code"
          width={200}
          height={44}
          placeholder={"Zip Code"}
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input
          defaultValue={location.search && query.get("room")}
          onChange={OnChange}
          name="room"
          width={200}
          placeholder={"Rooms"}
        />
        <Input
          defaultValue={location.search && query.get("size")}
          onChange={OnChange}
          name="size"
          width={200}
          placeholder={"Count Elements"}
        />
        <SelectAnt
          onChange={handleSort}
          defaultValue={query.get("sort") || "Select Sort"}
        >
          <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
          <SelectAnt.Option value={"asc"}>Ascending</SelectAnt.Option>
          <SelectAnt.Option value={"desc"}>Descending</SelectAnt.Option>
        </SelectAnt>
        <SelectAnt onChange={handleChange} defaultValue={value}>
          <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
          {data.map((item) => {
            return (
              <SelectAnt.Option key={item.id} value={item?.id}>
                {item?.name}
              </SelectAnt.Option>
            );
          })}
        </SelectAnt>
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input
          defaultValue={query.get("min_price")}
          onChange={OnChange}
          name="min_price"
          width={200}
          placeholder={"Min price"}
        />
        <Input
          defaultValue={query.get("max_price")}
          onChange={OnChange}
          name="max_price"
          width={200}
          placeholder={"Max price"}
        />
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
          overlay={menu}
          menu={null}
          placement="bottomRight"
          align="center"
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
          <Icons.Search /> Search
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Filter;
