import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Checkbox } from "antd";
import YandexMap from "../YandexMap";
import Spinner from "../Spinner/Spinner";
import { Button, Input } from "../Generic";
import {
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
} from "./styles";

import Barbecue from "../../assets/icons/barbecue.svg";
import Air from "../../assets/icons/air.svg";
import Dryer from "../../assets/icons/dryer.svg";
import Gym from "../../assets/icons/gym.svg";
import Lawn from "../../assets/icons/gras.svg";
import Laundry from "../../assets/icons/laundry.svg";
import Microwave from "../../assets/icons/microwave.svg";
import Shower from "../../assets/icons/shower.svg";
import Refrigerator from "../../assets/icons/refrigerator.svg";
import Sauna from "../../assets/icons/sauna.svg";
import Swimming from "../../assets/icons/swimmer.svg";
import Cable from "../../assets/icons/cabel.svg";
import Soap from "../../assets/icons/soap.svg";
import WiFi from "../../assets/icons/wifi.svg";
import Blinds from "../../assets/icons/blinds.svg";
import Room from "../../assets/icons/chair.svg";

import avatar from "../../assets/img/user.jpg";
import Recent from "../Recent";

export const HouseDetails = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const { REACT_APP_BASE_URL: url } = process.env;
  const { id } = useParams();

  useEffect(() => {
    fetch(`${url}houses/id/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
        res?.data &&
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <React.Fragment>
      {!Object.keys(data).length ? (
        <Wrapper>
          <Container flex={1}>
            <Spinner />
          </Container>
        </Wrapper>
      ) : (
        <React.Fragment>
          <Wrapper gap={20}>
            <Container flex={4}>
              <Section>
                <Content>
                  <Content.Title>{data?.name}</Content.Title>
                  <Content.SubTitle>
                    {data?.address}, {data?.city}, {data?.country}
                  </Content.SubTitle>
                </Content>
                <Content flex>
                  <Icons>
                    <Icons.Share />
                  </Icons>
                  <Icons.Title>Share</Icons.Title>
                  <Icons>
                    <Icons.Like />
                  </Icons>
                  <Icons.Title>Save</Icons.Title>
                </Content>
              </Section>

              <Section>
                <Details>
                  <Details.Item row>
                    <Icons.Bed />
                    <Details.Title>
                      {data?.houseDetails?.beds} Beds
                    </Details.Title>
                  </Details.Item>
                  <Details.Item row>
                    <Icons.Bath />
                    <Details.Title>
                      {data?.houseDetails?.bath} Baths
                    </Details.Title>
                  </Details.Item>
                  <Details.Item row>
                    <Icons.Garage />
                    <Details.Title>
                      {data?.houseDetails?.garage} Garage
                    </Details.Title>
                  </Details.Item>
                  <Details.Item row>
                    <Icons.HomeSize />
                    <Details.Title>
                      {data?.houseDetails?.area} Sq Ft
                    </Details.Title>
                  </Details.Item>
                  <Details.Item row>
                    <Icons.Calendar />
                    <Details.Title>
                      {data?.houseDetails?.yearBuilt}
                    </Details.Title>
                  </Details.Item>
                </Details>
                <Content flex>
                  <Details>
                    <Details.Item>
                      <Details.Item row>
                        <Details.Secprice>${data?.price}/mo</Details.Secprice>
                        <Details.Price>${data?.salePrice}/mo</Details.Price>
                      </Details.Item>
                      <Details.Username>
                        {data?.user?.firstname}
                      </Details.Username>
                    </Details.Item>
                  </Details>
                </Content>
              </Section>

              <Section row mb={48}>
                <Description>
                  <Title>Description</Title>
                  <Description.Gradient
                    style={{ display: visible ? "none" : "block" }}
                  />
                  <Description.Content
                    style={{
                      overflow: visible ? "visible" : "hidden",
                      height: visible ? "fit-content" : "10px",
                    }}
                  >
                    {data?.description != null
                      ? data?.description
                      : "Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia." +
                        "Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia" +
                        "Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia." +
                        "Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia" +
                        "Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia." +
                        "Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia"}
                  </Description.Content>
                </Description>
                <Button
                  style={{ marginTop: "20px" }}
                  type={"light"}
                  onClick={() => setVisible(!visible)}
                >
                  Show More
                </Button>
              </Section>
            </Container>

            <Container flex={1} className="user">
              <User.Img src={avatar} alt="user-avatar" />
              <Content>
                <div className="subTitle">{data?.user?.firstname}</div>
                <div className="info">{data?.user?.email}</div>
              </Content>
              <Input placeholder={"Name"} />
              <Input placeholder={"Phone"} />
              <Input placeholder={"Email"} />
              <Input placeholder={"Message"} />
              <Checkbox>
                By submitting this form I agree to Terms of Use
              </Checkbox>
              <Button width={"100%"}>Send request</Button>
            </Container>
          </Wrapper>

          <Wrapper gap={20}>
            <Section row mb={48}>
              <YandexMap />
            </Section>
          </Wrapper>

          <Wrapper gap={75} flex>
            <Container>
              <Title>Features</Title>
              <Section mb={48} gap={75}>
                <Box>
                  <Content flex gap={10}>
                    <img alt="icon" src={Air} />
                    <div className="info">Air Conditioning</div>
                  </Content>
                  <Content flex gap={10}>
                    <img alt="icon" src={Barbecue} />
                    <div className="info">Barbeque</div>
                  </Content>
                  <Content flex gap={10}>
                    <img alt="icon" src={Dryer} />
                    <div className="info">Dryer</div>
                  </Content>
                  <Content flex gap={10}>
                    <img alt="icon" src={Gym} />
                    <div className="info">Gym</div>
                  </Content>
                </Box>
                <Box>
                  <Content flex gap={10}>
                    <img alt="icon" src={Lawn} />
                    <div className="info">Lawn</div>
                  </Content>
                  <Content flex gap={10}>
                    <img alt="icon" src={Laundry} />
                    <div className="info">Laundry</div>
                  </Content>
                  <Content flex gap={10}>
                    <img alt="icon" src={Microwave} />
                    <div className="info">Microwave</div>
                  </Content>
                  <Content flex gap={10}>
                    <img alt="icon" src={Shower} />
                    <div className="info">Outdoor Shower</div>
                  </Content>
                </Box>
                <Box>
                  <Content flex gap={10}>
                    <img alt="icon" src={Refrigerator} />
                    <div className="info">Refrigerator</div>
                  </Content>
                  <Content flex gap={10}>
                    <img alt="icon" src={Sauna} />
                    <div className="info">Sauna</div>
                  </Content>
                  <Content flex gap={10}>
                    <img alt="icon" src={Swimming} />
                    <div className="info">Swimming Pool</div>
                  </Content>
                  <Content flex gap={10}>
                    <img alt="icon" src={Cable} />
                    <div className="info">TV Cable</div>
                  </Content>
                </Box>
                <Box>
                  <Content flex gap={10}>
                    <img alt="icon" src={Soap} />
                    <div className="info">Washer</div>
                  </Content>
                  <Content flex gap={10}>
                    <img alt="icon" src={WiFi} />
                    <div className="info">WiFi</div>
                  </Content>
                  <Content flex gap={10}>
                    <img alt="icon" src={Blinds} />
                    <div className="info">Window Coverings</div>
                  </Content>
                  <Content flex gap={10}>
                    <img alt="icon" src={Room} />
                    <div className="info">Dining room</div>
                  </Content>
                </Box>
              </Section>
            </Container>
          </Wrapper>
          <Recent />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default HouseDetails;
