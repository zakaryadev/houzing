import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import {
  Container, Content, Section, Icons, Details,
  Description, Title, Location, Wrapper
} from "./styles";
import {Button} from "../Generic";


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
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.log(data);
  return (
    <Wrapper gap={20}>
      {!Object.keys(data).length ? (
        <Container flex={1}>
          <Spinner />
        </Container>
      ) :
          <>
            <Container flex={3}>
    
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
                    <Details.Title>{data?.houseDetails?.beds} Beds</Details.Title>
                  </Details.Item>
                  <Details.Item row>
                    <Icons.Bath />
                    <Details.Title>{data?.houseDetails?.bath} Baths</Details.Title>
                  </Details.Item>
                  <Details.Item row>
                    <Icons.Garage />
                    <Details.Title>
                      {data?.houseDetails?.garage} Garage
                    </Details.Title>
                  </Details.Item>
                  <Details.Item row>
                    <Icons.HomeSize />
                    <Details.Title>{data?.houseDetails?.area} Sq Ft</Details.Title>
                  </Details.Item>
                  <Details.Item row>
                    <Icons.Calendar />
                    <Details.Title>{data?.houseDetails?.yearBuilt}</Details.Title>
                  </Details.Item>
                </Details>
                <Content flex>
                  <Details>
                    <Details.Item>
                      <Details.Item row>
                        <Details.Secprice>${data?.price}/mo</Details.Secprice>
                        <Details.Price>${data?.salePrice}/mo</Details.Price>
                      </Details.Item>
                      <Details.Username>{data?.user?.firstname}</Details.Username>
                    </Details.Item>
                  </Details>
                </Content>
              </Section>
    
              <Section row>
                <Description>
                  <Title>Description</Title>
                  <Description.Gradient style={{display: visible ? "none" : "block"}} />
                  <Description.Content style={{overflow: visible ? "visible" : "hidden", height: visible ? 'fit-content' : '150px'}} >
                    {data?.description.length > 30 ? data?.description :
                      "Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia." +
                      "Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia" +
                      "Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia." +
                      "Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia" +
                      "Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia." +
                      "Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia.Porta senectus ex tortor rutrum magna. Tempus natoque tortor ipsum suscipit hac ultrices orci. Interdum vestibulum cubilia nascetur sem orci inceptos magnis duis vitae enim. Sodales pulvinar sed laoreet elementum justo litora tristique erat taciti. Nisi amet risus mattis interdum dictum mollis magna donec fames ipsum. Lectus non leo platea maximus eros conubia"}
                  </Description.Content>
                </Description>
                <Button style={{marginTop: '20px'}} type={'light'} onClick={() => setVisible(!visible)}>Show More</Button>
    
              </Section>
    
              <Section>
                <Location>
                  <Title>Location</Title>
                </Location>
              </Section>
  
  
  
            </Container>
            <Container flex={1} className='user'>User</Container>
          </>
      }
    </Wrapper>
  );
};

export default HouseDetails;
