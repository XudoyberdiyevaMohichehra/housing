import React from "react";
import { Container, Content, Wrapper, Icons, TextWrapper } from "./style";

export const Why = () => {

  return (
    <Container>
      <TextWrapper>
        <h1 className="title">Why Choose Us?</h1>
        <div className="info ">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </TextWrapper>
      <Wrapper>
        <Content>
          <Icons.Email/>
          <div className="subTitle">Trusted By Thousands</div>
          <div className='info'>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <Icons.Calculator />
          <div className="subTitle">Wide Renge Of Properties</div>
          <div className='info'>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <Icons.CardHouse />
          <div className="subTitle">Financing Made Easy</div>
          <div className='info'>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <Icons.CardMaps />
          <div className="subTitle">See Neighborhoods</div>
          <div className='info'>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Why;



