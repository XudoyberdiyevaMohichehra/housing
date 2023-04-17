import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRequest from '../../hooks/useRequest'
import { Wrapper, Container, Details, Section, Content, Icons, Description } from "./style";
const {REACT_APP_BASE_URL: url} = process.env;


export const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();
  const request = useRequest();

  useEffect(() => {
    fetch(
      `http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses/id/${params?.id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params?.id]);

  return (
    <>
      <Wrapper>
        <Container flex={3}>
            {/* <h1>{data?.address}</h1> */}
            <Section>
              <Content style={{ alignItems: "flex-start" }}>
                <div>
                  <Content.Title large>{data.name}</Content.Title>
                </div>
                <div>
                  <div className="info">
                    {data?.city} {data?.address}
                  </div>
                </div>
              </Content>
              <Content flex>
                <Icons.Share /> <Icons.Text>Share</Icons.Text>
                <Icons.Like /> <Icons.Text>Save</Icons.Text>
              </Content>
            </Section>
          <Section>
            <Details>
              <Icons.Bed />
              <Details.Title>Bed {data?.houseDetails?.beds || 0}</Details.Title>

              <Icons.Bath />
              <Details.Title>
                Bath {data?.houseDetails?.bath || 0}
              </Details.Title>

              <Icons.Garage />
              <Details.Title>
                Garage {data?.houseDetails?.garage || 0}
              </Details.Title>

              <Icons.Ruler />
              <Details.Title>
                Ruler {data?.houseDetails?.area || 0}kv
              </Details.Title>
            </Details>
            <Content>
              <Content flex>
                <del>
                  <Details.Title> ${data?.price || 0}</Details.Title>
                </del>
                <div className="title">${data?.salePrice || 0}</div>
              </Content>
              <div className="info" style={{ textAlign: "end" }}>
                {data?.user?.firstname}
              </div>
            </Content>
          </Section>
          <Content.Title>Description</Content.Title>
          <Description>{data?.description}</Description>
          <Content.Title>Feature</Content.Title>
          <Section>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
          </Section>
          <Content.Title mt={48} mb>
            Location
          </Content.Title>
        </Container>
      </Wrapper>
    </>
  );
};
export default HouseItem

