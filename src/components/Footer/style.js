
import styled from "styled-components";

import { ReactComponent as email } from "../../assets/icons/email.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as map } from "../../assets/icons/map.svg";
import { ReactComponent as logoimg } from "../../assets/icons/logo.svg"



const Container = styled.div`
  width: 100%;
  margin-top: 96px;
  // padding: 48px 0;
  height: 417px;
  background: #0d263b;
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 48px;
  background: #0d263b;
`;
const LogoWrapper = styled.div`
  width: 100%;
  height:68px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  border-top: 1px solid #FFFFFF26;
  padding:0 130px;
`;
export const Section = styled.div`
 display:flex;
 align-items:center;
 cursor: ${({ logo }) => logo && 'pointer'};
 .active{
    color: yellowgreen;
 }
 color: white;
 gap:20px;
`
const Content = styled.div`
  width: 100%;
  max-width: 235px;
  display: flex;
  flex-direction: column;
  align-items:center;
  text-align:center;
`;
 Content.Title = styled.div`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: #FFFFFF;
   margin-bottom:32px;
`  ;
Content.Item = styled.div`
    display: flex;
    margin-bottom: 20px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
`  ;


const Icon = styled.div``;

Icon.Email = styled(email)`
  margin-right: 21px;
  width: 60px;
  path {
    fill: #fff;
  }
`;
Icon.Phone = styled(phone)`
  margin-right: 21px;
  width: 60px;
  path {
    fill: #fff;
  }
`;
Icon.Map = styled(map)`
  margin-right: 21px;
  width: 60px;
  path {
    fill: #fff;
  }
`;

export const Logo = styled(logoimg)`
 width:50px;
 height:36px;
 & path{
   fill:#fff;  
 }
 padding-right:10px;
`
export { Container, Wrapper, LogoWrapper, Content, Icon,};

