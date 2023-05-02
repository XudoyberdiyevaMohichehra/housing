import React from "react";
import { Container, Content, Icon, Wrapper, Section, LogoWrapper, Logo } from "./style";


export const Footer = () => {
  return (
    <>

    <Container>
        <Wrapper>

      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Map/>
          329 Queensberry Street, North Melbourne VIC 3051, Australia.
        </Content.Item>
        <Content.Item>
          <Icon.Phone />
          123 456 7890
        </Content.Item>
        <Content.Item>
          <Icon.Email />
          support@houzing.com
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Wide Renge Of Properties</Content.Title>
        <Content.Item>Chicago</Content.Item>
        <Content.Item>Los Angeles</Content.Item>
        <Content.Item>Miami</Content.Item>
        <Content.Item>New York</Content.Item>
      </Content>
      <Content>
        <Content.Title>Financing Made Easy</Content.Title>
        <Content.Item>Apartments</Content.Item>
        <Content.Item>Condos</Content.Item>
        <Content.Item>Houses</Content.Item>
        <Content.Item>Offices</Content.Item>
        <Content.Item>Retail</Content.Item>
        <Content.Item>Villas</Content.Item>
      </Content>
      <Content>
        <Content.Title>See Neighborhoods</Content.Title>
        <Content.Item>About Us</Content.Item>
        <Content.Item>Terms & Conditions</Content.Item>
        <Content.Item>Support Center</Content.Item>
        <Content.Item>Contact Us</Content.Item>
      </Content>
     </Wrapper>
     <LogoWrapper>
      <Section>
        <Logo/>
        <h3>Housing</h3>
      </Section>
      
      <Section>
            <div >Copyright © 2021 CreativeLayers. All Right Reserved.</div>
            {/* <button style={{ width: '45px', height:'45px', color: 'white', background: '#0061df', border:'none', borderRadius: '2px',}}>v</button> */}
      </Section>
     </LogoWrapper>
    </Container>
    
    </>
  );
};
export default Footer

